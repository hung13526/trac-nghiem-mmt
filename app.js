/**
 * Mạng Máy Tính - UTC & Eduso Practice Web App Logic
 * Rule: Chỉ khi nào nhấn nút nộp bài thì mới hiện đáp án và giải thích!
 * Hỗ trợ chọn nhiều đáp án độc lập cho các câu hỏi chọn nhiều (Chọn 3).
 */

// Application State
const state = {
  currentChapterId: "ch1",
  userAnswers: {},       // { [chapterId]: { [qId]: ['A', 'B'] or 'text' } }
  flaggedQuestions: {},  // { [chapterId]: { [qId]: true } }
  examSubmitted: {},     // { [chapterId]: boolean } - true CHỈ KHI ĐÃ BẤM NỘP BÀI
  filter: "all",         // 'all', 'answered', 'unanswered', 'flagged', 'wrong', 'correct'
  searchQuery: "",
  theme: localStorage.getItem("mmt_theme") || "light",
  timerSeconds: 45 * 60,
  timerInterval: null
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadSavedState();
  initTabs();
  initEventListeners();
  renderCurrentChapter();
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem("mmt_theme", state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.textContent = state.theme === "dark" ? "☀️" : "🌙";
  }
}

// LocalStorage Persistence
function saveState() {
  localStorage.setItem("mmt_user_answers", JSON.stringify(state.userAnswers));
  localStorage.setItem("mmt_flagged", JSON.stringify(state.flaggedQuestions));
  localStorage.setItem("mmt_exam_submitted", JSON.stringify(state.examSubmitted));
}

function loadSavedState() {
  try {
    const savedAns = localStorage.getItem("mmt_user_answers");
    if (savedAns) state.userAnswers = JSON.parse(savedAns);

    const savedFlag = localStorage.getItem("mmt_flagged");
    if (savedFlag) state.flaggedQuestions = JSON.parse(savedFlag);

    const savedSub = localStorage.getItem("mmt_exam_submitted");
    if (savedSub) state.examSubmitted = JSON.parse(savedSub);
  } catch (e) {
    console.error("Error loading saved state", e);
  }
}

// Navigation Tabs
function initTabs() {
  const tabsContainer = document.getElementById("tabsContainer");
  if (!tabsContainer) return;
  tabsContainer.innerHTML = "";

  Object.values(QUIZ_DATA).forEach((chapter) => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${chapter.id === "eduso" ? "eduso-tab" : ""} ${chapter.id === state.currentChapterId ? "active" : ""}`;
    btn.dataset.id = chapter.id;
    btn.innerHTML = `
      <span>${getChapterIcon(chapter.id)}</span>
      <span>${chapter.badge}</span>
      <span class="tab-badge">${chapter.questions.length}</span>
    `;
    btn.addEventListener("click", () => switchChapter(chapter.id));
    tabsContainer.appendChild(btn);
  });
}

function getChapterIcon(id) {
  switch (id) {
    case "ch1": return "🌐";
    case "ch2": return "🔄";
    case "ch3": return "🔀";
    case "ch4": return "⚡";
    case "eduso": return "🏆";
    default: return "📄";
  }
}

function switchChapter(chapterId) {
  if (state.currentChapterId === chapterId) return;

  state.currentChapterId = chapterId;
  state.filter = "all";
  state.searchQuery = "";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  // Reset filter chip UI
  document.querySelectorAll(".filter-chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.filter === "all");
  });

  // Update tabs active state
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === chapterId);
  });

  resetOrStartTimer();
  renderCurrentChapter();
}

// Timer Logic
function resetOrStartTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }

  const isSubmitted = !!state.examSubmitted[state.currentChapterId];
  if (isSubmitted) {
    const display = document.getElementById("timerDisplay");
    if (display) display.textContent = "Đã hoàn thành";
    return;
  }

  const chapter = QUIZ_DATA[state.currentChapterId];
  state.timerSeconds = chapter.timeLimit || 45 * 60;
  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    updateTimerDisplay();

    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
      alert("Hết giờ làm bài! Hệ thống sẽ tự động nộp bài.");
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const display = document.getElementById("timerDisplay");
  const timerBox = document.getElementById("examTimerBox");
  if (!display) return;

  const minutes = Math.floor(state.timerSeconds / 60);
  const seconds = state.timerSeconds % 60;
  display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  if (timerBox) {
    if (state.timerSeconds <= 300) {
      timerBox.classList.add("warning");
    } else {
      timerBox.classList.remove("warning");
    }
  }
}

// Event Listeners
function initEventListeners() {
  // Theme toggle
  document.getElementById("btnTheme")?.addEventListener("click", toggleTheme);

  // Search input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      filterQuestions();
    });
  }

  // Filter chips
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.filter = chip.dataset.filter;
      filterQuestions();
    });
  });

  // Submission Buttons
  document.getElementById("btnSubmitExam")?.addEventListener("click", confirmSubmitExam);
  document.getElementById("btnBottomSubmit")?.addEventListener("click", confirmSubmitExam);

  // Reset / Retake Buttons
  document.getElementById("btnResetQuiz")?.addEventListener("click", resetCurrentChapter);
  document.getElementById("btnToggleAllExp")?.addEventListener("click", toggleAllExplanations);

  // Modal Buttons
  document.getElementById("btnModalReview")?.addEventListener("click", () => {
    closeModal();
    // Activate wrong filter so user can immediately review wrong questions
    const wrongChip = document.querySelector(".filter-chip[data-filter='wrong']");
    if (wrongChip) wrongChip.click();
    window.scrollTo({ top: 120, behavior: "smooth" });
  });

  document.getElementById("btnModalRetake")?.addEventListener("click", () => {
    closeModal();
    resetCurrentChapter();
  });

  document.getElementById("btnModalClose")?.addEventListener("click", closeModal);
}

// Render Current Chapter
function renderCurrentChapter() {
  const chapter = QUIZ_DATA[state.currentChapterId];
  if (!chapter) return;

  const isSubmitted = !!state.examSubmitted[chapter.id];

  // Update Banner Info
  document.getElementById("bannerTitle").textContent = chapter.title;
  document.getElementById("bannerSubtitle").textContent = chapter.subtitle;
  document.getElementById("bannerDoc").innerHTML = `📄 Nguồn: <strong>${chapter.docName}</strong>`;

  // Update Status Banner
  const statusBadge = document.getElementById("bannerStatusBadge");
  if (statusBadge) {
    if (isSubmitted) {
      statusBadge.className = "banner-status-badge submitted";
      statusBadge.innerHTML = `<span>✓</span> Đã nộp bài (Đang xem đáp án & giải thích)`;
    } else {
      statusBadge.className = "banner-status-badge doing";
      statusBadge.innerHTML = `<span>✏️</span> Đang làm bài (Chọn đáp án rồi nhấn Nộp bài)`;
    }
  }

  // Update Submit Button States
  const submitBtn = document.getElementById("btnSubmitExam");
  const bottomSubmitBtn = document.getElementById("btnBottomSubmit");
  const toggleExpBtn = document.getElementById("btnToggleAllExp");

  if (submitBtn) {
    submitBtn.style.display = isSubmitted ? "none" : "flex";
  }
  if (bottomSubmitBtn) {
    bottomSubmitBtn.style.display = isSubmitted ? "none" : "flex";
  }
  if (toggleExpBtn) {
    toggleExpBtn.style.display = isSubmitted ? "flex" : "none";
  }

  // Ensure state dictionaries
  if (!state.userAnswers[chapter.id]) state.userAnswers[chapter.id] = {};
  if (!state.flaggedQuestions[chapter.id]) state.flaggedQuestions[chapter.id] = {};

  // Render question list
  renderQuestionsList(chapter, isSubmitted);

  // Render sidebar question palette
  renderPalette(chapter, isSubmitted);

  // Update progress stats
  updateProgress(chapter, isSubmitted);
}

// Render Questions
function renderQuestionsList(chapter, isSubmitted) {
  const container = document.getElementById("questionsList");
  if (!container) return;
  container.innerHTML = "";

  chapter.questions.forEach((q, index) => {
    const qNum = q.number || (index + 1);
    const card = document.createElement("div");
    card.id = `qcard_${q.id}`;
    card.dataset.id = q.id;
    card.dataset.index = index;

    const currentAns = state.userAnswers[chapter.id][q.id] || [];
    const isFlagged = !!state.flaggedQuestions[chapter.id][q.id];
    const isAnswered = q.type === "fill"
      ? (typeof currentAns === "string" && currentAns.trim().length > 0)
      : (Array.isArray(currentAns) && currentAns.length > 0);
    const isCorrect = isAnswered && checkAnswerCorrect(q, currentAns);

    // Card class based on submission
    let cardClass = "question-card";
    if (isSubmitted) {
      cardClass += isCorrect ? " status-correct" : " status-wrong";
    }
    card.className = cardClass;

    // Level badges
    let levelClass = "level-nb";
    if (q.level === "Thông hiểu") levelClass = "level-th";
    if (q.level === "Vận dụng") levelClass = "level-vd";
    if (q.level === "Vận dụng cao") levelClass = "level-vdc";

    // Status badge (ONLY SHOWN AFTER SUBMISSION!)
    let statusBadgeHtml = "";
    if (isSubmitted) {
      if (!isAnswered) {
        statusBadgeHtml = `<span class="q-status-badge" style="display:inline-flex; background:var(--bg-card-hover); color:var(--text-muted); border:1px solid var(--border-color);">Chưa làm (0/${q.points || 2}đ)</span>`;
      } else if (isCorrect) {
        statusBadgeHtml = `<span class="q-status-badge correct" style="display:inline-flex;">✓ Đúng (+${q.points || 2}đ)</span>`;
      } else {
        statusBadgeHtml = `<span class="q-status-badge incorrect" style="display:inline-flex;">✗ Sai (0/${q.points || 2}đ)</span>`;
      }
    }

    // Card Header
    const isMultiChoice = q.type === "multiple";
    const headerHtml = `
      <div class="question-header">
        <div class="q-meta">
          <span class="q-num">Câu ${qNum}</span>
          ${q.level ? `<span class="q-badge ${levelClass}">${q.level}</span>` : ""}
          ${isMultiChoice ? `<span class="q-badge badge-multi">☑️ Chọn nhiều đáp án</span>` : ""}
          ${q.type === "fill" ? `<span class="q-badge" style="background:#e0e7ff; color:#3730a3; font-weight:700;">✍️ Điền đáp án</span>` : ""}
          <span class="q-badge">${q.points || 2} điểm</span>
          ${statusBadgeHtml}
        </div>
        <div class="q-actions">
          <button class="btn-flag ${isFlagged ? "active" : ""}" title="Đánh dấu câu hỏi này để xem lại" onclick="toggleFlag('${q.id}')">
            ${isFlagged ? "★" : "☆"}
          </button>
        </div>
      </div>
    `;

    // Question Text
    const textHtml = `<div class="question-text">${escapeHtml(q.question)}</div>`;

    // Options or Input
    let bodyHtml = "";
    if (q.type === "fill") {
      bodyHtml = `
        <div class="fill-input-wrapper">
          <textarea placeholder="${isSubmitted ? "" : "Nhập câu trả lời hoặc các thông số bài tập của bạn tại đây..."}" 
            onchange="handleFillInput('${q.id}', this.value)"
            ${isSubmitted ? "disabled" : ""}>${escapeHtml(typeof currentAns === "string" ? currentAns : "")}</textarea>
        </div>
      `;
    } else if (q.options) {
      bodyHtml = `<div class="options-list">`;
      q.options.forEach((opt) => {
        const isSelected = Array.isArray(currentAns) && currentAns.includes(opt.key);
        let optClass = `option-item ${isMultiChoice ? "multiple" : "single"}`;

        if (isSelected) optClass += " selected";

        let tagHtml = "";
        // FEEDBACK IS SHOWN ONLY AFTER SUBMISSION!
        if (isSubmitted) {
          const isThisCorrect = q.correct.includes(opt.key);
          if (isThisCorrect) {
            optClass += " opt-correct";
            tagHtml = `<span class="option-tag tag-correct">✓ Đáp án đúng</span>`;
          } else if (isSelected && !isThisCorrect) {
            optClass += " opt-wrong";
            tagHtml = `<span class="option-tag tag-your-choice">✗ Bạn đã chọn</span>`;
          }
        }

        bodyHtml += `
          <div class="${optClass}" onclick="handleOptionClick('${q.id}', '${opt.key}', '${q.type}')">
            <span class="option-key">${isMultiChoice ? (isSelected ? "☑" : "☐") : opt.key}</span>
            <span class="option-text">${escapeHtml(opt.text)}</span>
            ${tagHtml}
          </div>
        `;
      });
      bodyHtml += `</div>`;
    }

    // Explanation Box (SHOWN ONLY AFTER SUBMISSION!)
    let expHtml = "";
    if (isSubmitted) {
      expHtml = `
        <div class="explanation-box show" id="exp_${q.id}">
          <div class="exp-title">💡 Giải thích & Đáp án chuẩn xác:</div>
          <div class="exp-content">
            ${q.type !== "fill" ? `<p><strong>Đáp án đúng:</strong> <span style="color:var(--success); font-weight:bold;">${q.correct.join(", ")}</span></p>` : ""}
            ${q.correctText ? `<p><strong>Kết quả:</strong> <span style="color:var(--success); font-weight:bold;">${escapeHtml(q.correctText)}</span></p>` : ""}
            <p>${escapeHtml(q.explanation || "Không có giải thích chi tiết.")}</p>
          </div>
        </div>
      `;
    }

    card.innerHTML = headerHtml + textHtml + bodyHtml + expHtml;
    container.appendChild(card);
  });

  filterQuestions();
}

// Option Click Handler
function handleOptionClick(qId, key, qType) {
  const chapterId = state.currentChapterId;
  const isSubmitted = !!state.examSubmitted[chapterId];
  if (isSubmitted) return; // Locked after submitting

  if (!state.userAnswers[chapterId][qId]) {
    state.userAnswers[chapterId][qId] = [];
  }

  let selected = state.userAnswers[chapterId][qId];
  if (!Array.isArray(selected)) selected = [];

  if (qType === "multiple") {
    // Multi-select: toggle independent choice without affecting others
    if (selected.includes(key)) {
      selected = selected.filter((k) => k !== key);
    } else {
      selected.push(key);
    }
  } else {
    // Single select: choose only one option
    selected = [key];
  }

  state.userAnswers[chapterId][qId] = selected;
  saveState();

  // Update visual selection only (NO RIGHT/WRONG OR EXPLANATION SHOWN!)
  updateQuestionSelectionUI(qId, qType, selected);
  updatePaletteItem(qId);
  updateProgress(QUIZ_DATA[chapterId], false);
}

// Update option item UI while taking quiz (Clean selection)
function updateQuestionSelectionUI(qId, qType, selected) {
  const card = document.getElementById(`qcard_${qId}`);
  if (!card) return;

  const isMulti = qType === "multiple";
  const optionItems = card.querySelectorAll(".option-item");

  optionItems.forEach((optItem) => {
    // Extract key: for single it's the text inside .option-key, for multi check onclick attribute
    const onclickStr = optItem.getAttribute("onclick") || "";
    const match = onclickStr.match(/'([^']+)',\s*'([^']+)'/);
    const key = match ? match[2] : "";

    const isSelected = selected.includes(key);
    optItem.classList.toggle("selected", isSelected);

    if (isMulti) {
      const keySpan = optItem.querySelector(".option-key");
      if (keySpan) keySpan.textContent = isSelected ? "☑" : "☐";
    }
  });
}

// Fill-in input handler
function handleFillInput(qId, value) {
  const chapterId = state.currentChapterId;
  if (state.examSubmitted[chapterId]) return;

  state.userAnswers[chapterId][qId] = value;
  saveState();

  updatePaletteItem(qId);
  updateProgress(QUIZ_DATA[chapterId], false);
}

// Toggle Flag / Bookmark
function toggleFlag(qId) {
  const chapterId = state.currentChapterId;
  const isFlagged = !state.flaggedQuestions[chapterId][qId];
  state.flaggedQuestions[chapterId][qId] = isFlagged;
  saveState();

  const card = document.getElementById(`qcard_${qId}`);
  if (card) {
    const btn = card.querySelector(".btn-flag");
    if (btn) {
      btn.classList.toggle("active", isFlagged);
      btn.textContent = isFlagged ? "★" : "☆";
    }
  }

  updatePaletteItem(qId);
}

// Toggle All Explanations (Only available after submission)
function toggleAllExplanations() {
  const boxes = document.querySelectorAll(".explanation-box");
  const anyClosed = Array.from(boxes).some((b) => !b.classList.contains("show"));
  boxes.forEach((b) => {
    if (anyClosed) b.classList.add("show");
    else b.classList.remove("show");
  });
}

// Check Answer Correctness
function checkAnswerCorrect(q, userAns) {
  if (q.type === "fill") {
    if (typeof userAns !== "string" || !userAns.trim()) return false;
    return true; // fill exercises are evaluated by user against model answer
  }

  if (!Array.isArray(userAns) || userAns.length === 0) return false;
  if (userAns.length !== q.correct.length) return false;

  const sortedUser = [...userAns].sort();
  const sortedCorrect = [...q.correct].sort();
  return sortedUser.every((val, idx) => val === sortedCorrect[idx]);
}

// Question Palette (Grid on the right)
function renderPalette(chapter, isSubmitted) {
  const palette = document.getElementById("paletteGrid");
  if (!palette) return;
  palette.innerHTML = "";

  chapter.questions.forEach((q, index) => {
    const qNum = q.number || (index + 1);
    const item = document.createElement("button");
    item.className = "palette-item";
    item.id = `pal_${q.id}`;
    item.textContent = qNum;
    item.title = `Câu ${qNum}`;

    updatePaletteItemElement(item, q, chapter.id, isSubmitted);

    item.addEventListener("click", () => {
      scrollToQuestion(q.id);
    });

    palette.appendChild(item);
  });
}

function updatePaletteItem(qId) {
  const chapter = QUIZ_DATA[state.currentChapterId];
  const q = chapter.questions.find((item) => item.id === qId);
  const item = document.getElementById(`pal_${qId}`);
  const isSubmitted = !!state.examSubmitted[chapter.id];
  if (item && q) {
    updatePaletteItemElement(item, q, chapter.id, isSubmitted);
  }
}

function updatePaletteItemElement(item, q, chapterId, isSubmitted) {
  const currentAns = state.userAnswers[chapterId][q.id];
  const isFlagged = !!state.flaggedQuestions[chapterId][q.id];
  const isAnswered = q.type === "fill"
    ? (typeof currentAns === "string" && currentAns.trim().length > 0)
    : (Array.isArray(currentAns) && currentAns.length > 0);
  const isCorrect = isAnswered && checkAnswerCorrect(q, currentAns);

  item.className = "palette-item";

  if (isFlagged) item.classList.add("flagged");

  if (isSubmitted) {
    // AFTER SUBMIT: show green for correct, red for incorrect/unanswered
    if (isAnswered) {
      item.classList.add(isCorrect ? "correct" : "incorrect");
    } else {
      item.classList.add("incorrect");
    }
  } else if (isAnswered) {
    // WHILE TAKING QUIZ: show only answered (soft blue)
    item.classList.add("answered");
  }
}

function scrollToQuestion(qId) {
  const card = document.getElementById(`qcard_${qId}`);
  if (card) {
    if (card.style.display === "none") {
      document.querySelector(".filter-chip[data-filter='all']")?.click();
    }
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.style.borderColor = "var(--primary)";
    setTimeout(() => {
      card.style.borderColor = "";
    }, 1200);
  }
}

// Progress Bar & Stats
function updateProgress(chapter, isSubmitted) {
  const total = chapter.questions.length;
  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  chapter.questions.forEach((q) => {
    const ans = state.userAnswers[chapter.id][q.id];
    const isAnswered = q.type === "fill"
      ? (typeof ans === "string" && ans.trim().length > 0)
      : (Array.isArray(ans) && ans.length > 0);
    if (isAnswered) {
      answeredCount++;
      if (checkAnswerCorrect(q, ans)) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  });

  const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  const barFill = document.getElementById("progressBarFill");
  if (barFill) barFill.style.width = `${percent}%`;

  const countDisplay = document.getElementById("progressCountDisplay");
  if (countDisplay) countDisplay.textContent = `${answeredCount}/${total} câu (${percent}%)`;

  const statCorrect = document.getElementById("sidebarStatCorrect");
  const statWrong = document.getElementById("sidebarStatWrong");

  if (isSubmitted) {
    if (statCorrect) statCorrect.textContent = correctCount;
    if (statWrong) statWrong.textContent = wrongCount + (total - answeredCount);
  } else {
    // Before submission: don't reveal right/wrong counts!
    if (statCorrect) statCorrect.textContent = "--";
    if (statWrong) statWrong.textContent = "--";
  }
}

// Filtering
function filterQuestions() {
  const chapter = QUIZ_DATA[state.currentChapterId];
  if (!chapter) return;

  const isSubmitted = !!state.examSubmitted[chapter.id];

  chapter.questions.forEach((q) => {
    const card = document.getElementById(`qcard_${q.id}`);
    if (!card) return;

    const currentAns = state.userAnswers[chapter.id][q.id];
    const isFlagged = !!state.flaggedQuestions[chapter.id][q.id];
    const isAnswered = q.type === "fill"
      ? (typeof currentAns === "string" && currentAns.trim().length > 0)
      : (Array.isArray(currentAns) && currentAns.length > 0);
    const isCorrect = isAnswered && checkAnswerCorrect(q, currentAns);

    let matchFilter = true;
    switch (state.filter) {
      case "answered":
        matchFilter = isAnswered;
        break;
      case "unanswered":
        matchFilter = !isAnswered;
        break;
      case "flagged":
        matchFilter = isFlagged;
        break;
      case "wrong":
        // Only makes sense if submitted
        matchFilter = isSubmitted && (!isAnswered || !isCorrect);
        break;
      case "correct":
        // Only makes sense if submitted
        matchFilter = isSubmitted && isAnswered && isCorrect;
        break;
      case "all":
      default:
        matchFilter = true;
    }

    let matchSearch = true;
    if (state.searchQuery) {
      const qText = (q.question || "").toLowerCase();
      const qTopic = (q.topic || "").toLowerCase();
      const optsText = (q.options || []).map((o) => o.text.toLowerCase()).join(" ");
      matchSearch = qText.includes(state.searchQuery) || qTopic.includes(state.searchQuery) || optsText.includes(state.searchQuery);
    }

    card.style.display = matchFilter && matchSearch ? "block" : "none";
  });
}

// Exam Submission
function confirmSubmitExam() {
  const chapter = QUIZ_DATA[state.currentChapterId];
  const total = chapter.questions.length;
  let answered = 0;

  chapter.questions.forEach((q) => {
    const ans = state.userAnswers[chapter.id][q.id];
    if (q.type === "fill") {
      if (typeof ans === "string" && ans.trim()) answered++;
    } else if (Array.isArray(ans) && ans.length > 0) {
      answered++;
    }
  });

  const unanswered = total - answered;
  let confirmMsg = `Bạn đã hoàn thành ${answered}/${total} câu hỏi.`;
  if (unanswered > 0) {
    confirmMsg += `\n⚠️ CẢNH BÁO: Còn ${unanswered} câu BẠN CHƯA LÀM!\nBạn có chắc chắn muốn nộp bài để xem đáp án và giải thích ngay bây giờ không?`;
  } else {
    confirmMsg += `\nBạn đã trả lời hết tất cả ${total} câu hỏi! Bấm OK để nộp bài và xem đáp án cùng giải thích chi tiết.`;
  }

  if (confirm(confirmMsg)) {
    submitExam();
  }
}

function submitExam() {
  const chapterId = state.currentChapterId;
  const chapter = QUIZ_DATA[chapterId];

  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }

  // MARK SUBMITTED
  state.examSubmitted[chapterId] = true;
  saveState();

  // Calculate Score
  let correctCount = 0;
  let wrongCount = 0;
  let totalScoreEarned = 0;
  let maxPossibleScore = chapter.totalScore || chapter.questions.reduce((acc, q) => acc + (q.points || 2), 0);

  chapter.questions.forEach((q) => {
    const ans = state.userAnswers[chapterId][q.id];
    const isAnswered = q.type === "fill"
      ? (typeof ans === "string" && ans.trim().length > 0)
      : (Array.isArray(ans) && ans.length > 0);

    if (isAnswered && checkAnswerCorrect(q, ans)) {
      correctCount++;
      totalScoreEarned += (q.points || 2);
    } else if (isAnswered) {
      wrongCount++;
    }
  });

  const totalQuestions = chapter.questions.length;
  const unansweredCount = totalQuestions - correctCount - wrongCount;

  // Show Modal Result
  showResultModal({
    totalScore: totalScoreEarned,
    maxScore: maxPossibleScore,
    correct: correctCount,
    wrong: wrongCount,
    unanswered: unansweredCount,
    total: totalQuestions
  });

  // Re-render to reveal all answers & explanations
  renderCurrentChapter();
}

function showResultModal(res) {
  const modal = document.getElementById("resultModal");
  if (!modal) return;

  const scoreText = `${res.totalScore} / ${res.maxScore}`;
  const pct = Math.round((res.correct / res.total) * 100);

  document.getElementById("modalScore").textContent = scoreText;
  document.getElementById("modalCorrect").textContent = res.correct;
  document.getElementById("modalWrong").textContent = res.wrong;
  document.getElementById("modalUnanswered").textContent = res.unanswered;

  const title = document.getElementById("modalTitle");
  const icon = document.getElementById("modalIcon");

  if (pct >= 50) {
    title.textContent = `🎉 Bạn đã hoàn thành! Đạt ${pct}%`;
    icon.className = "result-icon pass";
    icon.textContent = "🏆";
  } else {
    title.textContent = `Bạn đã nộp bài! Đạt ${pct}%`;
    icon.className = "result-icon fail";
    icon.textContent = "💪";
  }

  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("resultModal");
  if (modal) modal.classList.remove("active");
}

// Reset Quiz (Làm lại)
function resetCurrentChapter() {
  const chapterId = state.currentChapterId;
  if (confirm("Làm lại đề này từ đầu?\nToàn bộ đáp án đã chọn sẽ được làm mới, đáp án và giải thích sẽ được ẩn đi để bạn làm lại.")) {
    state.userAnswers[chapterId] = {};
    state.flaggedQuestions[chapterId] = {};
    state.examSubmitted[chapterId] = false;
    saveState();

    resetOrStartTimer();
    renderCurrentChapter();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Helper: Escape HTML
function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
