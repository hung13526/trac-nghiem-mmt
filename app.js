/**
 * Mạng Máy Tính - UTC & Eduso Practice Web App Logic
 */

// Application State
const state = {
  currentChapterId: "ch1",
  mode: "practice", // 'practice' or 'exam'
  userAnswers: {},  // { [chapterId]: { [qId]: ['A', 'B'] or 'text' } }
  flaggedQuestions: {}, // { [chapterId]: { [qId]: true } }
  examSubmitted: {}, // { [chapterId]: boolean }
  filter: "all",    // 'all', 'answered', 'unanswered', 'flagged', 'wrong', 'correct'
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

  // Clear timer if switching away
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }

  state.currentChapterId = chapterId;
  state.filter = "all";
  state.searchQuery = "";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  // Update tabs active state
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === chapterId);
  });

  renderCurrentChapter();
}

// Event Listeners
function initEventListeners() {
  // Theme toggle
  document.getElementById("btnTheme").addEventListener("click", toggleTheme);

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

  // Mode buttons (Practice vs Exam)
  document.getElementById("btnModePractice").addEventListener("click", () => setMode("practice"));
  document.getElementById("btnModeExam").addEventListener("click", () => setMode("exam"));

  // Sidebar Actions
  document.getElementById("btnSubmitExam").addEventListener("click", confirmSubmitExam);
  document.getElementById("btnResetQuiz").addEventListener("click", resetCurrentChapter);
  document.getElementById("btnShowAllExplanations")?.addEventListener("click", toggleAllExplanations);

  // Modal Buttons
  document.getElementById("btnModalReview")?.addEventListener("click", () => {
    closeModal();
    // switch to review wrong answers
    setMode("practice");
    const wrongChip = document.querySelector(".filter-chip[data-filter='wrong']");
    if (wrongChip) wrongChip.click();
  });
  document.getElementById("btnModalRetake")?.addEventListener("click", () => {
    closeModal();
    resetCurrentChapter();
  });
  document.getElementById("btnModalClose")?.addEventListener("click", closeModal);
}

// Mode Selection
function setMode(mode) {
  state.mode = mode;
  document.getElementById("btnModePractice").classList.toggle("active", mode === "practice");
  document.getElementById("btnModeExam").classList.toggle("active", mode === "exam");

  const timerBox = document.getElementById("examTimerBox");
  const submitBtn = document.getElementById("btnSubmitExam");
  const showAllExpBtn = document.getElementById("btnShowAllExplanations");

  if (mode === "exam") {
    if (timerBox) timerBox.style.display = "flex";
    if (submitBtn) submitBtn.style.display = "flex";
    if (showAllExpBtn) showAllExpBtn.style.display = "none";
    startTimer();
  } else {
    if (timerBox) timerBox.style.display = "none";
    if (submitBtn) submitBtn.style.display = "none";
    if (showAllExpBtn) showAllExpBtn.style.display = "flex";
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  renderCurrentChapter();
}

// Timer Logic
function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);

  const chapter = QUIZ_DATA[state.currentChapterId];
  state.timerSeconds = chapter.timeLimit || 45 * 60;

  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    updateTimerDisplay();

    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
      alert("Hết giờ làm bài! Hệ thống sẽ tự động nộp bài của bạn.");
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
    if (state.timerSeconds <= 300) { // < 5 mins
      timerBox.classList.add("warning");
    } else {
      timerBox.classList.remove("warning");
    }
  }
}

// Render Current Chapter
function renderCurrentChapter() {
  const chapter = QUIZ_DATA[state.currentChapterId];
  if (!chapter) return;

  // Update Banner Info
  document.getElementById("bannerTitle").textContent = chapter.title;
  document.getElementById("bannerSubtitle").textContent = chapter.subtitle;
  document.getElementById("bannerDoc").innerHTML = `📄 Nguồn: <strong>${chapter.docName}</strong>`;

  // Ensure state dictionaries
  if (!state.userAnswers[chapter.id]) state.userAnswers[chapter.id] = {};
  if (!state.flaggedQuestions[chapter.id]) state.flaggedQuestions[chapter.id] = {};

  // Render question list
  renderQuestionsList(chapter);

  // Render sidebar question palette
  renderPalette(chapter);

  // Update progress stats
  updateProgress(chapter);
}

// Render Questions
function renderQuestionsList(chapter) {
  const container = document.getElementById("questionsList");
  if (!container) return;
  container.innerHTML = "";

  const isExamSubmitted = state.examSubmitted[chapter.id];
  const isPractice = state.mode === "practice";

  chapter.questions.forEach((q, index) => {
    const qNum = q.number || (index + 1);
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `qcard_${q.id}`;
    card.dataset.id = q.id;
    card.dataset.index = index;

    const currentAns = state.userAnswers[chapter.id][q.id] || [];
    const isFlagged = !!state.flaggedQuestions[chapter.id][q.id];

    // Evaluate answer correctness if practice or exam submitted
    const isAnswered = q.type === "fill" ? (typeof currentAns === "string" && currentAns.trim().length > 0) : (Array.isArray(currentAns) && currentAns.length > 0);
    const isCorrect = isAnswered && checkAnswerCorrect(q, currentAns);

    // Meta badges
    let levelClass = "level-nb";
    if (q.level === "Thông hiểu") levelClass = "level-th";
    if (q.level === "Vận dụng") levelClass = "level-vd";
    if (q.level === "Vận dụng cao") levelClass = "level-vdc";

    let statusBadgeHtml = "";
    if (isPractice && isAnswered) {
      statusBadgeHtml = isCorrect
        ? `<span class="q-status-badge correct" style="display:inline-flex;">✓ Đúng</span>`
        : `<span class="q-status-badge incorrect" style="display:inline-flex;">✗ Sai</span>`;
    } else if (isExamSubmitted) {
      if (!isAnswered) {
        statusBadgeHtml = `<span class="q-status-badge" style="display:inline-flex; background:var(--bg-card-hover); color:var(--text-muted);">Chưa làm</span>`;
      } else {
        statusBadgeHtml = isCorrect
          ? `<span class="q-status-badge correct" style="display:inline-flex;">✓ Đúng (+${q.points}đ)</span>`
          : `<span class="q-status-badge incorrect" style="display:inline-flex;">✗ Sai (0đ)</span>`;
      }
    }

    // Card Header
    const headerHtml = `
      <div class="question-header">
        <div class="q-meta">
          <span class="q-num">Câu ${qNum}</span>
          ${q.level ? `<span class="q-badge ${levelClass}">${q.level}</span>` : ""}
          ${q.type === "multiple" ? `<span class="q-badge" style="background:#fef08a; color:#854d0e;">Chọn nhiều</span>` : ""}
          ${q.type === "fill" ? `<span class="q-badge" style="background:#e0e7ff; color:#3730a3;">Điền đáp án</span>` : ""}
          <span class="q-badge">${q.points || 2} điểm</span>
          ${statusBadgeHtml}
        </div>
        <div class="q-actions">
          <button class="btn-flag ${isFlagged ? "active" : ""}" title="Đánh dấu câu hỏi này" onclick="toggleFlag('${q.id}')">
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
          <textarea placeholder="Nhập câu trả lời hoặc các thông số của bạn tại đây..." 
            onchange="handleFillInput('${q.id}', this.value)"
            ${isExamSubmitted ? "disabled" : ""}>${escapeHtml(typeof currentAns === "string" ? currentAns : "")}</textarea>
        </div>
      `;
    } else if (q.options) {
      bodyHtml = `<div class="options-list">`;
      q.options.forEach((opt) => {
        const isSelected = Array.isArray(currentAns) && currentAns.includes(opt.key);
        let optClass = "option-item";
        if (isSelected) optClass += " selected";

        // Show right/wrong colors in practice mode (if answered) or after exam submit
        if ((isPractice && isAnswered) || isExamSubmitted) {
          if (q.correct.includes(opt.key)) {
            optClass += " opt-correct";
          } else if (isSelected && !q.correct.includes(opt.key)) {
            optClass += " opt-wrong";
          }
        }

        bodyHtml += `
          <div class="${optClass}" onclick="handleOptionClick('${q.id}', '${opt.key}', '${q.type}')">
            <span class="option-key">${opt.key}</span>
            <span class="option-text">${escapeHtml(opt.text)}</span>
          </div>
        `;
      });
      bodyHtml += `</div>`;
    }

    // Explanation Box
    const showExp = (isPractice && isAnswered) || isExamSubmitted;
    const expHtml = `
      <div class="explanation-box ${showExp ? "show" : ""}" id="exp_${q.id}">
        <div class="exp-title">💡 Giải thích & Đáp án chuẩn:</div>
        <div class="exp-content">
          ${q.correctText ? `<p><strong>Đáp án đúng:</strong> ${escapeHtml(q.correctText)}</p>` : ""}
          ${q.type !== "fill" ? `<p><strong>Đáp án đúng:</strong> ${q.correct.join(", ")}</p>` : ""}
          <p>${escapeHtml(q.explanation || "Không có giải thích chi tiết.")}</p>
        </div>
      </div>
    `;

    // Card Footer (Check button for practice)
    let footerHtml = "";
    if (isPractice) {
      footerHtml = `
        <div class="card-footer">
          <button class="btn btn-outline btn-sm" onclick="toggleExplanation('${q.id}')">
            ${showExp ? "Ẩn giải thích" : "Xem đáp án & giải thích"}
          </button>
        </div>
      `;
    }

    card.innerHTML = headerHtml + textHtml + bodyHtml + expHtml + footerHtml;
    container.appendChild(card);
  });

  filterQuestions();
}

// Option Click Handler
function handleOptionClick(qId, key, qType) {
  const chapterId = state.currentChapterId;
  if (state.examSubmitted[chapterId]) return; // locked after submission

  if (!state.userAnswers[chapterId][qId]) {
    state.userAnswers[chapterId][qId] = [];
  }

  let selected = state.userAnswers[chapterId][qId];
  if (!Array.isArray(selected)) selected = [];

  if (qType === "multiple") {
    // Multi-select toggle
    if (selected.includes(key)) {
      selected = selected.filter((k) => k !== key);
    } else {
      selected.push(key);
    }
  } else {
    // Single select
    selected = [key];
  }

  state.userAnswers[chapterId][qId] = selected;
  saveState();

  // Re-render this question card
  updateQuestionCard(qId);
  updatePaletteItem(qId);
  updateProgress(QUIZ_DATA[chapterId]);
}

// Fill-in input handler
function handleFillInput(qId, value) {
  const chapterId = state.currentChapterId;
  if (state.examSubmitted[chapterId]) return;

  state.userAnswers[chapterId][qId] = value;
  saveState();

  updatePaletteItem(qId);
  updateProgress(QUIZ_DATA[chapterId]);
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

// Toggle Single Explanation
function toggleExplanation(qId) {
  const expBox = document.getElementById(`exp_${qId}`);
  if (expBox) {
    expBox.classList.toggle("show");
  }
}

// Toggle All Explanations
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
    // Check if user answer matches or contains key figures
    return true; // fill exercises are self-evaluated with explanation
  }

  if (!Array.isArray(userAns) || userAns.length === 0) return false;
  if (userAns.length !== q.correct.length) return false;

  const sortedUser = [...userAns].sort();
  const sortedCorrect = [...q.correct].sort();
  return sortedUser.every((val, idx) => val === sortedCorrect[idx]);
}

// Fast update single question card without full re-render
function updateQuestionCard(qId) {
  const chapter = QUIZ_DATA[state.currentChapterId];
  const q = chapter.questions.find((item) => item.id === qId);
  if (!q) return;

  const card = document.getElementById(`qcard_${qId}`);
  if (!card) return;

  const currentAns = state.userAnswers[chapter.id][qId] || [];
  const isAnswered = Array.isArray(currentAns) && currentAns.length > 0;
  const isCorrect = isAnswered && checkAnswerCorrect(q, currentAns);
  const isPractice = state.mode === "practice";
  const isExamSubmitted = state.examSubmitted[chapter.id];

  // Update option classes
  const optionItems = card.querySelectorAll(".option-item");
  optionItems.forEach((optItem) => {
    const key = optItem.querySelector(".option-key").textContent.trim();
    const isSelected = currentAns.includes(key);

    optItem.className = "option-item";
    if (isSelected) optItem.classList.add("selected");

    if ((isPractice && isAnswered) || isExamSubmitted) {
      if (q.correct.includes(key)) {
        optItem.classList.add("opt-correct");
      } else if (isSelected && !q.correct.includes(key)) {
        optItem.classList.add("opt-wrong");
      }
    }
  });

  // Update status badge
  let statusBadge = card.querySelector(".q-status-badge");
  if (!statusBadge) {
    statusBadge = document.createElement("span");
    statusBadge.className = "q-status-badge";
    card.querySelector(".q-meta").appendChild(statusBadge);
  }

  if (isPractice && isAnswered) {
    statusBadge.className = `q-status-badge ${isCorrect ? "correct" : "incorrect"}`;
    statusBadge.style.display = "inline-flex";
    statusBadge.textContent = isCorrect ? "✓ Đúng" : "✗ Sai";

    // auto open explanation in practice mode
    const exp = card.querySelector(".explanation-box");
    if (exp) exp.classList.add("show");
  }
}

// Question Palette (Grid on the right)
function renderPalette(chapter) {
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

    updatePaletteItemElement(item, q, chapter.id);

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
  if (item && q) {
    updatePaletteItemElement(item, q, chapter.id);
  }
}

function updatePaletteItemElement(item, q, chapterId) {
  const currentAns = state.userAnswers[chapterId][q.id];
  const isFlagged = !!state.flaggedQuestions[chapterId][q.id];
  const isAnswered = q.type === "fill" ? (typeof currentAns === "string" && currentAns.trim().length > 0) : (Array.isArray(currentAns) && currentAns.length > 0);
  const isCorrect = isAnswered && checkAnswerCorrect(q, currentAns);
  const isPractice = state.mode === "practice";
  const isExamSubmitted = state.examSubmitted[chapterId];

  item.className = "palette-item";

  if (isFlagged) item.classList.add("flagged");

  if (isExamSubmitted || (isPractice && isAnswered)) {
    if (isAnswered) {
      item.classList.add(isCorrect ? "correct" : "incorrect");
    }
  } else if (isAnswered) {
    item.classList.add("answered");
  }
}

function scrollToQuestion(qId) {
  const card = document.getElementById(`qcard_${qId}`);
  if (card) {
    // If hidden by filter, reset filter to 'all'
    if (card.style.display === "none") {
      document.querySelector(".filter-chip[data-filter='all']").click();
    }
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.style.borderColor = "var(--primary)";
    setTimeout(() => {
      card.style.borderColor = "";
    }, 1200);
  }
}

// Progress Bar & Stats
function updateProgress(chapter) {
  const total = chapter.questions.length;
  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  chapter.questions.forEach((q) => {
    const ans = state.userAnswers[chapter.id][q.id];
    const isAnswered = q.type === "fill" ? (typeof ans === "string" && ans.trim().length > 0) : (Array.isArray(ans) && ans.length > 0);
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
  if (statCorrect) statCorrect.textContent = correctCount;

  const statWrong = document.getElementById("sidebarStatWrong");
  if (statWrong) statWrong.textContent = wrongCount;
}

// Filtering
function filterQuestions() {
  const chapter = QUIZ_DATA[state.currentChapterId];
  if (!chapter) return;

  const isExamSubmitted = state.examSubmitted[chapter.id];
  const isPractice = state.mode === "practice";

  chapter.questions.forEach((q, index) => {
    const card = document.getElementById(`qcard_${q.id}`);
    if (!card) return;

    const currentAns = state.userAnswers[chapter.id][q.id];
    const isFlagged = !!state.flaggedQuestions[chapter.id][q.id];
    const isAnswered = q.type === "fill" ? (typeof currentAns === "string" && currentAns.trim().length > 0) : (Array.isArray(currentAns) && currentAns.length > 0);
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
        matchFilter = isAnswered && !isCorrect;
        break;
      case "correct":
        matchFilter = isAnswered && isCorrect;
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
    confirmMsg += `\nCòn ${unanswered} câu CHƯA TRẢ LỜI. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`;
  } else {
    confirmMsg += `\nBạn có chắc chắn muốn nộp bài để xem kết quả và lời giải chi tiết?`;
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

  state.examSubmitted[chapterId] = true;
  saveState();

  // Calculate Score
  let correctCount = 0;
  let wrongCount = 0;
  let totalScoreEarned = 0;
  let maxPossibleScore = chapter.totalScore || chapter.questions.reduce((acc, q) => acc + (q.points || 2), 0);

  chapter.questions.forEach((q) => {
    const ans = state.userAnswers[chapterId][q.id];
    const isAnswered = q.type === "fill" ? (typeof ans === "string" && ans.trim().length > 0) : (Array.isArray(ans) && ans.length > 0);
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
    title.textContent = `🎉 Xuất sắc! Bạn đạt ${pct}%`;
    icon.className = "result-icon pass";
    icon.textContent = "🏆";
  } else {
    title.textContent = `Cố gắng lên! Bạn đạt ${pct}%`;
    icon.className = "result-icon fail";
    icon.textContent = "💪";
  }

  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("resultModal");
  if (modal) modal.classList.remove("active");
}

// Reset Quiz
function resetCurrentChapter() {
  const chapterId = state.currentChapterId;
  if (confirm("Bạn có chắc chắn muốn làm lại đề này từ đầu không? Toàn bộ đáp án đã chọn sẽ được làm mới.")) {
    state.userAnswers[chapterId] = {};
    state.flaggedQuestions[chapterId] = {};
    state.examSubmitted[chapterId] = false;
    saveState();

    if (state.mode === "exam") {
      startTimer();
    }

    renderCurrentChapter();
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

