@echo off
chcp 65001 >nul
echo ========================================================
echo    HỖ TRỢ ĐẨY LÊN GITHUB VA KÍCH HOẠT GITHUB PAGES
echo ========================================================
echo.
echo Bước 1: Bạn hãy vào https://github.com/new và tạo 1 repository mới (chọn Public).
echo Bước 2: Copy đường link của repository đó (ví dụ: https://github.com/username/ten-repo.git).
echo.
set /p REPO_URL="Dán đường link GitHub repository của bạn vào đây rồi bấm Enter: "

if "%REPO_URL%"=="" (
    echo [Lỗi] Bạn chưa nhập link repository!
    pause
    exit /b
)

echo.
echo Đang cấu hình remote origin...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo Đang đẩy dữ liệu lên GitHub...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo [THÀNH CÔNG] Đã đẩy toàn bộ mã nguồn lên GitHub!
    echo.
    echo BÂY GIỜ ĐỂ TẠO LINK TRUY CẬP CHO MỌI NGƯỜI (GITHUB PAGES):
    echo 1. Vào trang GitHub repo bạn vừa tạo.
    echo 2. Chọn mục "Settings" (Cài đặt) ^> chọn "Pages" ở cột bên trái.
    echo 3. Ở mục "Build and deployment" -^> "Branch":
    echo    - Chọn nhánh: "main"
    echo    - Thư mục: "/(root)"
    echo    - Bấm "Save".
    echo 4. Chờ 1-2 phút, GitHub sẽ hiển thị đường link trang web của bạn:
    echo    👉 https://^<username^>.github.io/^<ten-repo^>/
    echo ========================================================
) else (
    echo.
    echo [Lưu ý] Nếu lần đầu sử dụng Git, trình duyệt sẽ mở cửa sổ yêu cầu bạn đăng nhập GitHub để xác thực quyền đẩy mã.
)

echo.
pause

