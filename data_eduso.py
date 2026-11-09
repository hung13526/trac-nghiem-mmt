# -*- coding: utf-8 -*-

eduso_questions = [
    {
        "id": "eduso_1",
        "number": 1,
        "question": "Coaxial là một loại cáp dùng trong truyền thông mạng máy tính",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Cáp đồng trục (Coaxial Cable) là một loại cáp truyền thông vật lý được sử dụng rộng rãi trong mạng máy tính (như chuẩn 10BASE2, 10BASE5)."
    },
    {
        "id": "eduso_2",
        "number": 2,
        "question": "Hub là một thiết bị đầu cuối.",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Hub là thiết bị kết nối mạng trung gian hoạt động ở tầng vật lý (Physical Layer), không phải thiết bị đầu cuối (End Device như PC, Server, Smartphone)."
    },
    {
        "id": "eduso_3",
        "number": 3,
        "question": "Mạng Internet được hình thành từ sự kết nối của rất nhiều mạng, nhiều loại mạng khác nhau trên toàn thế giới.",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Internet là mạng toàn cầu liên kết hàng triệu mạng máy tính khác nhau thông qua bộ giao thức TCP/IP."
    },
    {
        "id": "eduso_4",
        "number": 4,
        "question": "Các dạng mạng máy tính có cấu trúc liên kết (dạng như Bus, Star, Ring,…) được phân loại dựa trên hình dạng kết nối các thiết bị?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Cấu trúc liên kết mạng (Topology) chính là sự sắp xếp, bố trí hình học kết nối giữa các nút mạng và đường truyền."
    },
    {
        "id": "eduso_5",
        "number": 5,
        "question": "Trong mô hình OSI, tầng Network có thể thông tin trực tiếp với các tầng Datalink và Transport trong cùng một thiết bị",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Trong cùng một thiết bị, một tầng chỉ trao đổi dữ liệu trực tiếp với tầng kề dưới (Datalink) và tầng kề trên (Transport) thông qua các giao diện SAP."
    },
    {
        "id": "eduso_6",
        "number": 6,
        "question": "Dữ liệu ở VLAN gốc không được trao đổi qua kết nối Trunking",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Dữ liệu của VLAN gốc (Native VLAN) vẫn được truyền qua đường kết nối Trunking bình thường và không bị gắn thêm tag 802.1Q."
    },
    {
        "id": "eduso_7",
        "number": 7,
        "question": "Cấu trúc khung tầng liên kết dữ liệu có trường tiêu đề (header) và phần đuôi (trailer)",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Frame là PDU duy nhất có cả Header (địa chỉ MAC, EtherType...) và Trailer (chứa FCS/CRC kiểm tra lỗi)."
    },
    {
        "id": "eduso_8",
        "number": 8,
        "question": "Một trong những chức năng của tầng liên kết dữ liệu là phát hiện lỗi.",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Tầng liên kết dữ liệu phát hiện lỗi bit truyền dẫn thông qua chuỗi kiểm tra khung FCS (Frame Check Sequence)."
    },
    {
        "id": "eduso_9",
        "number": 9,
        "question": "Mac Address Table được lưu trữ trong RAM của Switch?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Bảng địa chỉ MAC (bảng CAM) được lưu trong bộ nhớ động (RAM) của Switch và được cập nhật liên tục."
    },
    {
        "id": "eduso_10",
        "number": 10,
        "question": "CSMA/CD là giao thức truy cập ngẫu nhiên",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) là giao thức đa truy nhập môi trường ngẫu nhiên (Random Access)."
    },
    {
        "id": "eduso_11",
        "number": 11,
        "question": "Tốc độ của GigabitEthernet có thể lên đến 10000Mbps?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Gigabit Ethernet có tốc độ 1000 Mbps (1 Gbps). 10000 Mbps (10 Gbps) là 10 Gigabit Ethernet (10GbE)."
    },
    {
        "id": "eduso_12",
        "number": 12,
        "question": "VLAN là một mạng LAN ảo",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "VLAN là Virtual Local Area Network (mạng cục bộ ảo)."
    },
    {
        "id": "eduso_13",
        "number": 13,
        "question": "Switch dùng để kết nối mạng LAN Ethernet có dây.",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Switch là thiết bị trung tâm dùng để kết nối các máy tính và thiết bị có dây trong mạng Ethernet LAN."
    },
    {
        "id": "eduso_14",
        "number": 14,
        "question": "IEEE 802.1Q có tên gọi khác là dot1Q",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Chuẩn gắn tag VLAN IEEE 802.1Q thường được gọi vắn tắt là dot1Q."
    },
    {
        "id": "eduso_15",
        "number": 15,
        "question": "LLC là một lớp con (sublayer) trong tầng liên kết dữ liệu",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Chuẩn IEEE 802 chia tầng Data Link làm 2 tầng con: LLC (Logical Link Control - 802.2) và MAC (Media Access Control)."
    },
    {
        "id": "eduso_16",
        "number": 16,
        "question": "IPv6 là một giao thức nằm ở tầng Internet",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "IPv6 là giao thức truyền thông gói tin nằm ở tầng Internet trong mô hình TCP/IP."
    },
    {
        "id": "eduso_17",
        "number": 17,
        "question": "IPX không phải là một giao thức kết nối mạng",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "IPX (Internetwork Packet Exchange) của Novell NetWare chính là một giao thức mạng tầng 3 kinh điển. Do đó câu nói IPX không phải... là Sai."
    },
    {
        "id": "eduso_18",
        "number": 18,
        "question": "Internet là mạng được kết nối bởi các thiết bị định tuyến trên phạm vi toàn cầu.",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Internet được hình thành nhờ việc liên kết các mạng máy tính độc lập trên toàn cầu thông qua các bộ định tuyến (Routers) chạy giao thức BGP/IP."
    },
    {
        "id": "eduso_19",
        "number": 19,
        "question": "Địa chỉ IP không thay đổi từ nguồn tới đích:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Trong định tuyến mạng tiêu chuẩn, cặp địa chỉ IP nguồn và IP đích trong tiêu đề gói tin không đổi khi đi qua các router."
    },
    {
        "id": "eduso_20",
        "number": 20,
        "question": "Địa chỉ IPv4 có độ dài là 64 bits",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Địa chỉ IPv4 dài 32 bit (4 byte). IPv6 dài 128 bit."
    },
    {
        "id": "eduso_21",
        "number": 21,
        "question": "Chuyển tiếp là một nhiệm vụ của Router:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Hai chức năng cốt lõi của Router là Định tuyến (Routing) và Chuyển tiếp (Forwarding gói tin giữa các cổng)."
    },
    {
        "id": "eduso_22",
        "number": 22,
        "question": "Địa chỉ IPv6 nguồn phải là địa chỉ multicast",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Địa chỉ nguồn của bất kỳ gói tin nào phải là địa chỉ Unicast của thiết bị phát, không bao giờ là Multicast."
    },
    {
        "id": "eduso_23",
        "number": 23,
        "question": "192.168.0.0/24 là một địa chỉ public (địa chỉ công cộng)",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["A"],
        "explanation": "192.168.0.0/24 thuộc dải địa chỉ riêng (Private IP Address - RFC 1918), không định tuyến trên Internet công cộng."
    },
    {
        "id": "eduso_24",
        "number": 24,
        "question": "Địa chỉ IPv4 có thể được biểu diễn dưới dạng 32 bit.",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "IPv4 là một chuỗi nhị phân gồm chính xác 32 bit (4 octet)."
    },
    {
        "id": "eduso_25",
        "number": 25,
        "question": "Lớp mạng cho phép kết nối các thiết bị với nhau",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["A"],
        "explanation": "Lớp mạng (Network Layer) chịu trách nhiệm vận chuyển gói tin và liên kết các thiết bị qua các mạng khác nhau."
    },
    {
        "id": "eduso_26",
        "number": 26,
        "question": "TCP là một giao thức không tin cậy?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["A"],
        "explanation": "TCP là giao thức hướng kết nối và đảm bảo tin cậy (Reliable). UDP mới là giao thức không tin cậy."
    },
    {
        "id": "eduso_27",
        "number": 27,
        "question": "Một trong các nhiệm vụ của UDP thiết lập phiên trước khi truyền dữ liệu giữa 2 thiết bị đầu cuối",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "UDP là giao thức không kết nối (Connectionless), không thực hiện bất kỳ bước thiết lập phiên nào trước khi gửi."
    },
    {
        "id": "eduso_28",
        "number": 28,
        "question": "UDP không có cơ chế phát hiện lỗi",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "UDP CÓ trường Checksum trong tiêu đề để kiểm tra và phát hiện lỗi dữ liệu."
    },
    {
        "id": "eduso_29",
        "number": 29,
        "question": "Địa chỉ Default Gateway là một thành phần của Socket?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đúng"},
            {"key": "B", "text": "Sai"}
        ],
        "correct": ["B"],
        "explanation": "Socket chỉ gồm Địa chỉ IP + Số hiệu cổng (Port) + Giao thức giao vận, không bao gồm Default Gateway."
    },
    {
        "id": "eduso_30",
        "number": 30,
        "question": "Các ứng dụng trao đổi dữ liệu giữa hai máy đều liên quan tới số hiệu cổng tầng giao vận",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Sai"},
            {"key": "B", "text": "Đúng"}
        ],
        "correct": ["B"],
        "explanation": "Số hiệu cổng (Port number) ở tầng giao vận phân định chính xác luồng dữ liệu của từng ứng dụng/tiến trình trên máy tính."
    },
    {
        "id": "eduso_31",
        "number": 31,
        "question": "Thứ tự (từ trên xuống) của các tầng trong mô hình TCP/IP là?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Application – Transport – Internet – Network Access"},
            {"key": "B", "text": "Internet – Network Access – Transport – Application"},
            {"key": "C", "text": "Transport – Internet – Network Access – Application"},
            {"key": "D", "text": "Application – Internet – Transport – Network Access"}
        ],
        "correct": ["A"],
        "explanation": "4 tầng TCP/IP từ trên xuống: Application -> Transport -> Internet -> Network Access."
    },
    {
        "id": "eduso_32",
        "number": 32,
        "question": "Tổ chức nào sau đây KHÔNG phải là nhà cung cấp dịch vụ truy cập Internet tại Việt Nam?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Voodaaphone"},
            {"key": "B", "text": "Viettel"},
            {"key": "C", "text": "FPT"},
            {"key": "D", "text": "VNPT"}
        ],
        "correct": ["A"],
        "explanation": "Vodafone là nhà mạng quốc tế, không cung cấp dịch vụ viễn thông/Internet trực tiếp tại Việt Nam như Viettel, VNPT, FPT."
    },
    {
        "id": "eduso_33",
        "number": 33,
        "question": "Hai máy tính khác nhau có thể truyền thông với nhau nếu (Chọn phát biểu phù hợp nhất)",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Chúng có phần cứng giống nhau"},
            {"key": "B", "text": "Chúng cùng tuân thủ theo một mô hình"},
            {"key": "C", "text": "Chúng cùng dùng một bộ giao thức"},
            {"key": "D", "text": "Chúng cài đặt cùng hệ điều hành mạng"}
        ],
        "correct": ["C"],
        "explanation": "Chỉ cần cài đặt và sử dụng cùng một bộ giao thức mạng (như TCP/IP), các máy tính khác nhau về phần cứng và hệ điều hành đều có thể truyền thông suôn sẻ."
    },
    {
        "id": "eduso_34",
        "number": 34,
        "question": "Phương thức giao tiếp trong đó việc truyền dữ liệu diễn ra theo cả hai hướng nhưng tại một thời điểm chỉ có một hướng được truyền dữ liệu, gọi là",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Simplex"},
            {"key": "B", "text": "Four-wire circuit"},
            {"key": "C", "text": "Full duplex"},
            {"key": "D", "text": "Half-duplex"}
        ],
        "correct": ["D"],
        "explanation": "Half-duplex (Bán song công): truyền 2 chiều nhưng luân phiên từng thời điểm (như bộ đàm). Full-duplex truyền đồng thời cả 2 chiều."
    },
    {
        "id": "eduso_35",
        "number": 35,
        "question": "Thứ tự (từ trên xuống) của các lớp trong mô hình TCP/IP là?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Lớp ứng dụng - Lớp vận chuyển - Lớp liên kết dữ liệu - Lớp Network - Lớp vật lý"},
            {"key": "B", "text": "Lớp ứng dụng - Lớp Network - Lớp vận chuyển - Lớp liên kết dữ liệu - Lớp vật lý"},
            {"key": "C", "text": "Lớp ứng dụng - Lớp vận chuyển - Lớp Network - Lớp liên kết dữ liệu - Lớp vật lý"},
            {"key": "D", "text": "Lớp ứng dụng - Lớp liên kết dữ liệu - Lớp Network - Lớp vận chuyển - Lớp vật lý"}
        ],
        "correct": ["C"],
        "explanation": "Mô hình tương đương 5 lớp: Ứng dụng -> Vận chuyển -> Network -> Liên kết dữ liệu -> Vật lý."
    },
    {
        "id": "eduso_36",
        "number": 36,
        "question": "Đơn vị dữ liệu giao thức (PDU) của tầng Giao vận là",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Segment"},
            {"key": "B", "text": "Packet"},
            {"key": "C", "text": "Data"},
            {"key": "D", "text": "Bits"}
        ],
        "correct": ["A"],
        "explanation": "PDU ở Tầng Giao vận là Segment (đối với TCP) hoặc Datagram (đối với UDP)."
    },
    {
        "id": "eduso_37",
        "number": 37,
        "question": "ISP là chữ viết tắt của?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Internetwork System Provider"},
            {"key": "B", "text": "International Service Provider"},
            {"key": "C", "text": "International System Provider"},
            {"key": "D", "text": "Internet Service Provider"}
        ],
        "correct": ["D"],
        "explanation": "ISP là Internet Service Provider (Nhà cung cấp dịch vụ Internet)."
    },
    {
        "id": "eduso_38",
        "number": 38,
        "question": "Mô hình OSI có mấy tầng?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "4 tầng"},
            {"key": "B", "text": "7 tầng"},
            {"key": "C", "text": "5 tầng"},
            {"key": "D", "text": "6 tầng"}
        ],
        "correct": ["B"],
        "explanation": "Mô hình tham chiếu OSI chuẩn có 7 tầng (Physical, Data Link, Network, Transport, Session, Presentation, Application)."
    },
    {
        "id": "eduso_39",
        "number": 39,
        "question": "Một trong các chức năng chính của chuyển mạch lớp 2 là:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Cấp phát địa chỉ IP"},
            {"key": "B", "text": "Lọc và chuyển tiếp khung"},
            {"key": "C", "text": "Điều khiển truy cập mạng WAN"},
            {"key": "D", "text": "Nén dữ liệu"}
        ],
        "correct": ["B"],
        "explanation": "Switch Layer 2 thực hiện học địa chỉ MAC và đưa ra quyết định lọc và chuyển tiếp khung (Frame filtering and forwarding)."
    },
    {
        "id": "eduso_40",
        "number": 40,
        "question": "Một mạng chứa nhiều VLAN trải rộng trên nhiều thiết bị chuyển mạch (trong các VLAN có VLAN 20). Điều gì xảy ra khi một thiết bị trong VLAN 20 gửi khung Ethernet quảng bá?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Chỉ các thiết bị trong VLAN 20 mới nhìn thấy frame."},
            {"key": "B", "text": "Các thiết bị trong các VLAN đều nhìn thấy frame."},
            {"key": "C", "text": "Chỉ những thiết bị được kết nối với bộ chuyển mạch cục bộ mới nhìn thấy frame."},
            {"key": "D", "text": "Các thiết bị trong VLAN 20 và VLAN quản lý sẽ nhìn thấy frame."}
        ],
        "correct": ["A"],
        "explanation": "VLAN phân tách các miền quảng bá độc lập, do đó gói tin quảng bá trong VLAN 20 chỉ truyền tới các cổng/thiết bị thuộc VLAN 20."
    },
    {
        "id": "eduso_41",
        "number": 41,
        "question": "Thiết bị Switch có bao nhiêu collision domain?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "3 collisions / 1 port"},
            {"key": "B", "text": "4 collisions / 1 port"},
            {"key": "C", "text": "1 collision / 1port"},
            {"key": "D", "text": "2 collisions / 1port"}
        ],
        "correct": ["C"],
        "explanation": "Mỗi cổng trên Switch là một miền va chạm riêng biệt (1 collision domain trên 1 port)."
    },
    {
        "id": "eduso_42",
        "number": 42,
        "question": "Thiết bị Switch thông thường nằm ở tầng nào của mô hình OSI?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Tầng 1"},
            {"key": "B", "text": "Tầng 3"},
            {"key": "C", "text": "Tầng 4"},
            {"key": "D", "text": "Tầng 2"}
        ],
        "correct": ["D"],
        "explanation": "Switch truyền thống hoạt động ở Tầng 2 (Data Link Layer)."
    },
    {
        "id": "eduso_43",
        "number": 43,
        "question": "Chuẩn nào dưới đây đặc tả về chuẩn kiến trúc mạng cục bộ cho Ethernet, bao gồm các chuẩn tầng vật lý và tầng con MAC:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Token Bus"},
            {"key": "B", "text": "Token Ring"},
            {"key": "C", "text": "IEEE 802.2"},
            {"key": "D", "text": "IEEE 802.3"}
        ],
        "correct": ["D"],
        "explanation": "IEEE 802.3 là chuẩn đặc tả mạng Ethernet (gồm tầng vật lý và tầng con MAC)."
    },
    {
        "id": "eduso_44",
        "number": 44,
        "question": "Bảng MAC của Switch lưu trữ thông tin gì?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "MAC – giao diện của switch"},
            {"key": "B", "text": "MAC – địa chỉ IP"},
            {"key": "C", "text": "MAC – tên máy tính"},
            {"key": "D", "text": "MAC – mật khẩu thiết bị"}
        ],
        "correct": ["A"],
        "explanation": "Bảng CAM/MAC của Switch lưu ánh xạ giữa địa chỉ MAC và cổng/giao diện (Port/Interface) tương ứng."
    },
    {
        "id": "eduso_45",
        "number": 45,
        "question": "Virtual LAN (VLAN) là một nhóm các thiết bị kết nối trong cùng miền nào dưới đây?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Miền quảng bá"},
            {"key": "B", "text": "Miền va chạm"},
            {"key": "C", "text": "Miền vật lý"},
            {"key": "D", "text": "Miền tự trị"}
        ],
        "correct": ["A"],
        "explanation": "VLAN nhóm các thiết bị vào cùng một Broadcast Domain (miền quảng bá) độc lập logic."
    },
    {
        "id": "eduso_46",
        "number": 46,
        "question": "CSMA/CD là viết tắt của:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Carrier Sense Multiple Access / Carrier Detection"},
            {"key": "B", "text": "Carrier Sense Multiple Access / Collision Detection"},
            {"key": "C", "text": "Collision Sense Multiple Access / Collision Detection"},
            {"key": "D", "text": "Collision Sense Multiple Access / Carrier Detection"}
        ],
        "correct": ["B"],
        "explanation": "CSMA/CD: Carrier Sense Multiple Access with Collision Detection."
    },
    {
        "id": "eduso_47",
        "number": 47,
        "question": "Địa chỉ MAC multicast biểu thị:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Các thiết bị ngoài LAN"},
            {"key": "B", "text": "Một nhóm thiết bị"},
            {"key": "C", "text": "Tất cả thiết bị"},
            {"key": "D", "text": "Một thiết bị duy nhất"}
        ],
        "correct": ["B"],
        "explanation": "Multicast đại diện cho một nhóm các thiết bị tiếp nhận."
    },
    {
        "id": "eduso_48",
        "number": 48,
        "question": "12 chữ số hexa trong địa chỉ MAC tương đương với bao nhiêu byte?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "12 byte"},
            {"key": "B", "text": "8 byte"},
            {"key": "C", "text": "3 byte"},
            {"key": "D", "text": "6 byte"}
        ],
        "correct": ["D"],
        "explanation": "Mỗi số hexa = 4 bit = 0.5 byte. 12 số hexa = 48 bit = 6 byte."
    },
    {
        "id": "eduso_49",
        "number": 49,
        "question": "Công nghệ Ethernet sử dụng phương pháp truy nhập đường truyền nào sau đây:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "TDMA"},
            {"key": "B", "text": "ALOHA"},
            {"key": "C", "text": "CSMA/CD"},
            {"key": "D", "text": "CSMA"}
        ],
        "correct": ["C"],
        "explanation": "Ethernet bán song công sử dụng giao thức CSMA/CD."
    },
    {
        "id": "eduso_50",
        "number": 50,
        "question": "Tầng nào cung cấp dịch vụ truyền tin tin cậy qua môi trường vật lý:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Transport"},
            {"key": "B", "text": "Physical"},
            {"key": "C", "text": "Data link"},
            {"key": "D", "text": "Network"}
        ],
        "correct": ["C"],
        "explanation": "Theo chuẩn mô hình OSI, Tầng Data Link cung cấp truyền tin tin cậy trực tiếp trên đường truyền vật lý thông qua đóng khung và CRC."
    },
    {
        "id": "eduso_51",
        "number": 51,
        "question": "Địa chỉ MAC trên Windows 10 hiển thị dưới mục nào?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "MAC Address"},
            {"key": "B", "text": "Physical Address"},
            {"key": "C", "text": "Adapter ID"},
            {"key": "D", "text": "Hardware Number"}
        ],
        "correct": ["B"],
        "explanation": "Trong lệnh `ipconfig /all` trên Windows, địa chỉ MAC được hiển thị dưới nhãn 'Physical Address' (Địa chỉ vật lý)."
    },
    {
        "id": "eduso_52",
        "number": 52,
        "question": "Ở chế độ Unicast, frame được gửi từ:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Một nguồn đến một đích duy nhất"},
            {"key": "B", "text": "Tất cả nguồn đến một đích"},
            {"key": "C", "text": "Một nguồn đến một nhóm thiết bị"},
            {"key": "D", "text": "Một nguồn đến tất cả thiết bị"}
        ],
        "correct": ["A"],
        "explanation": "Unicast là truyền thông điểm-điểm: từ một thiết bị nguồn tới đúng một thiết bị đích xác định."
    },
    {
        "id": "eduso_53",
        "number": 53,
        "question": "Frame là dữ liệu ở tầng:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Data Link"},
            {"key": "B", "text": "Transport"},
            {"key": "C", "text": "Physical"},
            {"key": "D", "text": "Network"}
        ],
        "correct": ["A"],
        "explanation": "Frame là PDU của tầng Liên kết dữ liệu (Data Link Layer)."
    },
    {
        "id": "eduso_54",
        "number": 54,
        "question": "Thiết bị Hub có bao nhiêu collision domain?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "4"},
            {"key": "B", "text": "2"},
            {"key": "C", "text": "3"},
            {"key": "D", "text": "1"}
        ],
        "correct": ["D"],
        "explanation": "Toàn bộ Hub tạo thành duy nhất 1 miền va chạm (1 collision domain)."
    },
    {
        "id": "eduso_55",
        "number": 55,
        "question": "Để mạng LAN truy cập Internet, dữ liệu phải đi qua thiết bị nào?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Hub"},
            {"key": "B", "text": "Router"},
            {"key": "C", "text": "Access Point"},
            {"key": "D", "text": "Switch"}
        ],
        "correct": ["B"],
        "explanation": "Bộ định tuyến (Router) đóng vai trò Default Gateway kết nối mạng nội bộ LAN ra mạng Internet bên ngoài."
    },
    {
        "id": "eduso_56",
        "number": 56,
        "question": "Thông tin nào sau đây là địa chỉ IP hợp lệ:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "208.151.256.10"},
            {"key": "B", "text": "208.191.256.30"},
            {"key": "C", "text": "127.191.257.30"},
            {"key": "D", "text": "191.255.33.7"}
        ],
        "correct": ["D"],
        "explanation": "Mỗi octet trong IPv4 từ 0 đến 255. Các phương án A, B, C đều có octet > 255 (256, 257) nên không hợp lệ. Chỉ có 191.255.33.7 hợp lệ."
    },
    {
        "id": "eduso_57",
        "number": 57,
        "question": "Mặt nạ mạng con (Subnet mask) được dùng để:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Mã hóa dữ liệu"},
            {"key": "B", "text": "Chuyển đổi IPv4 sang IPv6"},
            {"key": "C", "text": "Xác định tốc độ truyền dữ liệu"},
            {"key": "D", "text": "Xác định phần mạng và phần host của địa chỉ IP"}
        ],
        "correct": ["D"],
        "explanation": "Subnet Mask dùng phép toán logic AND với địa chỉ IP để phân định rõ ràng phần mạng (Network ID) và phần máy chủ (Host ID)."
    },
    {
        "id": "eduso_58",
        "number": 58,
        "question": "Khi router nhận được một gói tin, bước đầu tiên nó thực hiện là gì?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Kiểm tra cổng vật lý"},
            {"key": "B", "text": "Xem địa chỉ đích trong tiêu đề IP"},
            {"key": "C", "text": "Giải mã dữ liệu"},
            {"key": "D", "text": "Kiểm tra địa chỉ MAC nguồn"}
        ],
        "correct": ["B"],
        "explanation": "Router kiểm tra Destination IP Address trong IP Header để tra bảng định tuyến và quyết định chặng tiếp theo."
    },
    {
        "id": "eduso_59",
        "number": 59,
        "question": "Một máy tính trong một mạng đang liên lạc với một nhóm máy tính cụ thể. Đây là loại giao tiếp gì?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Broadcast"},
            {"key": "B", "text": "Unicast"},
            {"key": "C", "text": "Anycast"},
            {"key": "D", "text": "Multicast"}
        ],
        "correct": ["D"],
        "explanation": "Giao tiếp từ một nguồn tới một nhóm máy cụ thể là Multicast."
    },
    {
        "id": "eduso_60",
        "number": 60,
        "question": "Dạng biểu diễn “192.168.1.1” thuộc kiểu nào?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "CIDR"},
            {"key": "B", "text": "Thập lục phân"},
            {"key": "C", "text": "Nhị phân"},
            {"key": "D", "text": "Chấm-thập phân"}
        ],
        "correct": ["D"],
        "explanation": "Dạng 4 octet số thập phân phân tách bởi dấu chấm gọi là Dotted-Decimal (Chấm - thập phân)."
    },
    {
        "id": "eduso_61",
        "number": 61,
        "question": "Địa chỉ IPv6 có không gian địa chỉ là:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "2⁶⁴ (= 2^64)"},
            {"key": "B", "text": "2¹²⁸ (= 2^128)"},
            {"key": "C", "text": "2⁹⁶ (= 2^96)"},
            {"key": "D", "text": "2³² (= 2^32)"}
        ],
        "correct": ["B"],
        "explanation": "IPv6 có độ dài 128 bit, cung cấp không gian 2^128 địa chỉ (xấp xỉ 3.4 x 10^38)."
    },
    {
        "id": "eduso_62",
        "number": 62,
        "question": "Giao thức định tuyến được dùng để",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Trao đổi thông tin định tuyến giữa các thiết bị định tuyến trên mạng"},
            {"key": "B", "text": "Kết nối liên mạng"},
            {"key": "C", "text": "Phân giải địa chỉ"},
            {"key": "D", "text": "Trao đổi thông tin chuyển tiếp dữ liệu qua mạng"}
        ],
        "correct": ["A"],
        "explanation": "Giao thức định tuyến (như RIP, OSPF, BGP) được các Router dùng để tự động trao đổi thông tin định tuyến."
    },
    {
        "id": "eduso_63",
        "number": 63,
        "question": "Trong những công việc sau, công việc nào không phải là chức năng của tầng Mạng",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Đặt tên gợi nhớ cho máy tính"},
            {"key": "B", "text": "Tìm đường đi cho các gói tin"},
            {"key": "C", "text": "Giải quyết tắc nghẽn"},
            {"key": "D", "text": "Đánh địa chỉ logic cho máy tính"}
        ],
        "correct": ["A"],
        "explanation": "Đặt tên gợi nhớ là nhiệm vụ của DNS (Tầng Ứng dụng), không phải chức năng của tầng Mạng."
    },
    {
        "id": "eduso_64",
        "number": 64,
        "question": "Khi thực hiện subnetting, phần nào được “mượn” để tạo mạng con?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Bit của phần host"},
            {"key": "B", "text": "Bit của địa chỉ cổng (port)"},
            {"key": "C", "text": "Bit của phần mạng"},
            {"key": "D", "text": "Bit của địa chỉ MAC"}
        ],
        "correct": ["A"],
        "explanation": "Subnetting mượn các bit có trọng số cao nhất của phần máy chủ (Host bits) để gộp vào phần mạng con (Subnet ID)."
    },
    {
        "id": "eduso_65",
        "number": 65,
        "question": "Trong các cách biểu diễn sau, đâu không phải là cách biểu diễn địa chỉ IPv4?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Dạng CIDR"},
            {"key": "B", "text": "Dạng thập lục phân 6 byte"},
            {"key": "C", "text": "Dạng 4 octets"},
            {"key": "D", "text": "Dạng 32 bit"}
        ],
        "correct": ["B"],
        "explanation": "Địa chỉ IPv4 dài 4 byte (32 bit). Dạng thập lục phân 6 byte (48 bit) là địa chỉ MAC, không phải IPv4."
    },
    {
        "id": "eduso_66",
        "number": 66,
        "question": "Thiết bị IPv6 gửi gói dữ liệu có địa chỉ đích là FF02::1. Mục tiêu của gói này là gì?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Tất cả các nút kích hoạt IPv6 trên liên kết cục bộ"},
            {"key": "B", "text": "Tất cả các Router được cấu hình IPv6 trên mạng"},
            {"key": "C", "text": "Tất cả các máy chủ IPv6 DHCP"},
            {"key": "D", "text": "Tất cả các Router được cấu hình IPv6 trên liên kết cục bộ"}
        ],
        "correct": ["A"],
        "explanation": "FF02::1 là All-Nodes Multicast Address dành cho mọi nút kích hoạt IPv6 trong phạm vi link-local."
    },
    {
        "id": "eduso_67",
        "number": 67,
        "question": "Khi router không tìm thấy tuyến đường trong bảng chuyển tiếp, nó sẽ:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Không xử lý"},
            {"key": "B", "text": "Chuyển tiếp ngẫu nhiên"},
            {"key": "C", "text": "Gửi gói theo tuyến mặc định"},
            {"key": "D", "text": "Gửi gói đến tất cả các cổng"}
        ],
        "correct": ["C"],
        "explanation": "Router sẽ chuyển gói theo Tuyến mặc định (Default Route 0.0.0.0/0) nếu có thiết lập. (Nếu không có default route, router mới loại bỏ gói)."
    },
    {
        "id": "eduso_68",
        "number": 68,
        "question": "Khi biểu diễn IPv6 rút gọn, ký hiệu “::” có thể xuất hiện:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Bất kỳ số lần"},
            {"key": "B", "text": "Tối đa 3 lần"},
            {"key": "C", "text": "Tối đa 2 lần"},
            {"key": "D", "text": "Chỉ 1 lần"}
        ],
        "correct": ["D"],
        "explanation": "Dấu hai chấm kép '::' chỉ được dùng DUY NHẤT 1 LẦN trong địa chỉ IPv6 để tránh không thể xác định số khối 0 được rút gọn."
    },
    {
        "id": "eduso_69",
        "number": 69,
        "question": "Địa chỉ IPv6 nào dưới đây thuộc nhóm IPv6 unicast là:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Multicast"},
            {"key": "B", "text": "Loopback"},
            {"key": "C", "text": "Broadcast"},
            {"key": "D", "text": "Anycast"}
        ],
        "correct": ["B"],
        "explanation": "Địa chỉ Loopback (::1/128) được xếp vào phân loại địa chỉ IPv6 Unicast đặc biệt."
    },
    {
        "id": "eduso_70",
        "number": 70,
        "question": "Phần nào là thành phần cố định trong địa chỉ IPv4?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Phần logic"},
            {"key": "B", "text": "Phần mạng"},
            {"key": "C", "text": "Phần host"},
            {"key": "D", "text": "Phần mạng con"}
        ],
        "correct": ["B"],
        "explanation": "Phần mạng (Network portion) là cố định đối với mọi thiết bị nằm trong cùng một mạng."
    },
    {
        "id": "eduso_71",
        "number": 71,
        "question": "Ứng dụng nào sau đây phù hợp nhất với UDP:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Video Conference"},
            {"key": "B", "text": "Thanh toán qua mạng"},
            {"key": "C", "text": "Truyền tải file qua mạng"},
            {"key": "D", "text": "Truyền tải email qua mạng"}
        ],
        "correct": ["A"],
        "explanation": "Video Conference yêu cầu thời gian thực, độ trễ tối thiểu nên sử dụng UDP."
    },
    {
        "id": "eduso_72",
        "number": 72,
        "question": "Một máy khách đã thực hiện yêu cầu HTTP tới trình duyệt web. Số hiệu địa chỉ cổng thông dụng nào được liên kết với địa chỉ đích?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "TCP/443"},
            {"key": "B", "text": "TCP/110"},
            {"key": "C", "text": "TCP/404"},
            {"key": "D", "text": "TCP/80"}
        ],
        "correct": ["D"],
        "explanation": "Dịch vụ HTTP chạy trên cổng đích mặc định TCP/80."
    },
    {
        "id": "eduso_73",
        "number": 73,
        "question": "Loại ứng dụng nào phù hợp nhất để sử dụng UDP?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Các ứng dụng yêu cầu truyền lại các gói bị mất"},
            {"key": "B", "text": "Các ứng dụng nhạy cảm với việc mất gói"},
            {"key": "C", "text": "Các ứng dụng cần phân phối đáng tin cậy"},
            {"key": "D", "text": "Các ứng dụng nhạy cảm với độ trễ"}
        ],
        "correct": ["D"],
        "explanation": "Các ứng dụng truyền thông nhạy cảm với độ trễ (Delay-sensitive như VoIP, video trực tiếp, gaming) phù hợp nhất với UDP."
    },
    {
        "id": "eduso_74",
        "number": 74,
        "question": "Cổng kết nối của giao thức SMTP là",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "TCP/25"},
            {"key": "B", "text": "TCP/26"},
            {"key": "C", "text": "TCP/24"},
            {"key": "D", "text": "TCP/27"}
        ],
        "correct": ["A"],
        "explanation": "SMTP dùng cổng tiêu chuẩn TCP/25."
    },
    {
        "id": "eduso_75",
        "number": 75,
        "question": "Để phát hiện lỗi trong khi truyền segment ở tầng giao vận, người ta sử dụng kỹ thuật:",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Số thứ tự ghi nhận"},
            {"key": "B", "text": "Checksum"},
            {"key": "C", "text": "Bộ định thời"},
            {"key": "D", "text": "Số thứ tự"}
        ],
        "correct": ["B"],
        "explanation": "Kỹ thuật tính Checksum (tổng kiểm tra) được dùng ở tầng giao vận để phát hiện sai lỗi bit."
    },
    {
        "id": "eduso_76",
        "number": 76,
        "question": "Thông số nào được nút nguồn lựa chọn ngẫu nhiên trước khi gửi dữ liệu",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "Địa chỉ IP đích."},
            {"key": "B", "text": "Địa chỉ MAC nguồn."},
            {"key": "C", "text": "Cổng nguồn."},
            {"key": "D", "text": "Địa chỉ cổng mặc định."}
        ],
        "correct": ["C"],
        "explanation": "Cổng nguồn (Source Port) được chọn ngẫu nhiên trong dải Dynamic/Ephemeral ports."
    },
    {
        "id": "eduso_77",
        "number": 77,
        "question": "Trường nào trong tiêu đề TCP được sử dụng để bắt đầu quá trình bắt tay ba bước?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "FIN"},
            {"key": "B", "text": "SYN"},
            {"key": "C", "text": "RST"},
            {"key": "D", "text": "PSH"}
        ],
        "correct": ["B"],
        "explanation": "Cờ SYN (Synchronize) được bật trong segment đầu tiên để yêu cầu thiết lập kết nối TCP."
    },
    {
        "id": "eduso_78",
        "number": 78,
        "question": "Tầng giao vận sử dụng cổng 53 để mô tả giao thức nào?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "DHCP"},
            {"key": "B", "text": "DNS"},
            {"key": "C", "text": "SMTP"},
            {"key": "D", "text": "SNMP"}
        ],
        "correct": ["B"],
        "explanation": "Cổng 53 thuộc về giao thức phân giải tên miền DNS."
    },
    {
        "id": "eduso_79",
        "number": 79,
        "question": "Các tầng nào dưới đây nằm trong mô hình TCP/IP? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "Tầng Application"},
            {"key": "B", "text": "Tầng Internet"},
            {"key": "C", "text": "Tầng Session"},
            {"key": "D", "text": "Tầng Datalink"},
            {"key": "E", "text": "Tầng Presentation"},
            {"key": "F", "text": "Tầng Network Access"}
        ],
        "correct": ["A", "B", "F"],
        "explanation": "Mô hình TCP/IP chuẩn gồm 4 tầng: Application, Transport, Internet, Network Access. Do đó A, B, F là các tầng thuộc TCP/IP."
    },
    {
        "id": "eduso_80",
        "number": 80,
        "question": "Tầng vận chuyển trong mô hình OSI thực hiện chức năng nào dưới đây. (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "Kiểm soát lỗi"},
            {"key": "B", "text": "Kiểm soát luồng dữ liệu"},
            {"key": "C", "text": "Đồng bộ hoá"},
            {"key": "D", "text": "Định tuyến gói tin"},
            {"key": "E", "text": "Định địa chỉ cổng (Port addressing)"},
            {"key": "F", "text": "Kết nối End-to-End"}
        ],
        "correct": ["A", "B", "F"],
        "explanation": "Theo chuẩn đề cương Eduso môn MMT, Tầng vận chuyển thực hiện 3 chức năng chính: Kết nối End-to-End, Kiểm soát lỗi (Error control), và Kiểm soát luồng dữ liệu (Flow control)."
    },
    {
        "id": "eduso_81",
        "number": 81,
        "question": "Những loại nào dưới đây là topology của một mạng LAN? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "Bus"},
            {"key": "B", "text": "Star"},
            {"key": "C", "text": "Tree"},
            {"key": "D", "text": "Ring"},
            {"key": "E", "text": "Mesh"},
            {"key": "F", "text": "Square"}
        ],
        "correct": ["A", "B", "D"],
        "explanation": "3 topology cơ bản kinh điển nhất của mạng LAN là Bus, Star và Ring."
    },
    {
        "id": "eduso_82",
        "number": 82,
        "question": "Một miền quảng bá có tính chất như sau (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "Hub phân tách các miền quảng bá"},
            {"key": "B", "text": "Phạm vi truy cập của các gói Broadcast"},
            {"key": "C", "text": "Bộ định tuyến phân tách các miền quảng bá bằng interface"},
            {"key": "D", "text": "Repeater phân tách được các miền quảng bá"},
            {"key": "E", "text": "Các thiết bị trong cùng một miền quảng bá có thể nhận gói quảng bá"},
            {"key": "F", "text": "Bộ định tuyến không phân tách được miền quảng bá"}
        ],
        "correct": ["B", "C", "E"],
        "explanation": "Miền quảng bá là phạm vi tiếp cận của gói tin Broadcast (B); mọi thiết bị trong cùng miền đều nhận được gói quảng bá (E); Router phân tách các miền quảng bá bằng các interface của nó (C)."
    },
    {
        "id": "eduso_83",
        "number": 83,
        "question": "Những tổ chức nào sau đây tham gia định nghĩa chức năng của tầng liên kết dữ liệu?",
        "type": "single",
        "points": 2,
        "options": [
            {"key": "A", "text": "IEEE"},
            {"key": "B", "text": "IETF"},
            {"key": "C", "text": "ITU-L"},
            {"key": "D", "text": "ANSI"},
            {"key": "E", "text": "ISO"},
            {"key": "F", "text": "W3C"}
        ],
        "correct": ["A"],
        "explanation": "IEEE (Viện Kỹ sư Điện và Điện tử) là tổ chức chủ đạo ban hành các chuẩn định nghĩa tầng Data Link và Physical (như IEEE 802.3, 802.11, 802.1Q...)."
    },
    {
        "id": "eduso_84",
        "number": 84,
        "question": "Dịch vụ nào sau đây mà tầng liên kết dữ liệu phải cung cấp? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "Kiểm soát cách tạo bit"},
            {"key": "B", "text": "Định tuyến gói tin"},
            {"key": "C", "text": "Xác định địa chỉ vật lý"},
            {"key": "D", "text": "Xác định địa chỉ logic"},
            {"key": "E", "text": "Kiểm soát lỗi"},
            {"key": "F", "text": "Tạo khung"}
        ],
        "correct": ["C", "E", "F"],
        "explanation": "3 dịch vụ cốt lõi của Tầng liên kết dữ liệu: Framing (Tạo khung), Physical addressing (Xác định địa chỉ MAC vật lý), Error control (Kiểm soát lỗi CRC)."
    },
    {
        "id": "eduso_85",
        "number": 85,
        "question": "Các loại địa chỉ MAC bao gồm? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "MAC multicast"},
            {"key": "B", "text": "MAC anycast"},
            {"key": "C", "text": "MAC multicasts"},
            {"key": "D", "text": "MAC broadcast"},
            {"key": "E", "text": "MAC unicasts"},
            {"key": "F", "text": "MAC unicast"}
        ],
        "correct": ["A", "D", "F"],
        "explanation": "3 kiểu địa chỉ MAC là: MAC unicast, MAC multicast, và MAC broadcast."
    },
    {
        "id": "eduso_86",
        "number": 86,
        "question": "Giao thức nào dưới đây không phải là giao thức định tuyến (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "SNMP"},
            {"key": "B", "text": "BGP"},
            {"key": "C", "text": "IPv4"},
            {"key": "D", "text": "RIPng"},
            {"key": "E", "text": "IPv6"},
            {"key": "F", "text": "OSPF"}
        ],
        "correct": ["A", "C", "E"],
        "explanation": "SNMP (quản trị mạng), IPv4 và IPv6 (giao thức gói tin) KHÔNG phải giao thức định tuyến. BGP, RIPng, OSPF là giao thức định tuyến."
    },
    {
        "id": "eduso_87",
        "number": 87,
        "question": "Những giao thức nào dưới đây là giao thức định tuyến (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "RIPn"},
            {"key": "B", "text": "SPT"},
            {"key": "C", "text": "IGRP"},
            {"key": "D", "text": "BGP"},
            {"key": "E", "text": "OSPF"},
            {"key": "F", "text": "IGMP"}
        ],
        "correct": ["C", "D", "E"],
        "explanation": "IGRP, BGP, và OSPF là 3 giao thức định tuyến chuẩn."
    },
    {
        "id": "eduso_88",
        "number": 88,
        "question": "Ba mục liên quan trực tiếp đến quá trình gửi gói tin từ thiết bị nguồn? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "Định tuyến lại toàn bộ mạng"},
            {"key": "B", "text": "Gửi đến router gần nhất"},
            {"key": "C", "text": "Tra bảng chuyển tiếp"},
            {"key": "D", "text": "Mã hóa gói tin"},
            {"key": "E", "text": "Xem địa chỉ đích IP"},
            {"key": "F", "text": "Chuyển tiếp gói tin"}
        ],
        "correct": ["B", "C", "E"],
        "explanation": "Tại máy nguồn khi gửi dữ liệu: 1) Xem địa chỉ đích IP (E) để so sánh với subnet mask; 2) Tra bảng định tuyến/chuyển tiếp cục bộ (C); 3) Gửi gói tin đến Default Gateway / router gần nhất nếu khác mạng (B)."
    },
    {
        "id": "eduso_89",
        "number": 89,
        "question": "Các loại địa chỉ IPv6 là (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "MAC"},
            {"key": "B", "text": "Anycast"},
            {"key": "C", "text": "Broadcast"},
            {"key": "D", "text": "Multicast"},
            {"key": "E", "text": "Unicast"},
            {"key": "F", "text": "Physical address"}
        ],
        "correct": ["B", "D", "E"],
        "explanation": "IPv6 gồm 3 kiểu địa chỉ: Unicast (đơn hướng), Multicast (đa hướng), và Anycast (gần nhất). IPv6 không có Broadcast."
    },
    {
        "id": "eduso_90",
        "number": 90,
        "question": "Phát biểu nào dưới đây là đúng khi nói về giao thức UDP (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "Chỉ kiểm soát tốc độ nhận"},
            {"key": "B", "text": "Không kiểm soát tốc độ gửi"},
            {"key": "C", "text": "Duy trì trạng thái kết nối"},
            {"key": "D", "text": "Không duy trì trạng thái kết nối"},
            {"key": "E", "text": "Thiết lập kết nối"},
            {"key": "F", "text": "Không có giai đoạn thiết lập kết nối"}
        ],
        "correct": ["B", "D", "F"],
        "explanation": "Đặc điểm đúng của UDP: Không có giai đoạn thiết lập kết nối (F), Không duy trì trạng thái kết nối (D), và Không kiểm soát tốc độ gửi (B)."
    },
    {
        "id": "eduso_91",
        "number": 91,
        "question": "Ba trường nào sau đây có trong tiêu đề TCP? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "UGR"},
            {"key": "B", "text": "SYN"},
            {"key": "C", "text": "Checksum"},
            {"key": "D", "text": "URG"},
            {"key": "E", "text": "ISN"},
            {"key": "F", "text": "FIN"}
        ],
        "correct": ["B", "D", "F"],
        "explanation": "SYN, FIN, và URG là 3 cờ điều khiển (Control Flags) nằm trong Header của gói TCP."
    },
    {
        "id": "eduso_92",
        "number": 92,
        "question": "Các dịch vụ sử dụng giao thức TCP là (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
            {"key": "A", "text": "SMTP"},
            {"key": "B", "text": "TFTP"},
            {"key": "C", "text": "FTP"},
            {"key": "D", "text": "HTTP"},
            {"key": "E", "text": "DHCP"},
            {"key": "F", "text": "Streaming"}
        ],
        "correct": ["A", "C", "D"],
        "explanation": "SMTP (mail TCP/25), FTP (file TCP/20,21) và HTTP (web TCP/80) sử dụng giao thức TCP."
    },
    {
        "id": "eduso_93",
        "number": 93,
        "question": "Cho địa chỉ IPv4: 182.16.45.200/23. Xác định:\n- Mặt nạ mạng con (dạng chấm thập phân)\n- Địa chỉ mạng",
        "type": "fill",
        "points": 4,
        "correct": ["255.255.254.0; 182.16.44.0/23"],
        "explanation": "• Mặt nạ mạng con /23: 23 bit 1 liên tiếp = 11111111.11111111.11111110.00000000 = 255.255.254.0 (bước nhảy ở octet 3 là 256 - 254 = 2).\n• Địa chỉ mạng: Octet 3 là 45. Vì 45 chia 2 được 22 dư 1 => Địa chỉ mạng bắt đầu tại số chẵn 22 * 2 = 44. Do đó Địa chỉ mạng là 182.16.44.0/23 (dải từ 182.16.44.0 đến 182.16.45.255)."
    },
    {
        "id": "eduso_94",
        "number": 94,
        "question": "Cho địa chỉ IPv4: 162.218.71.190/26. Xác định:\n- Địa chỉ host đầu tiên\n- Địa chỉ host thứ hai",
        "type": "fill",
        "points": 4,
        "correct": ["162.218.71.129/26; 162.218.71.130/26"],
        "explanation": "• Prefix /26: bước nhảy ở octet 4 là 2^(32-26) = 2^6 = 64. Các mạng con gồm: .0, .64, .128, .192. IP 162.218.71.190 nằm trong dải mạng 162.218.71.128/26 (từ .128 đến .191).\n• Địa chỉ host đầu tiên = Network ID + 1 = 162.218.71.129/26.\n• Địa chỉ host thứ hai = Network ID + 2 = 162.218.71.130/26."
    },
    {
        "id": "eduso_95",
        "number": 95,
        "question": "Cho địa chỉ IPv4: 202.131.89.140/23. Xác định:\n- Địa chỉ host cuối\n- Địa chỉ quảng bá",
        "type": "fill",
        "points": 4,
        "correct": ["202.131.89.254/23; 202.131.89.255/23"],
        "explanation": "• Prefix /23: bước nhảy ở octet 3 là 2. Octet 3 là 89 chia 2 = 44 dư 1 => Địa chỉ mạng là 202.131.88.0/23.\n• Dải IP kéo dài từ 202.131.88.0 đến 202.131.89.255.\n• Địa chỉ quảng bá (Broadcast) = 202.131.89.255/23.\n• Địa chỉ host cuối cùng = Broadcast - 1 = 202.131.89.254/23."
    },
    {
        "id": "eduso_96",
        "number": 96,
        "question": "Cho địa chỉ IPv4: 128.192.10.210/23, chia mạng này thành bốn mạng con. Xác định địa chỉ mạng của hai mạng con thứ 2, 3.",
        "type": "fill",
        "points": 4,
        "correct": ["Mạng con 2: 128.192.10.128/25; Mạng con 3: 128.192.11.0/25"],
        "explanation": "• Địa chỉ mạng gốc: 128.192.10.0/23.\n• Chia thành 4 mạng con: mượn 2 bit (2^2 = 4) => Prefix mới = 23 + 2 = /25. Bước nhảy ở octet 4 là 128 (mỗi mạng có 128 IP).\n• 4 mạng con lần lượt:\n  1) 128.192.10.0/25\n  2) 128.192.10.128/25 (Mạng thứ 2)\n  3) 128.192.11.0/25 (Mạng thứ 3)\n  4) 128.192.11.128/25."
    },
    {
        "id": "eduso_97",
        "number": 97,
        "question": "Cho địa chỉ IPv4: 210.145.78.200/24, chia mạng này thành ba mạng con. Xác định địa chỉ mạng của mạng con thứ 1, 3.",
        "type": "fill",
        "points": 4,
        "correct": ["Mạng con 1: 210.145.78.0/26; Mạng con 3: 210.145.78.128/26"],
        "explanation": "• Mạng gốc: 210.145.78.0/24.\n• Cần tạo 3 mạng con => mượn 2 bit (2^2 = 4 >= 3) => Prefix mới = 24 + 2 = /26. Bước nhảy = 64.\n• Các mạng con lần lượt:\n  - Mạng con thứ 1: 210.145.78.0/26\n  - Mạng con thứ 2: 210.145.78.64/26\n  - Mạng con thứ 3: 210.145.78.128/26\n  - Mạng con thứ 4: 210.145.78.192/26."
    },
    {
        "id": "eduso_98",
        "number": 98,
        "question": "Cho địa chỉ IPv4: 101.202.19.140/22, chia mạng này thành năm mạng con. Xác định địa chỉ mạng của hai mạng con thứ 1, 5.",
        "type": "fill",
        "points": 4,
        "correct": ["Mạng con 1: 101.202.16.0/25; Mạng con 5: 101.202.18.0/25"],
        "explanation": "• /22: bước nhảy ở octet 3 là 4. 19 / 4 = 4 dư 3 => Mạng gốc là 101.202.16.0/22.\n• Cần chia 5 mạng con: mượn 3 bit (2^3 = 8 >= 5) => Prefix mới = 22 + 3 = /25. Mỗi mạng con có bước nhảy 128 ở octet 4.\n• Các mạng con lần lượt:\n  - Mạng con thứ 1: 101.202.16.0/25\n  - Mạng con thứ 2: 101.202.16.128/25\n  - Mạng con thứ 3: 101.202.17.0/25\n  - Mạng con thứ 4: 101.202.17.128/25\n  - Mạng con thứ 5: 101.202.18.0/25."
    },
    {
        "id": "eduso_99",
        "number": 99,
        "question": "Cho địa chỉ IPv4: 140.200.205.47/21. Chia mạng này thành các mạng con, đáp ứng nhu cầu cho từng VLAN như sau: “VLAN 1: /27, VLAN 2: /23, VLAN 3: /24, VLAN 4: /26, VLAN 5: /26, VLAN 6: /25”.\nVLAN 3 và 5 được phân vùng địa chỉ nào?",
        "type": "fill",
        "points": 4,
        "correct": ["VLAN 3: 140.200.202.0/24; VLAN 5: 140.200.203.192/26"],
        "explanation": "• Địa chỉ mạng gốc: 140.200.200.0/21 (dải từ 140.200.200.0 đến 140.200.207.255).\n• Áp dụng kỹ thuật VLSM phân bổ từ mạng có nhu cầu lớn nhất đến nhỏ nhất:\n  1. VLAN 2: /23 => 140.200.200.0/23 (chiếm 140.200.200.0 - 140.200.201.255)\n  2. VLAN 3: /24 => 140.200.202.0/24 (chiếm 140.200.202.0 - 140.200.202.255)\n  3. VLAN 6: /25 => 140.200.203.0/25 (chiếm 140.200.203.0 - 140.200.203.127)\n  4. VLAN 4: /26 => 140.200.203.128/26 (chiếm 140.200.203.128 - 140.200.203.191)\n  5. VLAN 5: /26 => 140.200.203.192/26 (chiếm 140.200.203.192 - 140.200.203.255)\n  6. VLAN 1: /27 => 140.200.204.0/27 (chiếm 140.200.204.0 - 140.200.204.31)\n=> Kết quả: VLAN 3 nhận 140.200.202.0/24 và VLAN 5 nhận 140.200.203.192/26."
    },
    {
        "id": "eduso_100",
        "number": 100,
        "question": "Cho một dải địa chỉ IPv6: 2005:C2F:3B8::/48. Chia dải địa chỉ này để cấp cho các mạng LAN (/64). Liệt kê ở dạng nén, hai dải IPv6: dải thứ hai và dải cuối cùng",
        "type": "fill",
        "points": 4,
        "correct": ["Dải thứ 2: 2005:C2F:3B8:1::/64; Dải cuối: 2005:C2F:3B8:FFFF::/64"],
        "explanation": "• Tiền tố mạng gốc là /48: gồm 3 nhóm 16-bit đầu tiên: 2005:C2F:3B8::/48.\n• Chia thành các mạng LAN /64: mượn 16 bit của nhóm thứ 4 (Subnet ID từ 0000 đến FFFF).\n  - Dải mạng LAN thứ 1 (index 0): 2005:C2F:3B8:0::/64 -> nén là 2005:C2F:3B8::/64\n  - Dải mạng LAN thứ 2 (index 1): 2005:C2F:3B8:1::/64\n  - Dải mạng LAN cuối cùng (index FFFF): 2005:C2F:3B8:FFFF::/64."
    }
]

