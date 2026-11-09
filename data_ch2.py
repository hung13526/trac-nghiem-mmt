# -*- coding: utf-8 -*-

ch2_questions = [
    {
        "id": "ch2_1",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Một trong những chức năng của tầng liên kết dữ liệu là phát hiện lỗi.",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Tầng liên kết dữ liệu sử dụng mã kiểm tra dư thừa chu trình (FCS/CRC) trong đoạn trailer của khung để phát hiện lỗi đường truyền."
    },
    {
        "id": "ch2_2",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Ethernet là một loại giao thức trong tầng liên kết dữ liệu",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Ethernet (chuẩn IEEE 802.3) là họ giao thức mạng LAN chủ đạo hoạt động ở tầng liên kết dữ liệu và tầng vật lý."
    },
    {
        "id": "ch2_3",
        "topic": "Tầng liên kết dữ liệu",
        "question": "PDU được sử dụng ở tầng liên kết dữ liệu gọi là Bits",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "PDU của tầng liên kết dữ liệu gọi là Khung (Frame). Bits là PDU của tầng vật lý."
    },
    {
        "id": "ch2_4",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Cấu trúc khung tầng liên kết dữ liệu có trường tiêu đề (header) và phần đuôi (trailer)",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Frame là lớp PDU duy nhất có cả Header (chứa địa chỉ MAC nguồn/đích, type) và Trailer (chứa mã kiểm tra lỗi CRC/FCS)."
    },
    {
        "id": "ch2_5",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Quá trình dữ liệu di chuyển từ tầng trên xuống tầng datalink phải thực hiện việc?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Phân tích dữ liệu"},
            {"key": "B", "text": "Lọc dữ liệu"},
            {"key": "C", "text": "Nén dữ liệu"},
            {"key": "D", "text": "Đóng gói dữ liệu"}
        ],
        "correct": ["D"],
        "explanation": "Khi gói tin IP từ tầng mạng xuống tầng Data Link, nó được đóng gói (encapsulation) thành một khung (frame) bằng cách thêm header và trailer."
    },
    {
        "id": "ch2_6",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Đơn vị dữ liệu tầng datalink là:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Mbs"},
            {"key": "B", "text": "Segment"},
            {"key": "C", "text": "Frame"},
            {"key": "D", "text": "Bits"}
        ],
        "correct": ["C"],
        "explanation": "Đơn vị dữ liệu giao thức (PDU) của tầng Data Link là Frame (khung)."
    },
    {
        "id": "ch2_7",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Frame là dữ liệu ở tầng:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Physical"},
            {"key": "B", "text": "Network"},
            {"key": "C", "text": "Data Link"},
            {"key": "D", "text": "Transport"}
        ],
        "correct": ["C"],
        "explanation": "Frame là đơn vị thông tin ở Tầng 2 - Data Link Layer."
    },
    {
        "id": "ch2_8",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Card mạng là thiết bị nằm ở tầng nào trong mô hình OSI:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Physical"},
            {"key": "B", "text": "Data Link"},
            {"key": "C", "text": "Network"},
            {"key": "D", "text": "Transport"}
        ],
        "correct": ["B"],
        "explanation": "Card giao tiếp mạng (NIC) chứa địa chỉ MAC và xử lý giao thức điều khiển truy nhập môi trường, nằm ở tầng Data Link (và phần cứng giao tiếp tầng Vật lý)."
    },
    {
        "id": "ch2_9",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Tầng nào cung cấp dịch vụ truyền tin tin cậy qua môi trường vật lý:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Physical"},
            {"key": "B", "text": "Data link"},
            {"key": "C", "text": "Network"},
            {"key": "D", "text": "Transport"}
        ],
        "correct": ["B"],
        "explanation": "Trong mô hình OSI, Tầng Data Link cung cấp truyền tin tin cậy trực tiếp trên một liên kết vật lý (node-to-node hop by hop)."
    },
    {
        "id": "ch2_10",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Dịch vụ nào sau đây mà tầng liên kết dữ liệu phải cung cấp? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Tạo khung"},
            {"key": "B", "text": "Xác định địa chỉ vật lý"},
            {"key": "C", "text": "Kiểm soát lỗi"},
            {"key": "D", "text": "Xác định địa chỉ logic"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "Các dịch vụ của tầng liên kết dữ liệu: Framing (tạo khung), Physical addressing (địa chỉ MAC vật lý), Error control (kiểm soát lỗi CRC). Xác định địa chỉ logic (IP) là chức năng của tầng Mạng."
    },
    {
        "id": "ch2_11",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Các giao thức nào dưới đây nằm ở tầng liên kết dữ liệu? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "IP"},
            {"key": "B", "text": "Ethernet"},
            {"key": "C", "text": "Token ring"},
            {"key": "D", "text": "PPP"}
        ],
        "correct": ["B", "C", "D"],
        "explanation": "Ethernet (802.3), Token Ring (802.5), PPP (Point-to-Point Protocol) là các giao thức tầng Data Link. Giao thức IP nằm ở tầng Mạng."
    },
    {
        "id": "ch2_12",
        "topic": "Công nghệ Ethernet",
        "question": "CSMA/CD là giao thức truy cập ngẫu nhiên",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) là giao thức đa truy nhập môi trường truyền ngẫu nhiên (Random Access)."
    },
    {
        "id": "ch2_13",
        "topic": "Công nghệ Ethernet",
        "question": "NIC là viết tắt của Network Interface Card",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "NIC viết tắt của cụm từ Network Interface Card (Card giao diện mạng)."
    },
    {
        "id": "ch2_14",
        "topic": "Công nghệ Ethernet",
        "question": "Mỗi NIC (Network Interface Card) có thể có nhiều địa chỉ MAC",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Mỗi card mạng vật lý tiêu chuẩn (NIC) chỉ có duy nhất một địa chỉ MAC vật lý được nhà sản xuất ghi cố định vào chip ROM (Burned-in Address - BIA)."
    },
    {
        "id": "ch2_15",
        "topic": "Công nghệ Ethernet",
        "question": "LLC là một lớp con (sublayer) trong tầng liên kết dữ liệu",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Chuẩn IEEE 802 chia tầng Data Link thành 2 tầng con: Logical Link Control (LLC - IEEE 802.2) và Media Access Control (MAC)."
    },
    {
        "id": "ch2_16",
        "topic": "Công nghệ Ethernet",
        "question": "Khi địa chỉ MAC đích là Broadcast, nó được dùng để gửi tới một địa chỉ đích duy nhất trong mạng LAN",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Địa chỉ Broadcast (FF-FF-FF-FF-FF-FF) được gửi tới TẤT CẢ các thiết bị trong mạng LAN, không phải một địa chỉ duy nhất (gửi duy nhất là Unicast)."
    },
    {
        "id": "ch2_17",
        "topic": "Công nghệ Ethernet",
        "question": "Câu nào đúng về địa chỉ MAC?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Địa chỉ MAC được thực hiện bằng phần mềm."},
            {"key": "B", "text": "NIC chỉ cần địa chỉ MAC nếu được kết nối với mạng WAN."},
            {"key": "C", "text": "Ba bytes cuối trong địa chỉ MAC được gán bởi nhà sản xuất thiết bị."},
            {"key": "D", "text": "ISO chịu trách nhiệm về các quy định về địa chỉ MAC."}
        ],
        "correct": ["C"],
        "explanation": "Địa chỉ MAC gồm 6 byte (48 bit): 3 byte đầu là mã định danh nhà sản xuất (OUI do IEEE cấp), 3 byte cuối do chính nhà sản xuất thiết bị gán."
    },
    {
        "id": "ch2_18",
        "topic": "Công nghệ Ethernet",
        "question": "Công nghệ Ethernet sử dụng phương pháp truy nhập đường truyền nào sau đây:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "CSMA"},
            {"key": "B", "text": "ALOHA"},
            {"key": "C", "text": "CSMA/CD"},
            {"key": "D", "text": "TDMA"}
        ],
        "correct": ["C"],
        "explanation": "Ethernet có dây bán song công sử dụng phương pháp đa truy nhập cảm nhận sóng mang có phát hiện xung đột: CSMA/CD."
    },
    {
        "id": "ch2_19",
        "topic": "Công nghệ Ethernet",
        "question": "CSMA/CD là viết tắt của:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Collision Sense Multiple Access / Collision Detection"},
            {"key": "B", "text": "Carrier Sense Multiple Access / Carrier Detection"},
            {"key": "C", "text": "Carrier Sense Multiple Access / Collision Detection"},
            {"key": "D", "text": "Collision Sense Multiple Access / Carrier Detection"}
        ],
        "correct": ["C"],
        "explanation": "CSMA/CD viết tắt của Carrier Sense Multiple Access / Collision Detection."
    },
    {
        "id": "ch2_20",
        "topic": "Công nghệ Ethernet",
        "question": "Chuỗi số “00-08-ac-41-5d-9f” có thể là:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Địa chỉ IP"},
            {"key": "B", "text": "Địa chỉ port"},
            {"key": "C", "text": "Địa chỉ MAC"},
            {"key": "D", "text": "Địa chỉ dịch vụ"}
        ],
        "correct": ["C"],
        "explanation": "Chuỗi gồm 6 cặp chữ số thập lục phân ngăn cách bởi dấu gạch ngang hoặc hai chấm chính là định dạng chuẩn của địa chỉ MAC (48 bit)."
    },
    {
        "id": "ch2_21",
        "topic": "Công nghệ Ethernet",
        "question": "Chuẩn nào dưới đây đặc tả về chuẩn kiến trúc mạng cục bộ cho Ethernet, bao gồm các chuẩn tầng vật lý và tầng con MAC:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "IEEE 802.2"},
            {"key": "B", "text": "IEEE 802.3"},
            {"key": "C", "text": "Token Bus"},
            {"key": "D", "text": "Token Ring"}
        ],
        "correct": ["B"],
        "explanation": "Chuẩn IEEE 802.3 đặc tả chuẩn Ethernet (tầng vật lý và tầng con MAC). IEEE 802.2 đặc tả tầng con LLC."
    },
    {
        "id": "ch2_22",
        "topic": "Công nghệ Ethernet",
        "question": "Chọn phát biểu ĐÚNG về địa chỉ MAC:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Được gắn trên card mạng (NIC)"},
            {"key": "B", "text": "Do người quản trị mạng khai báo"},
            {"key": "C", "text": "Được gán trong quá trình thiết bị khởi động"},
            {"key": "D", "text": "Được gán trong quá trình thiết bị truyền thông tin"}
        ],
        "correct": ["A"],
        "explanation": "Địa chỉ MAC (Burned-in Address) được gắn cố định vào chip phần cứng của card mạng NIC ngay từ khi sản xuất."
    },
    {
        "id": "ch2_23",
        "topic": "Công nghệ Ethernet",
        "question": "Công nghệ nào dưới đây được sử dụng phổ biến nhất trong mạng LAN hiện nay:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Token Ring"},
            {"key": "B", "text": "FDDI"},
            {"key": "C", "text": "Ethernet"},
            {"key": "D", "text": "ADSL"}
        ],
        "correct": ["C"],
        "explanation": "Ethernet hiện nay là công nghệ mạng cục bộ (LAN) phổ biến và chiếm ưu thế tuyệt đối trên toàn cầu."
    },
    {
        "id": "ch2_24",
        "topic": "Công nghệ Ethernet",
        "question": "LLC là viết tắt của:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Logical Link Control"},
            {"key": "B", "text": "Link Logical Control"},
            {"key": "C", "text": "Logical Link Computer"},
            {"key": "D", "text": "Lan Logical Control"}
        ],
        "correct": ["A"],
        "explanation": "LLC viết tắt của Logical Link Control."
    },
    {
        "id": "ch2_25",
        "topic": "Công nghệ Ethernet",
        "question": "Địa chỉ MAC nào có dưới đây KHÔNG trong tiêu đề của Frame? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "MAC sources"},
            {"key": "B", "text": "MAC Gateway"},
            {"key": "C", "text": "MAC destination"},
            {"key": "D", "text": "MAC Default"}
        ],
        "correct": ["A", "B", "D"],
        "explanation": "Trong tiêu đề khung Ethernet chỉ có 2 trường địa chỉ MAC: Destination MAC và Source MAC. Các thuật ngữ MAC Gateway, MAC Default không có trong chuẩn tiêu đề khung."
    },
    {
        "id": "ch2_26",
        "topic": "Công nghệ Ethernet",
        "question": "Các loại địa chỉ MAC bao gồm? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "MAC unicast"},
            {"key": "B", "text": "MAC multicast"},
            {"key": "C", "text": "MAC broadcast"},
            {"key": "D", "text": "MAC anycast"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "Ở tầng 2 chỉ có 3 kiểu địa chỉ MAC: Unicast (đơn hướng), Multicast (nhóm), và Broadcast (quảng bá). Địa chỉ Anycast chỉ có ở IPv6 (tầng 3)."
    },
    {
        "id": "ch2_27",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Tốc độ của GigabitEthernet có thể lên đến 10000Mbps?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Gigabit Ethernet có tốc độ 1000 Mbps (1 Gbps). 10000 Mbps là 10 Gigabit Ethernet (10 GbE)."
    },
    {
        "id": "ch2_28",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Thiết bị chuyển mạch lớp 2 hoạt động kém hiệu quả hơn so với Hub?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Switch Layer 2 hoạt động thông minh, tách riêng từng collision domain cho mỗi cổng, hỗ trợ Full-Duplex nên hiệu quả hơn Hub rất nhiều."
    },
    {
        "id": "ch2_29",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Mac Address Table được lưu trữ trong RAM của Switch?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Bảng địa chỉ MAC (CAM table) được lưu trong bộ nhớ RAM tốc độ cao và tự động làm mới (aging time) hoặc mất khi tắt nguồn switch."
    },
    {
        "id": "ch2_30",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Một thiết bị chuyển mạch lớp 2 có thể hỗ trợ các loại cổng:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Cổng dynamic và Well-known"},
            {"key": "B", "text": "Cổng access và Well-known"},
            {"key": "C", "text": "Cổng trunk và Well-known"},
            {"key": "D", "text": "Cổng access và trunk"}
        ],
        "correct": ["D"],
        "explanation": "Cổng trên Switch cấu hình ở 2 chế độ chính: Access Port (kết nối máy trạm, gán 1 VLAN) và Trunk Port (kết nối giữa switch với switch/router, mang nhiều VLAN)."
    },
    {
        "id": "ch2_31",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Thiết bị Switch thông thường nằm ở tầng nào của mô hình OSI?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Tầng 1"},
            {"key": "B", "text": "Tầng 2"},
            {"key": "C", "text": "Tầng 3"},
            {"key": "D", "text": "Tầng 4"}
        ],
        "correct": ["B"],
        "explanation": "Switch tiêu chuẩn là thiết bị tầng 2 (Data Link Layer)."
    },
    {
        "id": "ch2_32",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Để hạn chế sự đụng độ (hay va chạm) giữa các gói tin trong mạng người ta sử dụng thiết bị nào dưới đây?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Repeaters"},
            {"key": "B", "text": "Hubs"},
            {"key": "C", "text": "Switches"},
            {"key": "D", "text": "Card mạng (NIC)"}
        ],
        "correct": ["C"],
        "explanation": "Switch chia nhỏ mạng thành nhiều collision domain độc lập trên từng cổng, qua đó ngăn chặn và loại bỏ triệt để va chạm tín hiệu khi chạy Full-Duplex."
    },
    {
        "id": "ch2_33",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Địa chỉ nào được quan tâm khi một frame đi vào cổng của Switch?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Địa chỉ IP nguồn"},
            {"key": "B", "text": "Địa chỉ MAC nguồn"},
            {"key": "C", "text": "Địa chỉ IP đích"},
            {"key": "D", "text": "Địa chỉ MAC đích"}
        ],
        "correct": ["D"],
        "explanation": "Khi đưa ra quyết định chuyển tiếp (forwarding decision) cho khung, Switch kiểm tra địa chỉ MAC đích (Destination MAC) để tìm cổng ra thích hợp."
    },
    {
        "id": "ch2_34",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Các thiết bị nào dưới đây không được sử dụng để hạn chế sự đụng độ của các gói tin trong mạng? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Repeaters"},
            {"key": "B", "text": "Hubs"},
            {"key": "C", "text": "Switches"},
            {"key": "D", "text": "Card mạng (NIC)"}
        ],
        "correct": ["A", "B", "D"],
        "explanation": "Repeater, Hub (tầng 1) và NIC đơn thuần không có khả năng phân tách miền va chạm. Chỉ có Switch (và Bridge/Router) mới phân tách được collision domain."
    },
    {
        "id": "ch2_35",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Một miền quảng bá có tính chất như sau (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Phạm vi truy cập của các gói Broadcast"},
            {"key": "B", "text": "Các thiết bị trong cùng một miền quảng bá có thể nhận gói quảng bá"},
            {"key": "C", "text": "Bộ định tuyến phân tách các miền quảng bá bằng interface"},
            {"key": "D", "text": "Bộ định tuyến không phân tách được miền quảng bá"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "Miền quảng bá (Broadcast Domain) là phạm vi mà một gói tin quảng bá có thể lan truyền tới. Mọi thiết bị cùng miền đều nhận được broadcast. Router chia tách các broadcast domain bằng các interface của nó."
    },
    {
        "id": "ch2_36",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Các cách xử lý frame khi đi vào giao diện trên Switch? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Flooding"},
            {"key": "B", "text": "Saving"},
            {"key": "C", "text": "Forwarding"},
            {"key": "D", "text": "Discarding"}
        ],
        "correct": ["A", "C", "D"],
        "explanation": "3 hành vi xử lý frame của Switch: Forwarding (chuyển tiếp tới đúng cổng khi đã biết MAC đích), Flooding (chuyển tiếp tới mọi cổng trừ cổng nhận khi chưa biết MAC đích hoặc là Broadcast), Discarding/Filtering (hủy gói khi trùng cổng hoặc có lỗi CRC)."
    },
    {
        "id": "ch2_37",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Các chức năng đặc thù của thiết bị chuyển mạch lớp 2? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Xoá bỏ dữ liệu lỗi"},
            {"key": "B", "text": "Học địa chỉ"},
            {"key": "C", "text": "Quyết định chuyển tiếp/lọc khung"},
            {"key": "D", "text": "Tránh Loop"}
        ],
        "correct": ["B", "C", "D"],
        "explanation": "3 chức năng cốt lõi của Switch Layer 2: 1) Học địa chỉ MAC nguồn (Address Learning), 2) Quyết định chuyển tiếp hoặc lọc khung (Forward/Filter decision), 3) Tránh tạo vòng lặp mạng bằng giao thức STP (Loop Avoidance)."
    },
    {
        "id": "ch2_38",
        "topic": "Thiết bị chuyển mạch Ethernet",
        "question": "Các loại cổng Ethernet nào dưới đây dùng để truyền dữ liệu trong mạng LAN? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "FastEthernet"},
            {"key": "B", "text": "GigabitEthernet"},
            {"key": "C", "text": "Ten Gigabit Ethernet"},
            {"key": "D", "text": "Console Ethernet"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "FastEthernet (100Mbps), GigabitEthernet (1Gbps), Ten Gigabit Ethernet (10Gbps) là các chuẩn cổng truyền dữ liệu LAN. Cổng Console dùng riêng cho quản trị cấu hình thiết bị."
    },
    {
        "id": "ch2_39",
        "topic": "VLAN và Trunking",
        "question": "VLAN là một mạng LAN ảo",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "VLAN là viết tắt của Virtual Local Area Network (mạng cục bộ ảo)."
    },
    {
        "id": "ch2_40",
        "topic": "VLAN và Trunking",
        "question": "Dữ liệu ở VLAN gốc không được trao đổi qua kết nối Trunking",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "VLAN gốc (Native VLAN) vẫn được truyền qua đường Trunking bình thường, và theo chuẩn 802.1Q các khung của Native VLAN không cần gắn tag."
    },
    {
        "id": "ch2_41",
        "topic": "VLAN và Trunking",
        "question": "IEEE 802.1Q có tên gọi khác là dot1Q",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Chuẩn gắn nhãn VLAN IEEE 802.1Q thường được gọi vắn tắt là dot1Q."
    },
    {
        "id": "ch2_42",
        "topic": "VLAN và Trunking",
        "question": "Thiết bị Hub có bao nhiêu collision domain?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "1"},
            {"key": "B", "text": "2"},
            {"key": "C", "text": "3"},
            {"key": "D", "text": "4"}
        ],
        "correct": ["A"],
        "explanation": "Hub là thiết bị tầng vật lý dùng chung đường truyền, toàn bộ các cổng trên Hub đều thuộc 1 collision domain duy nhất."
    },
    {
        "id": "ch2_43",
        "topic": "VLAN và Trunking",
        "question": "Thiết bị Switch có bao nhiêu collision domain?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "3 collisions / 1 port"},
            {"key": "B", "text": "2 collisions / 1port"},
            {"key": "C", "text": "1 collision / 1port"},
            {"key": "D", "text": "4 collisions / 1 port"}
        ],
        "correct": ["C"],
        "explanation": "Mỗi cổng trên Switch là một miền va chạm độc lập (1 collision domain / 1 port)."
    },
    {
        "id": "ch2_44",
        "topic": "VLAN và Trunking",
        "question": "Thiết bị Switch (cấu hình mặc định) có bao nhiêu Broadcast domain?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "1"},
            {"key": "B", "text": "2"},
            {"key": "C", "text": "3"},
            {"key": "D", "text": "4"}
        ],
        "correct": ["A"],
        "explanation": "Mặc định tất cả các cổng trên Switch đều thuộc VLAN 1, do đó toàn bộ Switch chỉ tạo thành 1 Broadcast domain duy nhất."
    },
    {
        "id": "ch2_45",
        "topic": "VLAN và Trunking",
        "question": "Thiết bị Hub có bao nhiêu Broadcast domain?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "1"},
            {"key": "B", "text": "2"},
            {"key": "C", "text": "3"},
            {"key": "D", "text": "4"}
        ],
        "correct": ["A"],
        "explanation": "Hub không phân chia được broadcast, toàn bộ Hub tạo thành 1 Broadcast domain duy nhất."
    },
    {
        "id": "ch2_46",
        "topic": "VLAN và Trunking",
        "question": "Virtual LAN (VLAN) là một nhóm các thiết bị kết nối trong cùng miền nào dưới đây?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Miền tự trị"},
            {"key": "B", "text": "Miền quảng bá"},
            {"key": "C", "text": "Miền vật lý"},
            {"key": "D", "text": "Miền va chạm"}
        ],
        "correct": ["B"],
        "explanation": "VLAN cho phép nhóm các thiết bị vào cùng một miền quảng bá (broadcast domain) logic độc lập mà không phụ thuộc vào vị trí vật lý."
    },
    {
        "id": "ch2_47",
        "topic": "VLAN và Trunking",
        "question": "Một mạng chứa nhiều VLAN trải rộng trên nhiều thiết bị chuyển mạch (trong các VLAN có VLAN 20). Điều gì xảy ra khi một thiết bị trong VLAN 20 gửi khung Ethernet quảng bá?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Các thiết bị trong các VLAN đều nhìn thấy frame."},
            {"key": "B", "text": "Các thiết bị trong VLAN 20 và VLAN quản lý sẽ nhìn thấy frame."},
            {"key": "C", "text": "Chỉ các thiết bị trong VLAN 20 mới nhìn thấy frame."},
            {"key": "D", "text": "Chỉ những thiết bị được kết nối với bộ chuyển mạch cục bộ mới nhìn thấy frame."}
        ],
        "correct": ["C"],
        "explanation": "Các cổng thuộc cùng VLAN 20 nằm chung một broadcast domain, do đó gói tin quảng bá trong VLAN 20 chỉ chuyển tiếp đến các cổng thuộc VLAN 20."
    },
    {
        "id": "ch2_48",
        "topic": "VLAN và Trunking",
        "question": "Trong Switch Cisco, VLAN mặc định là:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "VLAN 1"},
            {"key": "B", "text": "VLAN 2"},
            {"key": "C", "text": "VLAN 3"},
            {"key": "D", "text": "VLAN 4"}
        ],
        "correct": ["A"],
        "explanation": "Trên Switch Cisco, VLAN mặc định cho mọi giao diện là VLAN 1."
    },
    {
        "id": "ch2_49",
        "topic": "VLAN và Trunking",
        "question": "Lợi ích của việc sử dụng VLAN là gì? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Tăng cường bảo mật"},
            {"key": "B", "text": "Giảm chi phí, tăng hiệu suất"},
            {"key": "C", "text": "Dễ quản lý"},
            {"key": "D", "text": "Giảm độ trễ xử lý frame và bits"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "Lợi ích chính của VLAN: cô lập lưu lượng tăng tính bảo mật, thu hẹp miền broadcast giúp tăng hiệu suất và tiết kiệm chi phí, phân chia nhóm làm việc giúp quản lý dễ dàng."
    },
    {
        "id": "ch2_50",
        "topic": "VLAN và Trunking",
        "question": "Các dãy giá trị nào dưới đây thoả mãn là VLAN-ID? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "1-1001"},
            {"key": "B", "text": "1002-1005"},
            {"key": "C", "text": "1006-4094"},
            {"key": "D", "text": "4095-5095"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "VLAN ID có 12 bit (tổng giá trị từ 1 đến 4094): Dải chuẩn 1-1001 (Ethernet), 1002-1005 (Token Ring/FDDI), Dải mở rộng 1006-4094. Không có VLAN > 4094."
    },
    {
        "id": "ch2_51",
        "topic": "VLAN và Trunking",
        "question": "Phát biểu nào sau đây là SAI: khi Switch nhận được một frame gửi tới nó, Switch sẽ xử lý như thế nào nếu địa chỉ MAC đích trong frame không có trong bảng địa chỉ MAC của nó? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Switch sẽ chuyển frame đến địa chỉ default gateway"},
            {"key": "B", "text": "Switch sẽ chuyển frame đến cổng gần nhất"},
            {"key": "C", "text": "Switch sẽ hủy bỏ frame này"},
            {"key": "D", "text": "Switch sẽ chuyển tiếp frame đến các cổng của Switch trừ cổng nhận frame vào"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "Khi MAC đích chưa có trong bảng CAM, Switch sẽ Flood (chuyển tiếp khung ra tất cả các cổng trong cùng VLAN trừ cổng nhận vào - đây là câu D ĐÚNG). Do đó 3 phát biểu SAI là A, B, C."
    }
]

