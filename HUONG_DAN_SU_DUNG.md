# HƯỚNG DẪN SỬ DỤNG HỆ THỐNG ÔN TẬP TRẮC NGHIỆM MẠNG MÁY TÍNH (UTC & EDUSO)

Trang web ôn tập trắc nghiệm môn **Mạng máy tính** được xây dựng toàn diện, đầy đủ nội dung từ 5 file PDF học liệu chính thức:
1. **Chương 1:** Tổng quan về MMT và Internet (66 câu hỏi)
2. **Chương 2:** Chuyển mạch Ethernet & VLAN (51 câu hỏi)
3. **Chương 3:** Định tuyến & Tầng mạng, Bài tập chia subnet IPv4/IPv6 (90 câu hỏi)
4. **Chương 4:** Tầng giao vận - TCP & UDP (60 câu hỏi)
5. **Đề thi Eduso:** Đề kiểm tra giữa kỳ 45 phút - 100 câu - 200 điểm (Toàn bộ 100 câu đã được giải chi tiết kèm đáp án chuẩn xác 100%)

---

## 🚀 CÁCH KHỞI CHẠY HỆ THỐNG

Bạn có thể mở ứng dụng theo 1 trong 2 cách cực kỳ đơn giản:
- **Cách 1 (Nhanh nhất):** Nhấp đúp chuột vào file `Mo_Trang_Web.bat` trong thư mục này.
- **Cách 2:** Nhấp đúp chuột trực tiếp vào file `index.html` hoặc mở bằng trình duyệt bất kỳ (Google Chrome, Microsoft Edge, Cốc Cốc, Firefox...).
> 💡 *Trang web chạy trực tiếp bằng HTML5, CSS3, JavaScript thuần không cần cài đặt Node.js hay bất kỳ phần mềm trung gian nào, có thể sử dụng Offline không cần mạng.*

---

## ✨ CÁC TÍNH NĂNG NỔI BẬT

### 1. Phân chia 5 mục (Tab) rõ ràng
- Bạn có thể click vào bất kỳ tab nào ở thanh điều hướng trên cùng để chuyển ngay sang chương muốn ôn tập:
  - **🌐 Chương 1 (66 câu)**
  - **🔄 Chương 2 (51 câu)**
  - **🔀 Chương 3 (90 câu)**
  - **⚡ Chương 4 (60 câu)**
  - **🏆 Đề thi Eduso (100 câu - Mẫu đề 45p 200đ)**

### 2. Hai chế độ học tập linh hoạt:
- **📖 Chế độ Luyện tập (Practice Mode):**
  - Khi bạn click chọn một phương án, hệ thống sẽ **ngay lập tức hiển thị phản hồi** (Màu xanh: Đúng, Màu đỏ: Sai kèm gạch ngang).
  - Tự động mở hộp **Giải thích & Đáp án chuẩn** giải thích cặn kẽ tại sao đúng/sai và các kiến thức cốt lõi cần nhớ.
  - Có nút **"Bật/Tắt tất cả giải thích"** hoặc xem từng câu để học thuộc nhanh.
- **⏱️ Chế độ Thi thử (Exam Mode):**
  - Bật đồng hồ đếm ngược **45:00** (chuẩn thời gian làm bài thi Eduso).
  - Đáp án được giữ kín trong quá trình làm bài.
  - Nút **"Nộp bài & Chấm điểm"**: khi nộp bài hệ thống kiểm tra và cảnh báo nếu còn câu chưa làm.
  - Bảng tổng kết kết quả chi tiết: Điểm số (trên thang 200 điểm), Số câu đúng, Số câu sai, Số câu chưa làm, Tỷ lệ % đạt được.

### 3. Xem lại các câu sai (Tính năng cốt lõi)
- Sau khi làm xong hoặc nộp bài, bạn chỉ cần bấm nút **"🔍 Xem lại các câu sai"** hoặc chọn bộ lọc **"✗ Câu sai"** trên thanh công cụ.
- Hệ thống sẽ tự động lọc ra danh sách toàn bộ các câu bạn trả lời sai, bôi đỏ đáp án bạn đã chọn và bôi xanh đáp án chính xác kèm giải thích chi tiết để bạn dễ dàng rút kinh nghiệm.

### 4. Thanh lọc & Tìm kiếm câu hỏi thông minh
- Bộ lọc nhanh:
  - **Tất cả**
  - **Đã làm**
  - **Chưa làm**
  - **★ Đã đánh dấu** (Dành cho các câu bạn gắn cờ để xem lại sau)
  - **✗ Câu sai**
  - **✓ Câu đúng**
- Ô tìm kiếm từ khóa: Gõ bất kỳ thuật ngữ nào như `MAC`, `IPv6`, `OSPF`, `TCP`, `VLAN`, `CIDR`, `Subnet` để tìm nhanh các câu hỏi liên quan.

### 5. Bảng chuyển nhanh câu hỏi (Question Palette)
- Lưới số hiển thị bên tay phải (1, 2, 3... 100):
  - Màu **Xám**: Chưa làm.
  - Màu **Xanh dương**: Đã làm (trong chế độ thi).
  - Màu **Xanh lá**: Trả lời Đúng.
  - Màu **Đỏ**: Trả lời Sai.
  - Ngôi sao vàng `★`: Câu đã gắn cờ cần lưu ý.
- Click vào bất kỳ số câu nào để cuộn mượt (smooth scroll) trực tiếp đến câu đó.

### 6. Tự động lưu tiến độ (LocalStorage)
- Toàn bộ câu trả lời, câu đánh dấu sao và trạng thái làm bài của bạn được tự động lưu vào trình duyệt. Khi bạn tải lại trang (F5) hoặc mở lại vào hôm sau, toàn bộ tiến độ vẫn được bảo toàn nguyên vẹn.
- Nếu muốn làm lại đề từ đầu, bạn chỉ cần bấm nút **"🔄 Làm lại đề này"**.

### 7. Hỗ trợ giao diện Tối / Sáng (Dark / Light Mode)
- Nút bấm chuyển giao diện ở góc trên bên phải giúp dịu mắt khi ôn bài vào ban đêm.

---

## 📝 GIẢI CHI TIẾT 8 BÀI TẬP CHIA MẠNG CON ĐỀ EDUSO (CÂU 93 - 100)

1. **Câu 93 (182.16.45.200/23):**
   - Mặt nạ mạng con: `255.255.254.0` (23 bit 1).
   - Bước nhảy octet 3 là 2. Octet 3 là 45 (chia 2 dư 1) => Địa chỉ mạng: `182.16.44.0/23`.
2. **Câu 94 (162.218.71.190/26):**
   - Bước nhảy octet 4 là 64. 190 thuộc mạng `162.218.71.128/26`.
   - Host đầu tiên: `162.218.71.129/26`.
   - Host thứ hai: `162.218.71.130/26`.
3. **Câu 95 (202.131.89.140/23):**
   - Bước nhảy octet 3 là 2. Mạng: `202.131.88.0/23` (kết thúc tại `202.131.89.255`).
   - Host cuối cùng: `202.131.89.254/23`.
   - Địa chỉ quảng bá: `202.131.89.255/23`.
4. **Câu 96 (128.192.10.210/23 chia 4 mạng con):**
   - Mượn 2 bit => Prefix mới `/25` (bước nhảy 128).
   - Mạng con thứ 2: `128.192.10.128/25`.
   - Mạng con thứ 3: `128.192.11.0/25`.
5. **Câu 97 (210.145.78.200/24 chia 3 mạng con):**
   - Mượn 2 bit (2^2 >= 3) => Prefix mới `/26` (bước nhảy 64).
   - Mạng con thứ 1: `210.145.78.0/26`.
   - Mạng con thứ 3: `210.145.78.128/26`.
6. **Câu 98 (101.202.19.140/22 chia 5 mạng con):**
   - Mạng gốc: `101.202.16.0/22`. Cần 5 mạng con => mượn 3 bit => `/25` (bước nhảy 128).
   - Mạng con thứ 1: `101.202.16.0/25`.
   - Mạng con thứ 5: `101.202.18.0/25`.
7. **Câu 99 (VLSM cho 140.200.205.47/21):**
   - Mạng gốc: `140.200.200.0/21`. Phân bổ theo thứ tự nhu cầu giảm dần:
     - VLAN 2 (/23): `140.200.200.0/23`
     - VLAN 3 (/24): `140.200.202.0/24` (ĐÁP ÁN)
     - VLAN 6 (/25): `140.200.203.0/25`
     - VLAN 4 (/26): `140.200.203.128/26`
     - VLAN 5 (/26): `140.200.203.192/26` (ĐÁP ÁN)
     - VLAN 1 (/27): `140.200.204.0/27`
8. **Câu 100 (Chia IPv6 2005:C2F:3B8::/48 thành các mạng LAN /64):**
   - Dải thứ hai (index 0001): `2005:C2F:3B8:1::/64`.
   - Dải cuối cùng (index FFFF): `2005:C2F:3B8:FFFF::/64`.

