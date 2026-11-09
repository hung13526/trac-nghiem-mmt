# -*- coding: utf-8 -*-

ch4_questions = [
    {
        "id": "ch4_1",
        "topic": "Tầng giao vận",
        "question": "UDP và TCP là các giao thức nằm ở tầng giao vận?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "TCP (Transmission Control Protocol) và UDP (User Datagram Protocol) là hai giao thức chủ đạo của tầng Giao vận (Transport Layer)."
    },
    {
        "id": "ch4_2",
        "topic": "Tầng giao vận",
        "question": "Các ứng dụng trao đổi dữ liệu giữa hai máy đều liên quan tới số hiệu cổng tầng giao vận",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Tầng giao vận sử dụng số hiệu cổng (Port Number) để định danh chính xác tiến trình hoặc ứng dụng gửi và nhận dữ liệu trên máy tính."
    },
    {
        "id": "ch4_3",
        "topic": "Tầng giao vận",
        "question": "Tầng giao vận đảm bảo dữ liệu có thể được tập hợp lại một cách chính xác ở bên nhận bằng các quá trình phân mảnh (hoặc phân đoạn) và tập hợp lại?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Tầng giao vận chia nhỏ luồng dữ liệu ứng dụng thành các segment/datagram ở bên gửi (Segmentation) và ghép nối lại theo đúng thứ tự ở bên nhận (Reassembly)."
    },
    {
        "id": "ch4_4",
        "topic": "Tầng giao vận",
        "question": "Địa chỉ Default Gateway là một thành phần của Socket?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Socket là sự kết hợp giữa Địa chỉ IP + Số hiệu cổng (Port) + Giao thức giao vận (TCP/UDP). Không bao gồm Default Gateway."
    },
    {
        "id": "ch4_5",
        "topic": "Tầng giao vận",
        "question": "Phát biểu nào sau đây (tầng giao vận) là sai:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Port dùng để kết nối Client/Server"},
            {"key": "B", "text": "Port xác định ứng dụng truyền/nhận dữ liệu"},
            {"key": "C", "text": "Port có giá trị từ 1 đến 1023"},
            {"key": "D", "text": "Port được dùng cho TCP và UDP"}
        ],
        "correct": ["C"],
        "explanation": "Số hiệu cổng gồm 16 bit, có giá trị từ 0 đến 65535 (trong đó 0-1023 là Well-known ports, 1024-49151 là Registered ports, 49152-65535 là Dynamic/Private ports). Nói Port chỉ có giá trị từ 1 đến 1023 là Sai."
    },
    {
        "id": "ch4_6",
        "topic": "Tầng giao vận",
        "question": "Port mặc định của HTTP server là:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "TCP/80"},
            {"key": "B", "text": "TCP/23"},
            {"key": "C", "text": "UDP/25"},
            {"key": "D", "text": "UDP/110"}
        ],
        "correct": ["A"],
        "explanation": "Dịch vụ Web HTTP hoạt động mặc định trên cổng TCP số 80 (HTTPS chạy trên TCP 443)."
    },
    {
        "id": "ch4_7",
        "topic": "Tầng giao vận",
        "question": "Phát biểu nào dưới đây là đúng với số hiệu cổng (port number):",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Địa chỉ của một ứng dụng trên internet"},
            {"key": "B", "text": "Địa chỉ của một máy tính trên internet"},
            {"key": "C", "text": "Địa chỉ của một ứng dụng trên một máy tính"},
            {"key": "D", "text": "Liên kết với giao thức tầng Giao vận để xác định một ứng dụng"}
        ],
        "correct": ["D"],
        "explanation": "Số hiệu cổng liên kết chặt chẽ với giao thức tầng giao vận (TCP/UDP) để xác định duy nhất một tiến trình/ứng dụng đang giao tiếp trên máy tính."
    },
    {
        "id": "ch4_8",
        "topic": "Tầng giao vận",
        "question": "Để phát hiện lỗi trong khi truyền segment ở tầng giao vận, người ta sử dụng kỹ thuật:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Số thứ tự"},
            {"key": "B", "text": "Số thứ tự ghi nhận"},
            {"key": "C", "text": "Bộ định thời"},
            {"key": "D", "text": "Checksum"}
        ],
        "correct": ["D"],
        "explanation": "Cả TCP và UDP đều sử dụng trường Checksum (tổng kiểm tra bù 16-bit) để phát hiện hư hỏng bit trong quá trình truyền dữ liệu."
    },
    {
        "id": "ch4_9",
        "topic": "Tầng giao vận",
        "question": "Giao thức tầng giao vận nào sau đây được sử dụng trong mạng?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "TCP và FTP"},
            {"key": "B", "text": "UDP và HTTP"},
            {"key": "C", "text": "TCP và UDP"},
            {"key": "D", "text": "HTTP và FTP"}
        ],
        "correct": ["C"],
        "explanation": "TCP và UDP là hai giao thức tầng giao vận (Transport Layer). FTP và HTTP thuộc tầng Ứng dụng."
    },
    {
        "id": "ch4_10",
        "topic": "Tầng giao vận",
        "question": "Các giao thức tầng giao vận xử lý vấn đề nào sau đây?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Giao tiếp giữa ứng dụng với ứng dụng"},
            {"key": "B", "text": "Giao tiếp giữa tiến trình với tiến trình"},
            {"key": "C", "text": "Giao tiếp giữa node với node"},
            {"key": "D", "text": "Giao tiếp giữa con người với con người"}
        ],
        "correct": ["B"],
        "explanation": "Tầng giao vận cung cấp dịch vụ truyền thông logic giữa các tiến trình với tiến trình (Process-to-Process Communication)."
    },
    {
        "id": "ch4_11",
        "topic": "Tầng giao vận",
        "question": "Điểm truy cập dịch vụ ở tầng giao vận có tên là?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Port"},
            {"key": "B", "text": "Pipe"},
            {"key": "C", "text": "Node"},
            {"key": "D", "text": "Protocol"}
        ],
        "correct": ["A"],
        "explanation": "Service Access Point (SAP) tại tầng giao vận chính là Cổng (Port Number)."
    },
    {
        "id": "ch4_12",
        "topic": "Tầng giao vận",
        "question": "Chức năng của tầng giao vận:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đảm bảo các yêu cầu truyền dữ liệu qua các phương tiện vật lý"},
            {"key": "B", "text": "Mã hóa dữ liệu để bảo mật thông tin trên đường tuyền"},
            {"key": "C", "text": "Thực hiện việc tạo luồng dữ liệu kết nối giữa các đầu cuối"},
            {"key": "D", "text": "Nén dữ liệu để việc truyền qua mạng nhanh hơn"}
        ],
        "correct": ["C"],
        "explanation": "Tầng giao vận thiết lập, duy trì luồng dữ liệu kết nối logic xuyên suốt giữa hai hệ thống đầu cuối (End-to-End)."
    },
    {
        "id": "ch4_13",
        "topic": "Tầng giao vận",
        "question": "Ưu điểm của dịch vụ không kết nối (Connectionless service) khi so sánh với dịch vụ hướng kết nối (Connection-oriented service) ở tầng giao vận là",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Giải quyết tắc nghẽn tốt hơn"},
            {"key": "B", "text": "Chất lượng dịch vụ có thể được đảm bảo"},
            {"key": "C", "text": "Không mất thời gian thiết lập và quản lý kết nối"},
            {"key": "D", "text": "Độ tin cậy cao"}
        ],
        "correct": ["C"],
        "explanation": "Dịch vụ không kết nối (như UDP) không cần thực hiện bắt tay 3 bước, gửi gói tin ngay lập tức, tiết kiệm băng thông và giảm tối đa độ trễ truyền dữ liệu."
    },
    {
        "id": "ch4_14",
        "topic": "Tầng giao vận",
        "question": "Nhiệm vụ nào dưới đây là của các tầng giao vận?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Cung cấp quyền truy cập mạng"},
            {"key": "B", "text": "Phân tách các luồng dữ liệu"},
            {"key": "C", "text": "Xác định đường đi tốt nhất để chuyển tiếp gói"},
            {"key": "D", "text": "Dịch địa chỉ IP riêng sang địa chỉ IP công cộng"}
        ],
        "correct": ["B"],
        "explanation": "Tầng giao vận thực hiện phân kênh và ghép kênh (Multiplexing / Demultiplexing) để phân tách và định tuyến đúng các luồng dữ liệu tới từng ứng dụng."
    },
    {
        "id": "ch4_15",
        "topic": "Tầng giao vận",
        "question": "Thông tin nào dưới đây KHÔNG có trong tiêu đề của hai giao thức cơ bản ở tầng giao vận?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Sequence number"},
            {"key": "B", "text": "Checksum"},
            {"key": "C", "text": "Source port"},
            {"key": "D", "text": "Destination port"}
        ],
        "correct": ["A"],
        "explanation": "Cả TCP và UDP đều có: Source Port, Destination Port, Checksum. Nhưng Sequence Number CHỈ CÓ trong TCP, hoàn toàn KHÔNG CÓ trong UDP."
    },
    {
        "id": "ch4_16",
        "topic": "Tầng giao vận",
        "question": "Dải số hiệu cổng thông dụng được sử dụng trong tầng giao vận (TCP và UDP) là:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "0 – 255"},
            {"key": "B", "text": "0 – 1023"},
            {"key": "C", "text": "256 – 1023"},
            {"key": "D", "text": "1024 - 49151"}
        ],
        "correct": ["B"],
        "explanation": "Dải cổng thông dụng (Well-Known Ports) được IANA quy định là từ 0 đến 1023 (dành cho các dịch vụ cốt lõi như HTTP 80, DNS 53, SSH 22...)."
    },
    {
        "id": "ch4_17",
        "topic": "Tầng giao vận",
        "question": "Ở tầng giao vận, socket là:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Sự kết hợp giữa địa chỉ IP, số hiệu cổng và giao thức tầng ứng dụng"},
            {"key": "B", "text": "Sự kết hợp giữa địa chỉ IP, số hiệu mạng và giao thức tầng giao vận"},
            {"key": "C", "text": "Sự kết hợp giữa địa chỉ IP, số hiệu cổng và giao thức tầng giao vận"},
            {"key": "D", "text": "Sự kết hợp giữa địa chỉ IP, số hiệu cổng thông dụng và giao thức tầng ứng dụng"}
        ],
        "correct": ["C"],
        "explanation": "Socket là sự kết hợp định danh gồm: Địa chỉ IP, Số hiệu cổng (Port), và Giao thức tầng giao vận (TCP/UDP)."
    },
    {
        "id": "ch4_18",
        "topic": "Tầng giao vận",
        "question": "Loại số hiệu cổng nào được IANA chỉ định cho các dịch vụ và ứng dụng thường được sử dụng?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Private port"},
            {"key": "B", "text": "Registered port"},
            {"key": "C", "text": "Well-known port"},
            {"key": "D", "text": "Dynamic port"}
        ],
        "correct": ["C"],
        "explanation": "Well-known ports (0 - 1023) do IANA chỉ định riêng cho các dịch vụ và giao thức mạng phổ biến."
    },
    {
        "id": "ch4_19",
        "topic": "Tầng giao vận",
        "question": "Tầng giao vận sử dụng cổng 53 để mô tả giao thức nào?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "SNMP"},
            {"key": "B", "text": "SMTP"},
            {"key": "C", "text": "DHCP"},
            {"key": "D", "text": "DNS"}
        ],
        "correct": ["D"],
        "explanation": "Cổng 53 (chạy trên cả UDP và TCP) là cổng mặc định của dịch vụ phân giải tên miền DNS."
    },
    {
        "id": "ch4_20",
        "topic": "Tầng giao vận",
        "question": "Nhiệm vụ chính trong tầng giao vận (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Theo dõi giao tiếp"},
            {"key": "B", "text": "Phân mảnh (hoặc phân đoạn) dữ liệu"},
            {"key": "C", "text": "Xác định các ứng dụng"},
            {"key": "D", "text": "Kiểm soát luồng dữ liệu"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "Các vai trò chủ chốt của tầng giao vận: theo dõi từng cuộc đàm thoại (tracking communications), phân đoạn và tái tạo dữ liệu (segmentation), xác định ứng dụng tiếp nhận bằng cổng (identifying applications)."
    },
    {
        "id": "ch4_21",
        "topic": "Tầng giao vận",
        "question": "Các phát biểu nào sau đây liên quan tới số hiệu cổng (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Mỗi số hiệu cổng được hiển thị bằng một số nguyên không dấu"},
            {"key": "B", "text": "Mỗi số hiệu cổng có độ dài 16-bit do ICANN cấp"},
            {"key": "C", "text": "Mỗi số hiệu cổng có độ dài 16-bit do IANA cấp"},
            {"key": "D", "text": "Số hiệu cổng được dùng để xác định một ứng dụng"}
        ],
        "correct": ["A", "C", "D"],
        "explanation": "Cổng là số nguyên không dấu 16 bit (0-65535), do IANA quản lý phân bổ, dùng để định danh tiến trình ứng dụng."
    },
    {
        "id": "ch4_22",
        "topic": "Tầng giao vận",
        "question": "Dữ liệu được đóng gói trong tầng Giao vận KHÔNG được gọi là (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Segment hoặc Datagrama"},
            {"key": "B", "text": "Segmen hoặc Datagram"},
            {"key": "C", "text": "Segment hoặc Datagram"},
            {"key": "D", "text": "Segmen hoặc Datagrama"}
        ],
        "correct": ["A", "B", "D"],
        "explanation": "Thuật ngữ chuẩn xác là 'Segment' (trong TCP) hoặc 'Datagram' (trong UDP) (đây là phương án C đúng). Ba phương án viết sai chính tả A, B, D KHÔNG phải tên gọi đúng."
    },
    {
        "id": "ch4_23",
        "topic": "Giao thức UDP",
        "question": "UDP quản lý và theo dõi thứ tự Datagram",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "UDP không đánh số thứ tự (không có trường Sequence Number) nên không theo dõi hay quản lý thứ tự các datagram."
    },
    {
        "id": "ch4_24",
        "topic": "Giao thức UDP",
        "question": "UDP phải sắp xếp lại Datagram theo thứ tự truyền",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "UDP chuyển dữ liệu ngay cho tầng ứng dụng theo thứ tự nó nhận được, không sắp xếp lại thứ tự."
    },
    {
        "id": "ch4_25",
        "topic": "Giao thức UDP",
        "question": "Một trong các nhiệm vụ của UDP thiết lập phiên trước khi truyền dữ liệu giữa 2 thiết bị đầu cuối",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "UDP là giao thức không kết nối (connectionless), truyền dữ liệu mà không cần thiết lập phiên."
    },
    {
        "id": "ch4_26",
        "topic": "Giao thức UDP",
        "question": "UDP không có cơ chế phát hiện lỗi",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "UDP CÓ trường Checksum để phát hiện lỗi đường truyền."
    },
    {
        "id": "ch4_27",
        "topic": "Giao thức UDP",
        "question": "UDP là giao thức truyền tin tin cậy",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "UDP là giao thức không tin cậy (unreliable / best effort), không có xác nhận ACK và không truyền lại gói mất."
    },
    {
        "id": "ch4_28",
        "topic": "Giao thức UDP",
        "question": "Ứng dụng nào sau đây phù hợp nhất với UDP:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Video Conference"},
            {"key": "B", "text": "Truyền tải file qua mạng"},
            {"key": "C", "text": "Thanh toán qua mạng"},
            {"key": "D", "text": "Truyền tải email qua mạng"}
        ],
        "correct": ["A"],
        "explanation": "Video Conference (hội thảo truyền hình) đòi hỏi thời gian thực, độ trễ thấp, có thể chấp nhận mất mát vài khung hình nhỏ mà không cần truyền lại."
    },
    {
        "id": "ch4_29",
        "topic": "Giao thức UDP",
        "question": "Giao thức UDP được gọi là không kết nối vì lý do nào sau đây",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Các gói UDP được xử lý độc lập bởi lớp vận chuyển"},
            {"key": "B", "text": "Nó gửi dữ liệu dưới dạng luồng các gói liên quan"},
            {"key": "C", "text": "Nó được nhận theo thứ tự như thứ tự đã gửi"},
            {"key": "D", "text": "Nó gửi dữ liệu rất nhanh"}
        ],
        "correct": ["A"],
        "explanation": "Mỗi gói tin UDP (datagram) được đối xử hoàn toàn độc lập với các gói khác, không có trạng thái phiên duy trì giữa các gói."
    },
    {
        "id": "ch4_30",
        "topic": "Giao thức UDP",
        "question": "Số hiệu cổng được sử dụng bởi Giao thức Network Time Protocol (NTP) với UDP là?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "161"},
            {"key": "B", "text": "123"},
            {"key": "C", "text": "162"},
            {"key": "D", "text": "124"}
        ],
        "correct": ["B"],
        "explanation": "NTP (Network Time Protocol - đồng bộ thời gian mạng) chạy trên cổng UDP số 123."
    },
    {
        "id": "ch4_31",
        "topic": "Giao thức UDP",
        "question": "Cổng kết nối ở tầng Transport (giao thức UDP) của giao thức SNMP là",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "UDP/16"},
            {"key": "B", "text": "UDP/25"},
            {"key": "C", "text": "UDP/161"},
            {"key": "D", "text": "UDP/23"}
        ],
        "correct": ["C"],
        "explanation": "SNMP (Simple Network Management Protocol) dùng cổng UDP 161 (và cổng UDP 162 cho SNMP Trap)."
    },
    {
        "id": "ch4_32",
        "topic": "Giao thức UDP",
        "question": "Đặc điểm của giao thức UDP là gì?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Truyền các gói dữ liệu theo đúng thứ tự"},
            {"key": "B", "text": "Truyền lại các gói dữ liệu mất trên đường truyền"},
            {"key": "C", "text": "Không truyền lại các gói dữ liệu bị lỗi"},
            {"key": "D", "text": "Không có câu nào đúng"}
        ],
        "correct": ["C"],
        "explanation": "Nếu phát hiện gói tin bị hỏng qua Checksum, UDP hủy bỏ gói và không bao giờ yêu cầu gửi lại."
    },
    {
        "id": "ch4_33",
        "topic": "Giao thức UDP",
        "question": "Loại ứng dụng nào phù hợp nhất để sử dụng UDP?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Các ứng dụng nhạy cảm với độ trễ"},
            {"key": "B", "text": "Các ứng dụng cần phân phối đáng tin cậy"},
            {"key": "C", "text": "Các ứng dụng yêu cầu truyền lại các gói bị mất"},
            {"key": "D", "text": "Các ứng dụng nhạy cảm với việc mất gói"}
        ],
        "correct": ["A"],
        "explanation": "Các ứng dụng thời gian thực như streaming, VoIP, online gaming rất nhạy cảm với độ trễ (delay-sensitive) nên ưu tiên UDP."
    },
    {
        "id": "ch4_34",
        "topic": "Giao thức UDP",
        "question": "Hoạt động nào được máy khách thực hiện khi thiết lập liên lạc với máy chủ thông qua việc sử dụng UDP ở tầng giao vận?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Máy khách đặt kích thước cửa sổ cho phiên."},
            {"key": "B", "text": "Máy khách gửi SYN đến máy chủ để bắt đầu bắt tay 3 bước."},
            {"key": "C", "text": "Máy khách chọn ngẫu nhiên một số hiệu cổng"},
            {"key": "D", "text": "Máy khách gửi một gói tin đồng bộ hóa để yêu cầu kết nối."}
        ],
        "correct": ["C"],
        "explanation": "Do không có bắt tay thiết lập phiên, máy khách chỉ cần chọn một cổng nguồn ngẫu nhiên (Ephemeral/Dynamic port) và lập tức truyền dữ liệu tới máy chủ."
    },
    {
        "id": "ch4_35",
        "topic": "Giao thức UDP",
        "question": "Tại sao UDP lại phù hợp làm giao thức tầng giao vận cho các ứng dụng như video, voice?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "UDP đáp ứng nhanh và ít tiêu tốn tài nguyên."},
            {"key": "B", "text": "UDP cung cấp khả năng kiểm soát luồng bằng cách sử dụng cửa sổ trượt windows."},
            {"key": "C", "text": "UDP cung cấp xác nhận dữ liệu đã nhận."},
            {"key": "D", "text": "UDP cung cấp một phiên đáng tin cậy."}
        ],
        "correct": ["A"],
        "explanation": "Header của UDP rất nhẹ (chỉ 8 byte so với 20 byte của TCP), không tốn chi phí thiết lập và duy trì phiên, giúp truyền nhanh và ít tốn tài nguyên hệ thống."
    },
    {
        "id": "ch4_36",
        "topic": "Giao thức UDP",
        "question": "Đặc điểm của UDP là gì?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Nó thiết lập phiên kết nối qua quá trình bắt tay ba bước"},
            {"key": "B", "text": "Nó đóng phiên đã thiết lập qua quá trình bắt tay bốn bước"},
            {"key": "C", "text": "Nó cung cấp khả năng phân phối các datagram một cách không tin cậy"},
            {"key": "D", "text": "Nó cung cấp khả năng phân phối các segment một cách không tin cậy"}
        ],
        "correct": ["D"],
        "explanation": "UDP phân phối các segment/datagram không tin cậy (best-effort delivery) tới tầng ứng dụng."
    },
    {
        "id": "ch4_37",
        "topic": "Giao thức UDP",
        "question": "Các ứng dụng sử dụng giao thức UDP là (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Ứng dụng video và đa phương tiện trực tiếp"},
            {"key": "B", "text": "Ứng dụng yêu cầu và trả lời đơn giản"},
            {"key": "C", "text": "Các ứng dụng tự xử lý độ tin cậy"},
            {"key": "D", "text": "Ứng dụng gửi thư điện tử"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "UDP thích hợp cho video streaming trực tiếp, ứng dụng request/reply đơn giản (DNS), và các ứng dụng có tầng trên tự quản lý độ tin cậy (TFTP). Email (SMTP) yêu cầu TCP."
    },
    {
        "id": "ch4_38",
        "topic": "Giao thức UDP",
        "question": "Các giao thức nào chỉ sử dụng UDP (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "DHCP"},
            {"key": "B", "text": "TFTP"},
            {"key": "C", "text": "NTP"},
            {"key": "D", "text": "DNS"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "DHCP (cổng 67, 68), TFTP (cổng 69), NTP (cổng 123) chỉ sử dụng UDP. DNS dùng cả UDP lẫn TCP (cổng 53)."
    },
    {
        "id": "ch4_39",
        "topic": "Giao thức UDP",
        "question": "Phát biểu nào dưới đây là đúng khi nói về giao thức UDP (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Không có giai đoạn thiết lập kết nối"},
            {"key": "B", "text": "Không duy trì trạng thái kết nối"},
            {"key": "C", "text": "Không kiểm soát tốc độ gửi"},
            {"key": "D", "text": "Chỉ kiểm soát tốc độ nhận"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "UDP không bắt tay thiết lập kết nối, không lưu trạng thái kết nối, không có cơ chế điều khiển tắc nghẽn hay kiểm soát tốc độ gửi (flow/congestion control)."
    },
    {
        "id": "ch4_40",
        "topic": "Giao thức UDP",
        "question": "Các thành phần nằm trong UDP Header là (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Source Port"},
            {"key": "B", "text": "Checksum"},
            {"key": "C", "text": "Length"},
            {"key": "D", "text": "SYN Bit"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "UDP Header chỉ có đúng 4 trường (mỗi trường 16 bit): Source Port, Destination Port, Length, và Checksum. SYN Bit chỉ có ở TCP."
    },
    {
        "id": "ch4_41",
        "topic": "Giao thức UDP",
        "question": "Chức năng của giao thức UDP là (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Dữ liệu được xây dựng lại theo thứ tự nhận được."},
            {"key": "B", "text": "Bất kỳ datagram nào bị mất sẽ không được gửi lại."},
            {"key": "C", "text": "Không thiết lập phiên"},
            {"key": "D", "text": "Kiểm soát luồng"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "UDP tái hợp dữ liệu theo thứ tự tiếp nhận, không gửi lại gói tin bị mất, không thiết lập phiên và không kiểm soát luồng."
    },
    {
        "id": "ch4_42",
        "topic": "Giao thức TCP",
        "question": "Giao thức TCP sử dụng cửa sổ trượt để kiểm soát luồng",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Cơ chế cửa sổ trượt (Sliding Window) được TCP sử dụng để kiểm soát luồng (Flow Control) nhằm ngăn bên gửi làm tràn bộ đệm bên nhận."
    },
    {
        "id": "ch4_43",
        "topic": "Giao thức TCP",
        "question": "Trong giao thức TCP, các gói tin được gọi là segment",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Đơn vị gói dữ liệu của TCP gọi là Segment (phân đoạn)."
    },
    {
        "id": "ch4_44",
        "topic": "Giao thức TCP",
        "question": "TCP là một giao thức không tin cậy?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "TCP là giao thức hướng kết nối và đảm bảo tin cậy (Reliable)."
    },
    {
        "id": "ch4_45",
        "topic": "Giao thức TCP",
        "question": "TCP không có chức năng sắp xếp lại các segment",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "TCP sử dụng trường Sequence Number để sắp xếp lại chính xác các segment bị đến sai thứ tự."
    },
    {
        "id": "ch4_46",
        "topic": "Giao thức TCP",
        "question": "TCP sử dụng cơ chế cửa sổ trượt để điều khiển tốc độ truyền dữ liệu",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Kích thước cửa sổ (Window Size) trong TCP cho phép điều chỉnh tốc độ truyền dữ liệu giữa người gửi và người nhận."
    },
    {
        "id": "ch4_47",
        "topic": "Giao thức TCP",
        "question": "Trong TCP, việc gửi và nhận dữ liệu được thực hiện dưới dạng",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Dòng bytes"},
            {"key": "B", "text": "Chuỗi các ký tự"},
            {"key": "C", "text": "Các đường dữ liệu"},
            {"key": "D", "text": "Các gói tin"}
        ],
        "correct": ["A"],
        "explanation": "TCP xem dữ liệu như một dòng liên tục các byte không có cấu trúc (Byte Stream Service)."
    },
    {
        "id": "ch4_48",
        "topic": "Giao thức TCP",
        "question": "Một máy khách đã thực hiện yêu cầu HTTP tới trình duyệt web. Số hiệu địa chỉ cổng thông dụng nào được liên kết với địa chỉ đích?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "TCP/404"},
            {"key": "B", "text": "TCP/110"},
            {"key": "C", "text": "TCP/443"},
            {"key": "D", "text": "TCP/80"}
        ],
        "correct": ["D"],
        "explanation": "Máy chủ Web HTTP lắng nghe kết nối đến tại cổng đích TCP/80."
    },
    {
        "id": "ch4_49",
        "topic": "Giao thức TCP",
        "question": "Ứng dụng nào sau đây không phù hợp với giao thức TCP?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Trình duyệt Web"},
            {"key": "B", "text": "Hệ thống hội thảo video trực tuyến"},
            {"key": "C", "text": "Hệ thống thanh toán qua mạng"},
            {"key": "D", "text": "Email"}
        ],
        "correct": ["B"],
        "explanation": "Hội thảo video trực tuyến đòi hỏi thời gian thực và độ trễ thấp, cơ chế bắt tay và truyền lại gói mất của TCP sẽ gây giật/lag, do đó không phù hợp bằng UDP."
    },
    {
        "id": "ch4_50",
        "topic": "Giao thức TCP",
        "question": "Acknowledgment number trong tiêu đề TCP là một số",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Độc lập"},
            {"key": "B", "text": "Ngẫu nhiên"},
            {"key": "C", "text": "Liên quan tới số SeqN của bên gửi"},
            {"key": "D", "text": "Không liên quan tới số SeqN của bên gửi"}
        ],
        "correct": ["C"],
        "explanation": "Acknowledgment Number cho biết số thứ tự của byte tiếp theo mà bên nhận đang mong đợi nhận (Ack = SeqN nhận được + số byte dữ liệu nhận được)."
    },
    {
        "id": "ch4_51",
        "topic": "Giao thức TCP",
        "question": "Byte dữ liệu được truyền trong mỗi kết nối được đánh số bởi TCP. Những con số này có dạng?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Số cố định"},
            {"key": "B", "text": "Số 0"},
            {"key": "C", "text": "Số 1"},
            {"key": "D", "text": "Chuỗi số 0 và số 1"}
        ],
        "correct": ["D"],
        "explanation": "Số thứ tự Sequence Number trong TCP Header là trường 32 bit nhị phân (chuỗi số 0 và 1), biểu diễn số thứ tự byte dữ liệu được truyền đi."
    },
    {
        "id": "ch4_52",
        "topic": "Giao thức TCP",
        "question": "Cổng kết nối của giao thức SMTP là",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "TCP/24"},
            {"key": "B", "text": "TCP/26"},
            {"key": "C", "text": "TCP/25"},
            {"key": "D", "text": "TCP/27"}
        ],
        "correct": ["C"],
        "explanation": "Giao thức truyền thư điện tử SMTP hoạt động trên cổng chuẩn TCP/25."
    },
    {
        "id": "ch4_53",
        "topic": "Giao thức TCP",
        "question": "Quá trình bộ nhận kiểm soát lượng dữ liệu được gửi bởi người gửi được gọi là?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Điều khiển luồng"},
            {"key": "B", "text": "Điều khiển lỗi"},
            {"key": "C", "text": "Kiểm soát tắc nghẽn"},
            {"key": "D", "text": "Phát hiện lỗi"}
        ],
        "correct": ["A"],
        "explanation": "Điều khiển luồng (Flow Control) là quá trình bên nhận thông báo kích thước cửa sổ nhận (Window Size) để kiểm soát tốc độ gửi của bên phát, tránh làm tràn bộ đệm bên nhận."
    },
    {
        "id": "ch4_54",
        "topic": "Giao thức TCP",
        "question": "Thông số nào được nút nguồn lựa chọn ngẫu nhiên trước khi gửi dữ liệu",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Địa chỉ IP đích."},
            {"key": "B", "text": "Địa chỉ MAC nguồn."},
            {"key": "C", "text": "Địa chỉ cổng mặc định."},
            {"key": "D", "text": "Cổng nguồn."}
        ],
        "correct": ["D"],
        "explanation": "Hệ điều hành của máy nguồn tự động chọn ngẫu nhiên một Cổng nguồn (Source Port - dynamic port) chưa sử dụng để mở phiên kết nối."
    },
    {
        "id": "ch4_55",
        "topic": "Giao thức TCP",
        "question": "Trường thông tin Sequence Number trong tiêu đề của giao thức TCP dùng để làm gì?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "Lưu số thứ tự của gói tin"},
            {"key": "B", "text": "Lưu mã xử lý lỗi của gói tin"},
            {"key": "C", "text": "Lưu thông tin điều khiển lưu lượng"},
            {"key": "D", "text": "Lưu thông tin điều khiển xung đột"}
        ],
        "correct": ["A"],
        "explanation": "Sequence Number lưu số thứ tự của byte đầu tiên trong segment, giúp bên nhận sắp xếp lại đúng luồng dữ liệu ban đầu."
    },
    {
        "id": "ch4_56",
        "topic": "Giao thức TCP",
        "question": "Trường nào trong tiêu đề TCP được sử dụng để bắt đầu quá trình bắt tay ba bước?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
            {"key": "A", "text": "FIN"},
            {"key": "B", "text": "PSH"},
            {"key": "C", "text": "RST"},
            {"key": "D", "text": "SYN"}
        ],
        "correct": ["D"],
        "explanation": "Cờ SYN (Synchronize Sequence Numbers) được bật khi bắt đầu yêu cầu thiết lập kết nối (bắt tay 3 bước: SYN -> SYN+ACK -> ACK)."
    },
    {
        "id": "ch4_57",
        "topic": "Giao thức TCP",
        "question": "Các chức năng trong giao thức TCP là (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Thiết lập phiên"},
            {"key": "B", "text": "Đảm bảo tin cậy"},
            {"key": "C", "text": "Điều khiển luồng"},
            {"key": "D", "text": "Giữ và chuyển tiếp"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "3 chức năng trụ cột của TCP: Thiết lập và giải phóng phiên (Session management), Đảm bảo độ tin cậy bằng truyền lại và số thứ tự (Reliability), và Điều khiển luồng qua cửa sổ trượt (Flow control)."
    },
    {
        "id": "ch4_58",
        "topic": "Giao thức TCP",
        "question": "Các dịch vụ sử dụng giao thức TCP là (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "FTP"},
            {"key": "B", "text": "HTTP"},
            {"key": "C", "text": "SMTP"},
            {"key": "D", "text": "Streaming"}
        ],
        "correct": ["A", "B", "C"],
        "explanation": "FTP (truyền file), HTTP (duyệt web) và SMTP (gửi mail) bắt buộc phải sử dụng TCP để đảm bảo dữ liệu không bị mất mát hay sai lệch."
    },
    {
        "id": "ch4_59",
        "topic": "Giao thức TCP",
        "question": "Ba trường nào sau đây có trong tiêu đề TCP? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "ISN"},
            {"key": "B", "text": "SYN"},
            {"key": "C", "text": "FIN"},
            {"key": "D", "text": "URG"}
        ],
        "correct": ["B", "C", "D"],
        "explanation": "SYN, FIN, URG là 3 cờ điều khiển (control flags) có mặt trong trường cờ 6-bit của tiêu đề TCP. ISN (Initial Sequence Number) là giá trị khởi tạo, không phải tên trường."
    },
    {
        "id": "ch4_60",
        "topic": "Giao thức TCP",
        "question": "Các ý nào dưới đây nằm trong quá trình kết thúc phiên kết nối (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
            {"key": "A", "text": "Khi Client không còn dữ liệu để gửi, nó sẽ gửi một segment có gán cờ FIN"},
            {"key": "B", "text": "Server gửi lại ACK để xác nhận đã nhận được FIN để chấm dứt phiên kết nối"},
            {"key": "C", "text": "Server gửi ISN để đóng phiên kết nối này"},
            {"key": "D", "text": "Client gửi lại ACK để xác nhận đã nhận được FIN từ Server"}
        ],
        "correct": ["A", "B", "D"],
        "explanation": "Quá trình đóng kết nối TCP 4 bước: 1) Client gửi FIN. 2) Server gửi ACK. 3) Server gửi FIN khi hoàn tất gửi dữ liệu. 4) Client gửi ACK xác nhận FIN của Server."
    }
]

