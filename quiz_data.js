// Dữ liệu ngân hàng câu hỏi trắc nghiệm Mạng máy tính UTC
const QUIZ_DATA = {
  "ch1": {
    "id": "ch1",
    "title": "Chương 1: Tổng quan Mạng máy tính & Internet",
    "subtitle": "Mô hình OSI, TCP/IP, Tầng Vật lý & Môi trường truyền dẫn",
    "docName": "MMT - 02 - Ch01 - Trắc nghiệm chương 1 và đáp án.pdf",
    "badge": "Chương 1",
    "icon": "globe",
    "questions": [
      {
        "id": "ch1_1",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Mạng máy tính là mạng Internet?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Internet là mạng của các mạng (network of networks), kết nối hàng triệu mạng máy tính trên phạm vi toàn cầu. Một mạng máy tính (như mạng LAN gia đình, trường học) chưa chắc đã là mạng Internet."
      },
      {
        "id": "ch1_2",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Thuật ngữ MAN là viết tắt của cụm từ nào?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Metropolitan Area Network"
          },
          {
            "key": "B",
            "text": "Metropolitan Area Networking"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "MAN là viết tắt của Metropolitan Area Network (Mạng đô thị), kết nối trong phạm vi một thành phố hoặc khu đô thị."
      },
      {
        "id": "ch1_3",
        "topic": "Tổng quan về MMT và Internet",
        "question": "LAN là thuật ngữ dùng để chỉ các máy tính kết nối với nhau trong phạm vi hẹp (dạng như trong văn phòng hay toà nhà)",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "LAN (Local Area Network - Mạng cục bộ) kết nối các thiết bị trong phạm vi địa lý hẹp như tòa nhà, văn phòng, trường học."
      },
      {
        "id": "ch1_4",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Mạng Internet được hình thành từ sự kết nối của rất nhiều mạng, nhiều loại mạng khác nhau trên toàn thế giới.",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Mạng Internet là mạng toàn cầu liên kết hàng triệu mạng máy tính khác nhau thông qua bộ giao thức TCP/IP."
      },
      {
        "id": "ch1_5",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Các dạng mạng máy tính có cấu trúc liên kết (dạng như Bus, Star, Ring,…) được phân loại dựa trên hình dạng kết nối các thiết bị?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Topology mạng là cấu trúc hình học hay sơ đồ bố trí kết nối vật lý/logic giữa các thiết bị trên mạng."
      },
      {
        "id": "ch1_6",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Hub là một thiết bị đầu cuối.",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Hub là thiết bị trung gian kết nối mạng (hoạt động ở tầng Vật lý), thiết bị đầu cuối (end device) là PC, máy in, server, smartphone..."
      },
      {
        "id": "ch1_7",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Thuật ngữ LAN (mạng cục bộ) là viết tắt của cụm từ nào?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Local Access Network"
          },
          {
            "key": "B",
            "text": "Local Access Networking"
          },
          {
            "key": "C",
            "text": "Local Area Network"
          },
          {
            "key": "D",
            "text": "Local Area Networking"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "LAN viết tắt của Local Area Network (Mạng cục bộ)."
      },
      {
        "id": "ch1_8",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Sự sắp xếp hình học của các thiết bị trên mạng được gọi là",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Topology"
          },
          {
            "key": "B",
            "text": "Protocols"
          },
          {
            "key": "C",
            "text": "Network"
          },
          {
            "key": "D",
            "text": "Medium"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Network Topology (Cấu trúc hình học mạng) định nghĩa cách các liên kết và các nút trong mạng được bố trí kết nối với nhau."
      },
      {
        "id": "ch1_9",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Thuật ngữ IANA là viết tắt của?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Internet Assigned Numbers Authority"
          },
          {
            "key": "B",
            "text": "Internal Assigned Numbers Authority"
          },
          {
            "key": "C",
            "text": "Internet Associative Numbers Authoritative"
          },
          {
            "key": "D",
            "text": "Internal Associative Numbers Authority"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "IANA (Internet Assigned Numbers Authority) là cơ quan chịu trách nhiệm phân bổ địa chỉ IP, số hiệu cổng, ASN và các tham số giao thức mạng."
      },
      {
        "id": "ch1_10",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Node là một tên khác của",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Link"
          },
          {
            "key": "B",
            "text": "Device"
          },
          {
            "key": "C",
            "text": "Medium"
          },
          {
            "key": "D",
            "text": "Mode"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Trong mạng máy tính, node (nút) là bất kỳ thiết bị mạng hoặc thiết bị đầu cuối nào có thể gửi, nhận hoặc chuyển tiếp thông tin."
      },
      {
        "id": "ch1_11",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Tên của mạng đầu tiên (tiền thân của Internet) là gì?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "ASAPNET"
          },
          {
            "key": "B",
            "text": "ARPANET"
          },
          {
            "key": "C",
            "text": "CNNET"
          },
          {
            "key": "D",
            "text": "NSFNET"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "ARPANET (Advanced Research Projects Agency Network) được phát triển vào cuối những năm 1960 bởi Bộ Quốc phòng Mỹ, là tiền thân của Internet ngày nay."
      },
      {
        "id": "ch1_12",
        "topic": "Tổng quan về MMT và Internet",
        "question": "ISP là chữ viết tắt của?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "International Service Provider"
          },
          {
            "key": "B",
            "text": "International System Provider"
          },
          {
            "key": "C",
            "text": "Internet Service Provider"
          },
          {
            "key": "D",
            "text": "Internetwork System Provider"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "ISP là Internet Service Provider (Nhà cung cấp dịch vụ Internet)."
      },
      {
        "id": "ch1_13",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Tổ chức nào sau đây KHÔNG phải là nhà cung cấp dịch vụ truy cập Internet tại Việt Nam?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Viettel"
          },
          {
            "key": "B",
            "text": "FPT"
          },
          {
            "key": "C",
            "text": "VNPT"
          },
          {
            "key": "D",
            "text": "Vodaphone"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Vodafone là tập đoàn viễn thông đa quốc gia của Anh, không phải nhà mạng cung cấp dịch vụ truy cập Internet trực tiếp tại Việt Nam."
      },
      {
        "id": "ch1_14",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Hai máy tính khác nhau có thể truyền thông với nhau nếu (Chọn phát biểu phù hợp nhất)",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Chúng cài đặt cùng hệ điều hành mạng"
          },
          {
            "key": "B",
            "text": "Chúng cùng tuân thủ theo một mô hình"
          },
          {
            "key": "C",
            "text": "Chúng cùng dùng một bộ giao thức"
          },
          {
            "key": "D",
            "text": "Chúng có phần cứng giống nhau"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Để truyền thông được với nhau, các thiết bị phải tuân thủ cùng một tập hợp các quy tắc giao tiếp, gọi là bộ giao thức (protocol suite như TCP/IP)."
      },
      {
        "id": "ch1_15",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Các kiểu mạng LAN, MAN, WAN, GAN được phân biệt với nhau bởi tiêu chí nào dưới đây?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Khoảng cách địa lý"
          },
          {
            "key": "B",
            "text": "Giao thức truyền thông"
          },
          {
            "key": "C",
            "text": "Thiết bị mạng"
          },
          {
            "key": "D",
            "text": "Đường truyền mạng"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Tiêu chí phân loại chính giữa LAN (cục bộ), MAN (đô thị), WAN (diện rộng), GAN (toàn cầu) là phạm vi khoảng cách địa lý."
      },
      {
        "id": "ch1_16",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Chọn các thành phần bên dưới là các thành phần chính của hệ thống mạng máy tính? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Thiết bị đầu cuối"
          },
          {
            "key": "B",
            "text": "Thiết bị mạng"
          },
          {
            "key": "C",
            "text": "Kết nối"
          },
          {
            "key": "D",
            "text": "Thiết bị làm mát"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Hệ thống mạng máy tính gồm 3 thành phần chính: Thiết bị đầu cuối (End Devices), Thiết bị kết nối mạng (Intermediary Devices), và Môi trường truyền dẫn/kết nối (Media/Connections)."
      },
      {
        "id": "ch1_17",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Kiến trúc mô hình phân cấp 3 lớp truyền thống gồm có lớp nào? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Core"
          },
          {
            "key": "B",
            "text": "Boder"
          },
          {
            "key": "C",
            "text": "Aggregation"
          },
          {
            "key": "D",
            "text": "Access"
          }
        ],
        "correct": [
          "A",
          "C",
          "D"
        ],
        "explanation": "Mô hình mạng phân cấp 3 lớp kinh điển của Cisco gồm: Core layer (Lớp lõi), Distribution/Aggregation layer (Lớp phân phối/gom tụ), và Access layer (Lớp truy cập)."
      },
      {
        "id": "ch1_18",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Kết nối nào dưới đây là loại có dây – Wired (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Ethernet"
          },
          {
            "key": "B",
            "text": "Fiber Optic"
          },
          {
            "key": "C",
            "text": "Copper Cable"
          },
          {
            "key": "D",
            "text": "Satellite"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Ethernet cáp xoắn đôi, Fiber Optic (cáp quang), Copper Cable (cáp đồng) là các đường truyền có dây (Wired). Satellite (vệ tinh) là truyền dẫn không dây (Wireless)."
      },
      {
        "id": "ch1_19",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Những loại nào dưới đây là topology của một mạng LAN? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Square"
          },
          {
            "key": "B",
            "text": "Bus"
          },
          {
            "key": "C",
            "text": "Ring"
          },
          {
            "key": "D",
            "text": "Star"
          }
        ],
        "correct": [
          "B",
          "C",
          "D"
        ],
        "explanation": "Các cấu trúc liên kết mạng LAN tiêu biểu gồm Bus (hình trục), Star (hình sao), Ring (hình vòng) và Mesh (lưới)."
      },
      {
        "id": "ch1_20",
        "topic": "Tổng quan về MMT và Internet",
        "question": "Các chức năng nào dưới đây nằm trong Hệ sinh thái Internet? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Phát triển tiêu chuẩn mở"
          },
          {
            "key": "B",
            "text": "Xây dựng hệ thống năng lực toàn cầu"
          },
          {
            "key": "C",
            "text": "Đặt tên và địa chỉ"
          },
          {
            "key": "D",
            "text": "Dịch vụ và hoạt động chia sẻ toàn cầu"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Hệ sinh thái Internet quản lý phát triển tiêu chuẩn mở (IETF, W3C), gán tên và địa chỉ (ICANN, IANA), xây dựng năng lực và phổ biến hạ tầng toàn cầu."
      },
      {
        "id": "ch1_21",
        "topic": "Mô hình tham chiếu OSI",
        "question": "ISO là từ viết tắt của International Standard Organization?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "ISO là International Organization for Standardization (Tổ chức Tiêu chuẩn hóa Quốc tế), không phải International Standard Organization."
      },
      {
        "id": "ch1_22",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Trong mô hình OSI, tầng Network có thể thông tin trực tiếp với các tầng Datalink và Transport trong cùng một thiết bị",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Trong kiến trúc phân tầng trên cùng một thiết bị, một tầng chỉ trao đổi trực tiếp với tầng kề dưới (Datalink) và tầng kề trên (Transport) của nó."
      },
      {
        "id": "ch1_23",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Mô hình tham chiếu OSI được định nghĩa trong ISO/IEC 7498-1?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Chuẩn ISO/IEC 7498-1 chính là văn bản đặc tả cấu trúc mô hình tham chiếu Open Systems Interconnection (OSI)."
      },
      {
        "id": "ch1_24",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Trong hệ sinh thái Internet, VNNIC là NIR–National Internet Registry của Việt Nam?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "VNNIC (Trung tâm Internet Việt Nam) là Cơ quan Đăng ký Internet Quốc gia (NIR) thuộc APNIC, quản lý tên miền quốc gia .vn và dải địa chỉ IP/ASN tại Việt Nam."
      },
      {
        "id": "ch1_25",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Mô hình OSI có mấy tầng?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "4 tầng"
          },
          {
            "key": "B",
            "text": "5 tầng"
          },
          {
            "key": "C",
            "text": "6 tầng"
          },
          {
            "key": "D",
            "text": "7 tầng"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Mô hình OSI gồm 7 tầng: Vật lý (Physical), Liên kết dữ liệu (Data Link), Mạng (Network), Vận chuyển (Transport), Phiên (Session), Trình diễn (Presentation), Ứng dụng (Application)."
      },
      {
        "id": "ch1_26",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Thuật ngữ ISO là từ viết tắt của",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "International Organize for Standardization"
          },
          {
            "key": "B",
            "text": "International Organization for Standardization (hoặc Organizations)"
          },
          {
            "key": "C",
            "text": "International Organizations for Standard"
          },
          {
            "key": "D",
            "text": "International Organized for Standardization"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "ISO là viết tắt của International Organization for Standardization."
      },
      {
        "id": "ch1_27",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Mô hình OSI được công nhận vào năm nào?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "1980"
          },
          {
            "key": "B",
            "text": "1982"
          },
          {
            "key": "C",
            "text": "1984"
          },
          {
            "key": "D",
            "text": "1986"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Mô hình tham chiếu OSI chính thức được Tổ chức Tiêu chuẩn Quốc tế (ISO) thông qua và công bố vào năm 1984."
      },
      {
        "id": "ch1_28",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Tầng nào trong mô hình OSI làm việc với các tín hiệu điện",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Data Link"
          },
          {
            "key": "B",
            "text": "Network"
          },
          {
            "key": "C",
            "text": "Physical"
          },
          {
            "key": "D",
            "text": "Session"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Tầng Vật lý (Physical Layer) chuyển đổi bit nhị phân thành các tín hiệu vật lý (điện, quang, sóng vô tuyến) để truyền tải trên đường truyền."
      },
      {
        "id": "ch1_29",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Thứ tự (từ trên xuống) của các tầng trong mô hình OSI là?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Application, Presentation, Session, Transport, Data Link, Network, Physical"
          },
          {
            "key": "B",
            "text": "Application, Presentation, Session, Network, Transport, Data Link, Physical"
          },
          {
            "key": "C",
            "text": "Application, Presentation, Session, Transport, Network, Data Link, Physical"
          },
          {
            "key": "D",
            "text": "Application, Presentation, Transport, Session, Data Link, Network, Physical"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Từ trên xuống (Tầng 7 -> Tầng 1): Application (7) -> Presentation (6) -> Session (5) -> Transport (4) -> Network (3) -> Data Link (2) -> Physical (1)."
      },
      {
        "id": "ch1_30",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Chức năng của thiết bị Hub thông thường nằm ở tầng nào trong mô hình OSI?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Tầng 1"
          },
          {
            "key": "B",
            "text": "Tầng 2"
          },
          {
            "key": "C",
            "text": "Tầng 3"
          },
          {
            "key": "D",
            "text": "Tầng 4"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Hub là thiết bị tầng 1 (Physical Layer), chỉ nhận tín hiệu bit điện và lặp lại khuếch đại tín hiệu ra tất cả các cổng khác."
      },
      {
        "id": "ch1_31",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Chức năng của thiết bị Switch thông thường nằm ở tầng nào trong mô hình OSI?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Tầng 1"
          },
          {
            "key": "B",
            "text": "Tầng 2"
          },
          {
            "key": "C",
            "text": "Tầng 3"
          },
          {
            "key": "D",
            "text": "Tầng 4"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Switch truyền thống hoạt động ở Tầng 2 (Data Link Layer), đọc và chuyển tiếp dữ liệu dựa trên địa chỉ MAC."
      },
      {
        "id": "ch1_32",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Các tầng nào dưới đây nằm trong mô hình tham chiếu OSI. (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Tầng Data Link"
          },
          {
            "key": "B",
            "text": "Tầng Application"
          },
          {
            "key": "C",
            "text": "Tầng Internet"
          },
          {
            "key": "D",
            "text": "Tầng Session"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
        "explanation": "Data Link, Application, Session thuộc mô hình OSI. Tầng Internet thuộc mô hình TCP/IP."
      },
      {
        "id": "ch1_33",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Tầng vận chuyển trong mô hình OSI thực hiện chức năng nào dưới đây. (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Kết nối End-to-End"
          },
          {
            "key": "B",
            "text": "Kiểm soát lỗi"
          },
          {
            "key": "C",
            "text": "Đồng bộ hoá"
          },
          {
            "key": "D",
            "text": "Kiểm soát luồng dữ liệu"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
        "explanation": "Tầng Transport đảm bảo kết nối đầu cuối (End-to-End), kiểm soát luồng (flow control) và kiểm soát lỗi (error recovery)."
      },
      {
        "id": "ch1_34",
        "topic": "Mô hình tham chiếu OSI",
        "question": "Các tầng nào dưới đây trong mô hình OSI KHÔNG thực hiện việc tạo khung? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Tầng Ứng dụng"
          },
          {
            "key": "B",
            "text": "Tầng Phiên"
          },
          {
            "key": "C",
            "text": "Tầng Mạng"
          },
          {
            "key": "D",
            "text": "Tầng Liên kết"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Việc đóng khung (framing) là chức năng đặc trưng DUY NHẤT của Tầng Liên kết dữ liệu (Data Link Layer). Các tầng khác không tạo khung."
      },
      {
        "id": "ch1_35",
        "topic": "Mô hình TCP/IP",
        "question": "Trong mô hình TCP/IP, nó chia hoạt động truyền thông mạng thành 7 tầng",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Mô hình TCP/IP chuẩn gồm 4 tầng (hoặc 5 tầng theo mô hình cải biên), mô hình OSI mới có 7 tầng."
      },
      {
        "id": "ch1_36",
        "topic": "Mô hình TCP/IP",
        "question": "Trong mô hình TCP/IP, Data là đơn vị dữ liệu giao thức tầng Ứng dụng.",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Đơn vị dữ liệu (PDU) ở tầng Ứng dụng là Data/Message."
      },
      {
        "id": "ch1_37",
        "topic": "Mô hình TCP/IP",
        "question": "Quá trình mở gói trong mô hình TCP/IP là quá trình loại bỏ thông tin bổ sung khi nó chuyển lên lớp trên.",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Quá trình mở gói (Decapsulation) diễn ra ở bên nhận: mỗi tầng bóc tách header của mình và chuyển dữ liệu lên tầng kề trên."
      },
      {
        "id": "ch1_38",
        "topic": "Mô hình TCP/IP",
        "question": "Thứ tự (từ trên xuống) của các tầng trong mô hình TCP/IP là?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Application – Internet – Transport – Network Access"
          },
          {
            "key": "B",
            "text": "Internet – Network Access – Transport – Application"
          },
          {
            "key": "C",
            "text": "Transport – Internet – Network Access – Application"
          },
          {
            "key": "D",
            "text": "Application – Transport – Internet – Network Access"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Thứ tự 4 tầng TCP/IP chuẩn từ trên xuống: Application -> Transport -> Internet -> Network Access."
      },
      {
        "id": "ch1_39",
        "topic": "Mô hình TCP/IP",
        "question": "Mô hình TCP/IP tương đương có mấy lớp?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "4"
          },
          {
            "key": "B",
            "text": "5"
          },
          {
            "key": "C",
            "text": "6"
          },
          {
            "key": "D",
            "text": "7"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Mô hình TCP/IP tương đương (hybrid/5-layer model) thường dùng trong giảng dạy có 5 lớp: Ứng dụng, Vận chuyển, Mạng (Network), Liên kết dữ liệu (Data Link), Vật lý (Physical)."
      },
      {
        "id": "ch1_40",
        "topic": "Mô hình TCP/IP",
        "question": "Thứ tự (từ trên xuống) của các lớp trong mô hình TCP/IP là?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Lớp ứng dụng - Lớp vận chuyển - Lớp liên kết dữ liệu - Lớp Network - Lớp vật lý"
          },
          {
            "key": "B",
            "text": "Lớp ứng dụng - Lớp Network - Lớp vận chuyển - Lớp liên kết dữ liệu - Lớp vật lý"
          },
          {
            "key": "C",
            "text": "Lớp ứng dụng - Lớp vận chuyển - Lớp Network - Lớp liên kết dữ liệu - Lớp vật lý"
          },
          {
            "key": "D",
            "text": "Lớp ứng dụng - Lớp liên kết dữ liệu - Lớp Network - Lớp vận chuyển - Lớp vật lý"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Thứ tự 5 lớp chuẩn: Ứng dụng -> Vận chuyển -> Network -> Liên kết dữ liệu -> Vật lý."
      },
      {
        "id": "ch1_41",
        "topic": "Mô hình TCP/IP",
        "question": "Thứ tự đúng của các đơn vị dữ liệu trong mô hình TCP/IP tương đương là?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Data, Frame, Segment, Packet, Bit"
          },
          {
            "key": "B",
            "text": "Data, Segment, Frame, Packet, Bit"
          },
          {
            "key": "C",
            "text": "Data, Packet, Frame, Segment, Bit"
          },
          {
            "key": "D",
            "text": "Data, Segment, Packet, Frame, Bit"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Đơn vị dữ liệu (PDU) từ tầng cao xuống thấp: Application (Data) -> Transport (Segment) -> Network (Packet) -> Data Link (Frame) -> Physical (Bit)."
      },
      {
        "id": "ch1_42",
        "topic": "Mô hình TCP/IP",
        "question": "Giao thức nào dưới đây nằm ở tầng Internet trong mô hình TCP/IP",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "SLAAC"
          },
          {
            "key": "B",
            "text": "TFTP"
          },
          {
            "key": "C",
            "text": "OSPF"
          },
          {
            "key": "D",
            "text": "UDP"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "OSPF (Open Shortest Path First) là giao thức định tuyến hoạt động trực tiếp trên nền IP tại tầng Internet/Network (IP protocol 89)."
      },
      {
        "id": "ch1_43",
        "topic": "Mô hình TCP/IP",
        "question": "Giao thức nào dưới đây dùng cho ứng dụng, dịch vụ Web",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "DNS"
          },
          {
            "key": "B",
            "text": "DHCP"
          },
          {
            "key": "C",
            "text": "SFTP"
          },
          {
            "key": "D",
            "text": "REST"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "REST (Representational State Transfer) là kiến trúc dịch vụ Web phổ biến dùng trên nền giao thức HTTP."
      },
      {
        "id": "ch1_44",
        "topic": "Mô hình TCP/IP",
        "question": "Đơn vị dữ liệu giao thức (PDU) của tầng Giao vận là",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Data"
          },
          {
            "key": "B",
            "text": "Bits"
          },
          {
            "key": "C",
            "text": "Segment"
          },
          {
            "key": "D",
            "text": "Packet"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "PDU của Tầng Giao vận (Transport Layer) là Segment (đối với TCP) hoặc Datagram (đối với UDP)."
      },
      {
        "id": "ch1_45",
        "topic": "Mô hình TCP/IP",
        "question": "Giao thức nào dưới đây dùng cho ứng dụng Email",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "POP3"
          },
          {
            "key": "B",
            "text": "Frame Relay"
          },
          {
            "key": "C",
            "text": "ARP"
          },
          {
            "key": "D",
            "text": "ATM"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "POP3 (Post Office Protocol version 3) cùng với SMTP và IMAP là các giao thức chính phục vụ nhận/gửi Email."
      },
      {
        "id": "ch1_46",
        "topic": "Mô hình TCP/IP",
        "question": "Để đảm bảo dữ liệu được gửi tới đúng đích, việc xác định địa chỉ dữ liệu được thực hiện ở ba lớp nào dưới đây trong mô hình TCP/IP? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Lớp liên kết dữ liệu"
          },
          {
            "key": "B",
            "text": "Lớp Internet"
          },
          {
            "key": "C",
            "text": "Lớp Giao vận"
          },
          {
            "key": "D",
            "text": "Lớp Ứng dụng"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Địa chỉ vật lý MAC ở Lớp liên kết dữ liệu, Địa chỉ logic IP ở Lớp Internet, và Địa chỉ cổng (Port) xác định tiến trình ở Lớp Giao vận."
      },
      {
        "id": "ch1_47",
        "topic": "Mô hình TCP/IP",
        "question": "Các tầng nào dưới đây nằm trong mô hình TCP/IP? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Tầng Internet"
          },
          {
            "key": "B",
            "text": "Tầng Network Access"
          },
          {
            "key": "C",
            "text": "Tầng Datalink"
          },
          {
            "key": "D",
            "text": "Tầng Application"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
        "explanation": "Mô hình TCP/IP 4 tầng gồm Application, Transport, Internet, Network Access."
      },
      {
        "id": "ch1_48",
        "topic": "Mô hình TCP/IP",
        "question": "Giao thức nào dưới đây nằm ở tầng Ứng dụng trong mô hình TCP/IP? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "RIP"
          },
          {
            "key": "B",
            "text": "HTTP"
          },
          {
            "key": "C",
            "text": "TFTP"
          },
          {
            "key": "D",
            "text": "NAT"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "HTTP (Web), TFTP (truyền file đơn giản qua UDP 69) và RIP (Routing Information Protocol chạy trên UDP 520) đều nằm ở tầng Ứng dụng. NAT là kỹ thuật tầng mạng."
      },
      {
        "id": "ch1_49",
        "topic": "Mô hình TCP/IP",
        "question": "Giao thức nào dưới đây KHÔNG nằm ở tầng Vận chuyển trong mô hình TCP/IP? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "DNS"
          },
          {
            "key": "B",
            "text": "DHCP"
          },
          {
            "key": "C",
            "text": "SMTP"
          },
          {
            "key": "D",
            "text": "TCP"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "DNS, DHCP, SMTP là các giao thức thuộc tầng Ứng dụng (Application layer). Chỉ có TCP thuộc tầng Vận chuyển."
      },
      {
        "id": "ch1_50",
        "topic": "Tầng vật lý",
        "question": "Chuyển đổi khung thành tín hiệu (quang, điện hoặc điện từ) dựa trên môi trường truyền là một trong những chức năng của tầng Vật lý?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Tầng vật lý nhận chuỗi bit từ tầng liên kết và điều chế/chuyển thành tín hiệu vật lý để truyền qua môi trường."
      },
      {
        "id": "ch1_51",
        "topic": "Tầng vật lý",
        "question": "Coaxial là một loại cáp dùng trong truyền thông mạng máy tính",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Cáp đồng trục (Coaxial Cable) được dùng rộng rãi trong truyền hình cáp và các chuẩn mạng Ethernet sơ khai (10BASE2, 10BASE5)."
      },
      {
        "id": "ch1_52",
        "topic": "Tầng vật lý",
        "question": "Cáp đồng trục trong tầng vật lý của mô hình truyền thông có hai loại",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Cáp đồng trục gồm 2 loại chính: Thicknet (10BASE5 - cáp dày) và Thinnet (10BASE2 - cáp mỏng)."
      },
      {
        "id": "ch1_53",
        "topic": "Tầng vật lý",
        "question": "Cáp xoắn có vỏ bọc chống nhiễu là UTP?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "UTP là Unshielded Twisted Pair (cáp không có vỏ bọc chống nhiễu). Cáp có vỏ bọc chống nhiễu là STP (Shielded Twisted Pair)."
      },
      {
        "id": "ch1_54",
        "topic": "Tầng vật lý",
        "question": "https://i-speed.vn là một link truy cập công cụ đo kiểm chất lượng mạng?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "i-Speed là ứng dụng đo tốc độ truy cập Internet tại Việt Nam do VNNIC (Bộ TT&TT) phát triển."
      },
      {
        "id": "ch1_55",
        "topic": "Tầng vật lý",
        "question": "Thông lượng (throughput) là",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Tốc độ truyền dữ liệu trên đường truyền"
          },
          {
            "key": "B",
            "text": "Độ đo phạm vi tần số mà đường truyền có thể đáp ứng được"
          },
          {
            "key": "C",
            "text": "Độ đo sự yếu đi của tín hiệu trên đường truyền"
          },
          {
            "key": "D",
            "text": "Độ đo sự ảnh hưởng của tiếng ồn điện từ bên ngoài đến tín hiệu đường truyền"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Throughput (Thông lượng) là lượng dữ liệu thực tế truyền thành công qua một liên kết mạng trong một đơn vị thời gian."
      },
      {
        "id": "ch1_56",
        "topic": "Tầng vật lý",
        "question": "Phương thức giao tiếp trong đó việc truyền dữ liệu diễn ra theo cả hai hướng nhưng tại một thời điểm chỉ có một hướng được truyền dữ liệu, gọi là",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Simplex"
          },
          {
            "key": "B",
            "text": "Four-wire circuit"
          },
          {
            "key": "C",
            "text": "Half-duplex"
          },
          {
            "key": "D",
            "text": "Full duplex"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Half-duplex (Bán song công): dữ liệu truyền theo cả 2 chiều nhưng tại mỗi thời điểm chỉ có 1 chiều (như bộ đàm). Full-duplex truyền đồng thời cả hai chiều."
      },
      {
        "id": "ch1_57",
        "topic": "Tầng vật lý",
        "question": "Tốc độ truyền dữ liệu tối đa của kết nối Gigabit Ethernet là bao nhiêu?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "10 Mbps"
          },
          {
            "key": "B",
            "text": "100 Mbps"
          },
          {
            "key": "C",
            "text": "1 Gbps"
          },
          {
            "key": "D",
            "text": "10 Gbps"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Gigabit Ethernet có tốc độ thiết kế danh định là 1 Gbps (1000 Mbps)."
      },
      {
        "id": "ch1_58",
        "topic": "Tầng vật lý",
        "question": "Các loại cáp nào dưới đây là cáp đồng trục dùng ở tầng vật lý trong mô hình truyền thông?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Bignet và Smallnet"
          },
          {
            "key": "B",
            "text": "Thicknet và Thinnet"
          },
          {
            "key": "C",
            "text": "Bignet và Thicknet"
          },
          {
            "key": "D",
            "text": "Thinnet và Smallnet"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Cáp đồng trục gồm Thicknet (10BASE5) và Thinnet (10BASE2)."
      },
      {
        "id": "ch1_59",
        "topic": "Tầng vật lý",
        "question": "Loại cáp nào dưới đây là cáp quang dùng ở tầng vật lý trong mô hình truyền thông?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Multi-Mode"
          },
          {
            "key": "B",
            "text": "Private-Mode"
          },
          {
            "key": "C",
            "text": "Privileged-Mode"
          },
          {
            "key": "D",
            "text": "Public-Mode"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Cáp sợi quang gồm 2 loại: Single-Mode Fiber (SMF) và Multi-Mode Fiber (MMF)."
      },
      {
        "id": "ch1_60",
        "topic": "Tầng vật lý",
        "question": "Thuật ngữ IEEE là từ viết tắt của",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Institute of Electrical and Electronics Engineers"
          },
          {
            "key": "B",
            "text": "Institute for Electrical and Electronic Engineer"
          },
          {
            "key": "C",
            "text": "Institute for Electrical and Electronic Engineering"
          },
          {
            "key": "D",
            "text": "Institute for Electrical and Electronic Engineeres"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "IEEE là Institute of Electrical and Electronics Engineers (Viện Kỹ sư Điện và Điện tử)."
      },
      {
        "id": "ch1_61",
        "topic": "Tầng vật lý",
        "question": "Cáp xoắn có vỏ bọc chống nhiễu (STP) là",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Shield Twisted Pair"
          },
          {
            "key": "B",
            "text": "Shielded Twist Pair"
          },
          {
            "key": "C",
            "text": "Shield Twist Pair"
          },
          {
            "key": "D",
            "text": "Shielded Twisted Pair"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "STP viết tắt của Shielded Twisted Pair."
      },
      {
        "id": "ch1_62",
        "topic": "Tầng vật lý",
        "question": "Chuẩn nào dưới đây KHÔNG phải là một loại chuẩn cáp mạng?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Category 5"
          },
          {
            "key": "B",
            "text": "Category 6"
          },
          {
            "key": "C",
            "text": "Category 7"
          },
          {
            "key": "D",
            "text": "Category 11"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Các chuẩn cáp xoắn mạng xoắn đôi phổ biến là Cat5, Cat5e, Cat6, Cat6a, Cat7, Cat8. Không tồn tại chuẩn Category 11."
      },
      {
        "id": "ch1_63",
        "topic": "Tầng vật lý",
        "question": "Loại kết nối nào dưới đây là kết nối không dây tầm xa?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "ZigBee"
          },
          {
            "key": "B",
            "text": "Satellite"
          },
          {
            "key": "C",
            "text": "RFID"
          },
          {
            "key": "D",
            "text": "WiMax"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Vệ tinh (Satellite) là phương thức kết nối vô tuyến cự ly cực xa (hàng ngàn km từ quỹ đạo không gian)."
      },
      {
        "id": "ch1_64",
        "topic": "Tầng vật lý",
        "question": "Tầng Vật Lý (Physical Layer) làm nhiệm vụ nào dưới đây. (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Truyền luồng bit qua môi trường vật lý."
          },
          {
            "key": "B",
            "text": "Tiêu chuẩn hoá các chức năng tầng vật lý như cáp, volt, giao diện"
          },
          {
            "key": "C",
            "text": "Chỉ truyền đi các tín hiệu điện từ qua các dây cáp mạng."
          },
          {
            "key": "D",
            "text": "Việc truyền dữ liệu được thực hiện bởi hệ thống có dây hoặc không dây"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
        "explanation": "Tầng Vật lý truyền luồng bit qua đường truyền (cả có dây và không dây), định nghĩa tiêu chuẩn cơ, điện, quang học (cáp, chân cắm, mức điện áp)."
      },
      {
        "id": "ch1_65",
        "topic": "Tầng vật lý",
        "question": "Loại kết nối nào dưới đây là kết nối không dây tầm ngắn? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "RFID"
          },
          {
            "key": "B",
            "text": "Wifi"
          },
          {
            "key": "C",
            "text": "Bluetooth"
          },
          {
            "key": "D",
            "text": "ZigBee"
          }
        ],
        "correct": [
          "A",
          "C",
          "D"
        ],
        "explanation": "RFID, Bluetooth và ZigBee là các công nghệ WPAN / trường gần phục vụ kết nối thiết bị cự ly ngắn (vài cm đến dưới 10-20m)."
      },
      {
        "id": "ch1_66",
        "topic": "Tầng vật lý",
        "question": "Các yếu tố nào dưới đây ảnh hưởng tới tốc độ truyền luồng bits? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Mã hóa"
          },
          {
            "key": "B",
            "text": "Suy hao"
          },
          {
            "key": "C",
            "text": "Băng thông"
          },
          {
            "key": "D",
            "text": "Khung"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Băng thông (Bandwidth), phương pháp mã hóa tín hiệu (Encoding) và độ suy hao tín hiệu (Attenuation/Noise) ảnh hưởng trực tiếp đến tốc độ truyền bit ở tầng vật lý. Khung (Frame) thuộc tầng liên kết dữ liệu."
      }
    ]
  },
  "ch2": {
    "id": "ch2",
    "title": "Chương 2: Chuyển mạch Ethernet & VLAN",
    "subtitle": "Tầng Data Link, Giao thức CSMA/CD, Switch, VLAN & Trunking",
    "docName": "MMT - 07 - Ch02 - Trắc nghiệm chương 2 và đáp án.pdf",
    "badge": "Chương 2",
    "icon": "layers",
    "questions": [
      {
        "id": "ch2_1",
        "topic": "Tầng liên kết dữ liệu",
        "question": "Một trong những chức năng của tầng liên kết dữ liệu là phát hiện lỗi.",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Phân tích dữ liệu"
          },
          {
            "key": "B",
            "text": "Lọc dữ liệu"
          },
          {
            "key": "C",
            "text": "Nén dữ liệu"
          },
          {
            "key": "D",
            "text": "Đóng gói dữ liệu"
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "Mbs"
          },
          {
            "key": "B",
            "text": "Segment"
          },
          {
            "key": "C",
            "text": "Frame"
          },
          {
            "key": "D",
            "text": "Bits"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Physical"
          },
          {
            "key": "B",
            "text": "Network"
          },
          {
            "key": "C",
            "text": "Data Link"
          },
          {
            "key": "D",
            "text": "Transport"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Physical"
          },
          {
            "key": "B",
            "text": "Data Link"
          },
          {
            "key": "C",
            "text": "Network"
          },
          {
            "key": "D",
            "text": "Transport"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Physical"
          },
          {
            "key": "B",
            "text": "Data link"
          },
          {
            "key": "C",
            "text": "Network"
          },
          {
            "key": "D",
            "text": "Transport"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Tạo khung"
          },
          {
            "key": "B",
            "text": "Xác định địa chỉ vật lý"
          },
          {
            "key": "C",
            "text": "Kiểm soát lỗi"
          },
          {
            "key": "D",
            "text": "Xác định địa chỉ logic"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "IP"
          },
          {
            "key": "B",
            "text": "Ethernet"
          },
          {
            "key": "C",
            "text": "Token ring"
          },
          {
            "key": "D",
            "text": "PPP"
          }
        ],
        "correct": [
          "B",
          "C",
          "D"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Địa chỉ MAC được thực hiện bằng phần mềm."
          },
          {
            "key": "B",
            "text": "NIC chỉ cần địa chỉ MAC nếu được kết nối với mạng WAN."
          },
          {
            "key": "C",
            "text": "Ba bytes cuối trong địa chỉ MAC được gán bởi nhà sản xuất thiết bị."
          },
          {
            "key": "D",
            "text": "ISO chịu trách nhiệm về các quy định về địa chỉ MAC."
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "CSMA"
          },
          {
            "key": "B",
            "text": "ALOHA"
          },
          {
            "key": "C",
            "text": "CSMA/CD"
          },
          {
            "key": "D",
            "text": "TDMA"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Collision Sense Multiple Access / Collision Detection"
          },
          {
            "key": "B",
            "text": "Carrier Sense Multiple Access / Carrier Detection"
          },
          {
            "key": "C",
            "text": "Carrier Sense Multiple Access / Collision Detection"
          },
          {
            "key": "D",
            "text": "Collision Sense Multiple Access / Carrier Detection"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Địa chỉ IP"
          },
          {
            "key": "B",
            "text": "Địa chỉ port"
          },
          {
            "key": "C",
            "text": "Địa chỉ MAC"
          },
          {
            "key": "D",
            "text": "Địa chỉ dịch vụ"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "IEEE 802.2"
          },
          {
            "key": "B",
            "text": "IEEE 802.3"
          },
          {
            "key": "C",
            "text": "Token Bus"
          },
          {
            "key": "D",
            "text": "Token Ring"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Được gắn trên card mạng (NIC)"
          },
          {
            "key": "B",
            "text": "Do người quản trị mạng khai báo"
          },
          {
            "key": "C",
            "text": "Được gán trong quá trình thiết bị khởi động"
          },
          {
            "key": "D",
            "text": "Được gán trong quá trình thiết bị truyền thông tin"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Token Ring"
          },
          {
            "key": "B",
            "text": "FDDI"
          },
          {
            "key": "C",
            "text": "Ethernet"
          },
          {
            "key": "D",
            "text": "ADSL"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Logical Link Control"
          },
          {
            "key": "B",
            "text": "Link Logical Control"
          },
          {
            "key": "C",
            "text": "Logical Link Computer"
          },
          {
            "key": "D",
            "text": "Lan Logical Control"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "MAC sources"
          },
          {
            "key": "B",
            "text": "MAC Gateway"
          },
          {
            "key": "C",
            "text": "MAC destination"
          },
          {
            "key": "D",
            "text": "MAC Default"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
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
          {
            "key": "A",
            "text": "MAC unicast"
          },
          {
            "key": "B",
            "text": "MAC multicast"
          },
          {
            "key": "C",
            "text": "MAC broadcast"
          },
          {
            "key": "D",
            "text": "MAC anycast"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Cổng dynamic và Well-known"
          },
          {
            "key": "B",
            "text": "Cổng access và Well-known"
          },
          {
            "key": "C",
            "text": "Cổng trunk và Well-known"
          },
          {
            "key": "D",
            "text": "Cổng access và trunk"
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "Tầng 1"
          },
          {
            "key": "B",
            "text": "Tầng 2"
          },
          {
            "key": "C",
            "text": "Tầng 3"
          },
          {
            "key": "D",
            "text": "Tầng 4"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Repeaters"
          },
          {
            "key": "B",
            "text": "Hubs"
          },
          {
            "key": "C",
            "text": "Switches"
          },
          {
            "key": "D",
            "text": "Card mạng (NIC)"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Địa chỉ IP nguồn"
          },
          {
            "key": "B",
            "text": "Địa chỉ MAC nguồn"
          },
          {
            "key": "C",
            "text": "Địa chỉ IP đích"
          },
          {
            "key": "D",
            "text": "Địa chỉ MAC đích"
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "Repeaters"
          },
          {
            "key": "B",
            "text": "Hubs"
          },
          {
            "key": "C",
            "text": "Switches"
          },
          {
            "key": "D",
            "text": "Card mạng (NIC)"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
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
          {
            "key": "A",
            "text": "Phạm vi truy cập của các gói Broadcast"
          },
          {
            "key": "B",
            "text": "Các thiết bị trong cùng một miền quảng bá có thể nhận gói quảng bá"
          },
          {
            "key": "C",
            "text": "Bộ định tuyến phân tách các miền quảng bá bằng interface"
          },
          {
            "key": "D",
            "text": "Bộ định tuyến không phân tách được miền quảng bá"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "Flooding"
          },
          {
            "key": "B",
            "text": "Saving"
          },
          {
            "key": "C",
            "text": "Forwarding"
          },
          {
            "key": "D",
            "text": "Discarding"
          }
        ],
        "correct": [
          "A",
          "C",
          "D"
        ],
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
          {
            "key": "A",
            "text": "Xoá bỏ dữ liệu lỗi"
          },
          {
            "key": "B",
            "text": "Học địa chỉ"
          },
          {
            "key": "C",
            "text": "Quyết định chuyển tiếp/lọc khung"
          },
          {
            "key": "D",
            "text": "Tránh Loop"
          }
        ],
        "correct": [
          "B",
          "C",
          "D"
        ],
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
          {
            "key": "A",
            "text": "FastEthernet"
          },
          {
            "key": "B",
            "text": "GigabitEthernet"
          },
          {
            "key": "C",
            "text": "Ten Gigabit Ethernet"
          },
          {
            "key": "D",
            "text": "Console Ethernet"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "3 collisions / 1 port"
          },
          {
            "key": "B",
            "text": "2 collisions / 1port"
          },
          {
            "key": "C",
            "text": "1 collision / 1port"
          },
          {
            "key": "D",
            "text": "4 collisions / 1 port"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Miền tự trị"
          },
          {
            "key": "B",
            "text": "Miền quảng bá"
          },
          {
            "key": "C",
            "text": "Miền vật lý"
          },
          {
            "key": "D",
            "text": "Miền va chạm"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Các thiết bị trong các VLAN đều nhìn thấy frame."
          },
          {
            "key": "B",
            "text": "Các thiết bị trong VLAN 20 và VLAN quản lý sẽ nhìn thấy frame."
          },
          {
            "key": "C",
            "text": "Chỉ các thiết bị trong VLAN 20 mới nhìn thấy frame."
          },
          {
            "key": "D",
            "text": "Chỉ những thiết bị được kết nối với bộ chuyển mạch cục bộ mới nhìn thấy frame."
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "VLAN 1"
          },
          {
            "key": "B",
            "text": "VLAN 2"
          },
          {
            "key": "C",
            "text": "VLAN 3"
          },
          {
            "key": "D",
            "text": "VLAN 4"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Tăng cường bảo mật"
          },
          {
            "key": "B",
            "text": "Giảm chi phí, tăng hiệu suất"
          },
          {
            "key": "C",
            "text": "Dễ quản lý"
          },
          {
            "key": "D",
            "text": "Giảm độ trễ xử lý frame và bits"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "1-1001"
          },
          {
            "key": "B",
            "text": "1002-1005"
          },
          {
            "key": "C",
            "text": "1006-4094"
          },
          {
            "key": "D",
            "text": "4095-5095"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "Switch sẽ chuyển frame đến địa chỉ default gateway"
          },
          {
            "key": "B",
            "text": "Switch sẽ chuyển frame đến cổng gần nhất"
          },
          {
            "key": "C",
            "text": "Switch sẽ hủy bỏ frame này"
          },
          {
            "key": "D",
            "text": "Switch sẽ chuyển tiếp frame đến các cổng của Switch trừ cổng nhận frame vào"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Khi MAC đích chưa có trong bảng CAM, Switch sẽ Flood (chuyển tiếp khung ra tất cả các cổng trong cùng VLAN trừ cổng nhận vào - đây là câu D ĐÚNG). Do đó 3 phát biểu SAI là A, B, C."
      }
    ]
  },
  "ch3": {
    "id": "ch3",
    "title": "Chương 3: Tầng Mạng & Định tuyến",
    "subtitle": "Giao thức IP (IPv4, IPv6), Giao thức định tuyến OSPF/BGP/RIP & Chia subnet",
    "docName": "MMT - 09 - Ch03 - Trắc nghiệm chương 3 và đáp án.pdf",
    "badge": "Chương 3",
    "icon": "git-commit",
    "questions": [
      {
        "id": "ch3_1",
        "topic": "Tầng mạng",
        "question": "Lớp mạng cho phép kết nối các thiết bị với nhau",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Lớp mạng (Network Layer) chịu trách nhiệm kết nối và truyền dữ liệu giữa các thiết bị đầu cuối trên các mạng khác nhau (liên mạng - internetworking)."
      },
      {
        "id": "ch3_2",
        "topic": "Tầng mạng",
        "question": "Định tuyến là một trong bốn hoạt động cơ bản của tầng mạng:",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "4 hoạt động cơ bản của tầng mạng gồm: Đánh địa chỉ thiết bị đầu cuối (Addressing), Đóng gói (Encapsulation), Định tuyến (Routing), và Mở gói (Decapsulation)."
      },
      {
        "id": "ch3_3",
        "topic": "Tầng mạng",
        "question": "IPv6 là một giao thức nằm ở tầng Internet",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "IPv6 cùng với IPv4 là các giao thức cốt lõi hoạt động ở tầng Internet (trong mô hình TCP/IP) hay tầng Network (trong OSI)."
      },
      {
        "id": "ch3_4",
        "topic": "Tầng mạng",
        "question": "Đặc điểm của lớp mạng là chuyển dữ liệu thành dạng tín hiệu để truyền qua mạng",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Chuyển dữ liệu thành dạng tín hiệu vật lý (điện, quang, sóng) là chức năng của Tầng Vật lý (Physical Layer), không phải lớp mạng."
      },
      {
        "id": "ch3_5",
        "topic": "Tầng mạng",
        "question": "Chuyển tiếp không phải là một trong những hoạt động cơ bản của lớp mạng",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Chuyển tiếp (Forwarding - chuyển gói tin từ interface đầu vào sang interface đầu ra thích hợp) là một trong những hoạt động cơ bản cốt lõi nhất của tầng mạng."
      },
      {
        "id": "ch3_6",
        "topic": "Tầng mạng",
        "question": "IPX không phải là một giao thức kết nối mạng",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "IPX (Internetwork Packet Exchange của Novell NetWare) CHÍNH LÀ một giao thức mạng tầng 3 kinh điển. Do đó nhận định 'IPX không phải là...' là Sai."
      },
      {
        "id": "ch3_7",
        "topic": "Tầng mạng",
        "question": "Giao thức định tuyến được dùng để",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Trao đổi thông tin chuyển tiếp dữ liệu qua mạng"
          },
          {
            "key": "B",
            "text": "Trao đổi thông tin định tuyến giữa các thiết bị định tuyến trên mạng"
          },
          {
            "key": "C",
            "text": "Kết nối liên mạng"
          },
          {
            "key": "D",
            "text": "Phân giải địa chỉ"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Giao thức định tuyến (Routing Protocol như RIP, OSPF, BGP) được các Router dùng để tự động trao đổi thông tin về cấu trúc mạng và tìm đường đi tốt nhất."
      },
      {
        "id": "ch3_8",
        "topic": "Tầng mạng",
        "question": "Đơn vị dữ liệu thông tin ở tầng Mạng trong mô hình OSI được gọi là gì?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Bit"
          },
          {
            "key": "B",
            "text": "Frame"
          },
          {
            "key": "C",
            "text": "Packet"
          },
          {
            "key": "D",
            "text": "Segment"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "PDU ở Tầng Mạng (Network Layer) được gọi là Gói tin (Packet)."
      },
      {
        "id": "ch3_9",
        "topic": "Tầng mạng",
        "question": "Trong những công việc sau, công việc nào không phải là chức năng của tầng Mạng",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đánh địa chỉ logic cho máy tính"
          },
          {
            "key": "B",
            "text": "Đặt tên gợi nhớ cho máy tính"
          },
          {
            "key": "C",
            "text": "Tìm đường đi cho các gói tin"
          },
          {
            "key": "D",
            "text": "Giải quyết tắc nghẽn"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Đặt tên gợi nhớ (Domain Name) và phân giải tên miền là nhiệm vụ của DNS (Tầng Ứng dụng), không phải chức năng của tầng Mạng."
      },
      {
        "id": "ch3_10",
        "topic": "Tầng mạng",
        "question": "Giao thức ICMP nằm ở tầng nào:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Tầng Network"
          },
          {
            "key": "B",
            "text": "Tầng Data Link"
          },
          {
            "key": "C",
            "text": "Tầng Vật lý"
          },
          {
            "key": "D",
            "text": "Tầng Ứng dụng"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "ICMP (Internet Control Message Protocol) là giao thức thông báo lỗi và kiểm tra kết nối (lệnh Ping) hoạt động ở tầng Network."
      },
      {
        "id": "ch3_11",
        "topic": "Tầng mạng",
        "question": "Những giao thức nào dưới đây là giao thức định tuyến (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "BGP"
          },
          {
            "key": "B",
            "text": "OSPF"
          },
          {
            "key": "C",
            "text": "IGRP"
          },
          {
            "key": "D",
            "text": "IGMP"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "BGP, OSPF, IGRP là các giao thức định tuyến (Routing Protocols). IGMP (Internet Group Management Protocol) là giao thức quản lý nhóm multicast."
      },
      {
        "id": "ch3_12",
        "topic": "Tầng mạng",
        "question": "Những giao thức nào dưới đây là giao thức kết nối mạng (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "IPX"
          },
          {
            "key": "B",
            "text": "IPv6"
          },
          {
            "key": "C",
            "text": "Apple Talk"
          },
          {
            "key": "D",
            "text": "IS-IS"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "IPX, IPv6, AppleTalk (DDP) là các giao thức mạng định tuyến được (Routed Protocols - dùng để đóng gói và vận chuyển dữ liệu người dùng). IS-IS là giao thức định tuyến (Routing Protocol)."
      },
      {
        "id": "ch3_13",
        "topic": "Tầng mạng",
        "question": "Giao thức nào dưới đây không phải là giao thức định tuyến (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "IPv6"
          },
          {
            "key": "B",
            "text": "BGP"
          },
          {
            "key": "C",
            "text": "IPv4"
          },
          {
            "key": "D",
            "text": "SNMP"
          }
        ],
        "correct": [
          "A",
          "C",
          "D"
        ],
        "explanation": "IPv6, IPv4 là giao thức dữ liệu tầng mạng (Routed protocols), SNMP là giao thức quản lý mạng tầng ứng dụng. Chỉ có BGP là giao thức định tuyến."
      },
      {
        "id": "ch3_14",
        "topic": "Tầng mạng",
        "question": "Đặc điểm của tầng Mạng là: (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Cho phép kết nối các thiết bị với nhau"
          },
          {
            "key": "B",
            "text": "Các gói được gửi từ nguồn tới đích bằng cách sử dụng địa chỉ"
          },
          {
            "key": "C",
            "text": "Nằm giữa tầng Giao vận và tầng Liên kết dữ liệu"
          },
          {
            "key": "D",
            "text": "Truyền tải các bit trên đường truyền vật lý"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Tầng Mạng nằm giữa Transport và Datalink, cho phép kết nối liên mạng, định địa chỉ logic để chuyển gói nguồn-đích. Truyền tải bit là của tầng Vật lý."
      },
      {
        "id": "ch3_15",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ IPv6 có độ dài 128 bits",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Địa chỉ IPv6 có độ dài chính xác là 128 bit (gồm 8 nhóm hextet, mỗi nhóm 16 bit hexa)."
      },
      {
        "id": "ch3_16",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ IPv4 có độ dài là 64 bits",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Địa chỉ IPv4 có độ dài là 32 bit (gồm 4 octet, mỗi octet 8 bit)."
      },
      {
        "id": "ch3_17",
        "topic": "Giao thức Internet",
        "question": "192.168.0.0/24 là một địa chỉ public (địa chỉ công cộng)",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "192.168.0.0/24 thuộc dải địa chỉ riêng (Private IP Address - RFC 1918 dải 192.168.0.0/16)."
      },
      {
        "id": "ch3_18",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ mạng và địa chỉ quảng bá (ở lớp mạng) không được gán cho các thiết bị",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Địa chỉ mạng (tất cả bit host = 0) và địa chỉ broadcast (tất cả bit host = 1) là hai địa chỉ đặc biệt dành riêng, không được gán cho card mạng của thiết bị chủ."
      },
      {
        "id": "ch3_19",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ IP không thay đổi từ nguồn tới đích:",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Trong truyền thông IP chuẩn (không áp dụng NAT), địa chỉ IP nguồn và IP đích trong tiêu đề gói tin được giữ nguyên vẹn suốt đường đi."
      },
      {
        "id": "ch3_20",
        "topic": "Giao thức Internet",
        "question": "IETF là một trong số nhiều tổ chức chịu trách nhiệm về việc xác định các tiêu chuẩn liên quan tới bộ giao thức TCP/IP",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "IETF (Internet Engineering Task Force) là tổ chức xây dựng và chuẩn hóa các tiêu chuẩn kỹ thuật Internet (qua các tài liệu RFC)."
      },
      {
        "id": "ch3_21",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ IPv6 nguồn phải là địa chỉ multicast",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Địa chỉ nguồn (Source Address) của một gói tin IPv6 hay IPv4 bắt buộc phải là địa chỉ Unicast."
      },
      {
        "id": "ch3_22",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ IPv6 gồm bao nhiêu bit:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "124"
          },
          {
            "key": "B",
            "text": "126"
          },
          {
            "key": "C",
            "text": "128"
          },
          {
            "key": "D",
            "text": "130"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Địa chỉ IPv6 có độ dài 128 bit."
      },
      {
        "id": "ch3_23",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ IP nào dưới đây được biểu diễn ở dạng (dotted-decimal) số thập phân – chấm:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "102.61.91.0"
          },
          {
            "key": "B",
            "text": "17.183.19.0/24"
          },
          {
            "key": "C",
            "text": "72.256.1.100"
          },
          {
            "key": "D",
            "text": "34.78.51.208."
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Dạng dotted-decimal thuần túy là 4 octet số thập phân từ 0-255 cách nhau bởi dấu chấm: 102.61.91.0. Phương án B có tiền tố CIDR /24, C có số 256 > 255 sai, D có dấu chấm thừa ở cuối."
      },
      {
        "id": "ch3_24",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ IP của PC nào dưới đây KHÔNG được biểu diễn ở dạng CIDR:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "202.57.134.19"
          },
          {
            "key": "B",
            "text": "107.23.109.76/24"
          },
          {
            "key": "C",
            "text": "72.26.19.0/24"
          },
          {
            "key": "D",
            "text": "34.203.251.255/24"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Dạng ký hiệu CIDR luôn đi kèm độ dài tiền tố mạng theo sau dấu gạch chéo (ví dụ: /24). 202.57.134.19 không có /prefix nên không ở dạng CIDR."
      },
      {
        "id": "ch3_25",
        "topic": "Giao thức Internet",
        "question": "Thông tin nào sau đây là địa chỉ IP hợp lệ:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "191.255.33.7"
          },
          {
            "key": "B",
            "text": "208.151.256.10"
          },
          {
            "key": "C",
            "text": "127.191.257.30"
          },
          {
            "key": "D",
            "text": "208.191.256.30"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Mỗi octet của địa chỉ IPv4 phải là số nguyên trong khoảng từ 0 đến 255. Các phương án B, C, D đều chứa số 256 hoặc 257 không hợp lệ."
      },
      {
        "id": "ch3_26",
        "topic": "Giao thức Internet",
        "question": "Giả sử máy A có địa chỉ 172.29.14.11/24 và máy B có địa chỉ 172.29.14.100/24. Tại máy A, để kiểm tra xem có thể gửi dữ liệu đến máy B được hay không, ta dùng lệnh nào:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Ping 172.29.14.11"
          },
          {
            "key": "B",
            "text": "Ping 172.29.14.100"
          },
          {
            "key": "C",
            "text": "Ipconfig 172.29.14.100"
          },
          {
            "key": "D",
            "text": "Ipconfig 172.29.14.11"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Để kiểm tra kết nối từ máy A tới máy B, trên máy A cần gõ lệnh Ping kèm theo địa chỉ IP của máy đích (máy B): Ping 172.29.14.100."
      },
      {
        "id": "ch3_27",
        "topic": "Giao thức Internet",
        "question": "Sử dụng các quy tắc rút gọn để biểu diễn địa chỉ IPv6 sau: “0800:0000:0000:0000:0123:0000:0000:CDEF”:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "08::123::CDEF"
          },
          {
            "key": "B",
            "text": "800::123:0:0:CDEF"
          },
          {
            "key": "C",
            "text": "8::123:0000:0000:CDEF"
          },
          {
            "key": "D",
            "text": "800::123:0000:0000:CDEF"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Quy tắc rút gọn IPv6: 1) Bỏ các số 0 đứng đầu: 0800 -> 800, 0123 -> 123. 2) Thay chuỗi khối 0 liên tiếp dài nhất bằng '::' (chỉ dùng duy nhất 1 lần): 3 khối 0 ở giữa được thay bằng '::'. Hai khối 0 phía sau rút thành ':0:0:'. Kết quả: 800::123:0:0:CDEF."
      },
      {
        "id": "ch3_28",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ logic (hay địa chỉ IP) sẽ được đóng gói ở tầng nào của mô hình OSI?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Tầng vật lý"
          },
          {
            "key": "B",
            "text": "Tầng liên kết dữ liệu"
          },
          {
            "key": "C",
            "text": "Tầng mạng"
          },
          {
            "key": "D",
            "text": "Tầng giao vận"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Địa chỉ logic (IP) được gắn vào IP Header ở Tầng Mạng (Network Layer - Tầng 3)."
      },
      {
        "id": "ch3_29",
        "topic": "Giao thức Internet",
        "question": "Loại địa chỉ nào được sử dụng để gán cho thiết bị máy chủ để truyền dữ liệu ở Tầng Mạng?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Địa chỉ liên kết dữ liệu"
          },
          {
            "key": "B",
            "text": "Địa chỉ logic (địa chỉ IP)"
          },
          {
            "key": "C",
            "text": "Địa chỉ lớp 2"
          },
          {
            "key": "D",
            "text": "Địa chỉ vật lý"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Ở Tầng Mạng, các thiết bị được định danh bằng địa chỉ logic (Logical Address / IP Address)."
      },
      {
        "id": "ch3_30",
        "topic": "Giao thức Internet",
        "question": "Phần nào là thành phần cố định trong địa chỉ IPv4?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Phần mạng con"
          },
          {
            "key": "B",
            "text": "Phần mạng"
          },
          {
            "key": "C",
            "text": "Phần logic"
          },
          {
            "key": "D",
            "text": "Phần host"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Trong cấu trúc phân cấp địa chỉ IP cho một mạng xác định, phần mạng (Network portion) là cố định cho mọi thiết bị trong mạng đó."
      },
      {
        "id": "ch3_31",
        "topic": "Giao thức Internet",
        "question": "Phát biểu nào dưới đây là đúng:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Địa chỉ IPv6 được biểu thị bằng số thập lục phân."
          },
          {
            "key": "B",
            "text": "Địa chỉ IPv4 được biểu thị bằng số thập lục phân."
          },
          {
            "key": "C",
            "text": "Địa chỉ IPv6 có độ dài 32 bit."
          },
          {
            "key": "D",
            "text": "Địa chỉ IPv4 có độ dài 128 bit."
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Địa chỉ IPv6 (128 bit) được biểu diễn dưới dạng các số thập lục phân (hexadecimal) phân tách bằng dấu hai chấm (:)."
      },
      {
        "id": "ch3_32",
        "topic": "Giao thức Internet",
        "question": "Các đặc điểm cơ bản của giao thức Internet là (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Không kết nối"
          },
          {
            "key": "B",
            "text": "Không tin cậy"
          },
          {
            "key": "C",
            "text": "Không phụ thuộc vào môi trường"
          },
          {
            "key": "D",
            "text": "Tin cậy"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Giao thức IP có 3 đặc điểm căn bản: Connectionless (không kết nối), Best Effort / Unreliable (không đảm bảo độ tin cậy, chuyển việc kiểm soát lên tầng trên), Media Independent (độc lập với môi trường truyền dẫn vật lý)."
      },
      {
        "id": "ch3_33",
        "topic": "Giao thức Internet",
        "question": "Những địa chỉ IP nào sau đây là địa chỉ public (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "112.64.12.29"
          },
          {
            "key": "B",
            "text": "192.168.23.252"
          },
          {
            "key": "C",
            "text": "198.234.12.95"
          },
          {
            "key": "D",
            "text": "212.193.48.254"
          }
        ],
        "correct": [
          "A",
          "C",
          "D"
        ],
        "explanation": "192.168.23.252 là địa chỉ Private IP. Ba địa chỉ 112.64.12.29, 198.234.12.95, 212.193.48.254 đều là các địa chỉ Public IP toàn cầu."
      },
      {
        "id": "ch3_34",
        "topic": "Giao thức Internet",
        "question": "Ưu điểm của địa chỉ IPv6 so với IPv4 (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Tăng không gian địa chỉ"
          },
          {
            "key": "B",
            "text": "Bảo mật tốt hơn"
          },
          {
            "key": "C",
            "text": "Hỗ trợ di động tốt hơn"
          },
          {
            "key": "D",
            "text": "Không hỗ trợ QoS"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "IPv6 mở rộng không gian địa chỉ lên 128 bit (2^128), tích hợp sẵn chuẩn bảo mật IPsec, và cải tiến hỗ trợ tính di động (Mobile IPv6)."
      },
      {
        "id": "ch3_35",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ IP nào sau đây KHÔNG là địa chỉ dạng Private? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "172.30.150.17/16"
          },
          {
            "key": "B",
            "text": "172.40.150.17/16"
          },
          {
            "key": "C",
            "text": "172.50.150.17/16"
          },
          {
            "key": "D",
            "text": "172.60.150.17/16"
          }
        ],
        "correct": [
          "B",
          "C",
          "D"
        ],
        "explanation": "Dải Private IP lớp B (RFC 1918) chỉ từ 172.16.0.0 đến 172.31.255.255. Do đó 172.30.x.x là Private, còn 172.40, 172.50, 172.60 KHÔNG phải Private (chính là Public)."
      },
      {
        "id": "ch3_36",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ nào sau đây KHÔNG phải là địa chỉ mạng của host 12.16.25.14/30 (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "12.16.25.4/30"
          },
          {
            "key": "B",
            "text": "12.16.25.6/30"
          },
          {
            "key": "C",
            "text": "12.16.25.8/30"
          },
          {
            "key": "D",
            "text": "12.16.25.12/30"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Với /30 (bước nhảy = 4), host 12.16.25.14 có địa chỉ mạng là 12.16.25.12/30 (dải host .13 đến .14, broadcast .15). Do đó A, B, C không phải là địa chỉ mạng chứa host này."
      },
      {
        "id": "ch3_37",
        "topic": "Giao thức Internet",
        "question": "Địa chỉ nào sau đây KHÔNG phải là địa chỉ quảng bá của mạng 19.18.25.128/27 (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "19.18.25.255/27"
          },
          {
            "key": "B",
            "text": "19.18.25.128/27"
          },
          {
            "key": "C",
            "text": "19.18.25.100/27"
          },
          {
            "key": "D",
            "text": "19.18.25.159/27"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Với mạng /27 (bước nhảy = 32), mạng bắt đầu từ 19.18.25.128/27 kết thúc tại địa chỉ broadcast là 128 + 32 - 1 = 19.18.25.159/27 (đây là phương án D đúng). Các phương án A, B, C KHÔNG phải là địa chỉ broadcast của mạng này."
      },
      {
        "id": "ch3_38",
        "topic": "Giao thức Internet",
        "question": "Các loại địa chỉ IPv6 là (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Unicast"
          },
          {
            "key": "B",
            "text": "Multicast"
          },
          {
            "key": "C",
            "text": "Anycast"
          },
          {
            "key": "D",
            "text": "Broadcast"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "IPv6 định nghĩa 3 kiểu địa chỉ truyền thông: Unicast (đơn hướng), Multicast (nhóm), và Anycast (gần nhất). IPv6 hoàn toàn loại bỏ Broadcast."
      },
      {
        "id": "ch3_39",
        "topic": "Giao thức Internet",
        "question": "Để các gói được gửi đến một đích ở xa, ba thông tin nào phải được cấu hình trên máy chủ? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Hostname"
          },
          {
            "key": "B",
            "text": "Địa chỉ IP"
          },
          {
            "key": "C",
            "text": "Subnetmask"
          },
          {
            "key": "D",
            "text": "Default Gateway"
          }
        ],
        "correct": [
          "B",
          "C",
          "D"
        ],
        "explanation": "Cấu hình IP tối thiểu để giao tiếp liên mạng gồm: Địa chỉ IP của máy, Subnet Mask (xác định mạng cục bộ), và Default Gateway (địa chỉ cổng Router để gửi gói tin ra mạng ngoài)."
      },
      {
        "id": "ch3_40",
        "topic": "Giao thức định tuyến",
        "question": "OSPF là một giao thức định tuyến?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "OSPF (Open Shortest Path First) là giao thức định tuyến nội miền (IGP) theo trạng thái đường liên kết (Link-State)."
      },
      {
        "id": "ch3_41",
        "topic": "Giao thức định tuyến",
        "question": "Hệ thống tự trị (AS) được điều hành bởi nhiều tổ chức?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Một Autonomous System (AS) là một tập hợp các mạng IP dưới sự quản lý và kiểm soát của MỘT tổ chức hoặc đơn vị duy nhất (có chung chính sách định tuyến)."
      },
      {
        "id": "ch3_42",
        "topic": "Giao thức định tuyến",
        "question": "Có 3 loại ASN?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Số hiệu tự trị ASN được chia thành 2 loại theo phạm vi: Public ASN và Private ASN (hoặc phân loại theo độ dài gồm 16-bit và 32-bit ASN)."
      },
      {
        "id": "ch3_43",
        "topic": "Giao thức định tuyến",
        "question": "Nếu dữ liệu liên tục thay đổi hướng khi tới đích, chứng tỏ quá trình định tuyến là động?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Trong định tuyến động, các router tự thích ứng và đổi hướng đường đi khi trạng thái mạng biến động."
      },
      {
        "id": "ch3_44",
        "topic": "Giao thức định tuyến",
        "question": "IGRP là giao thức định tuyến sử dụng thuật toán tính đường đi tốt nhất tới đích.",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "IGRP là giao thức định tuyến của Cisco sử dụng metric hỗn hợp (băng thông, độ trễ...) để tính đường đi tối ưu."
      },
      {
        "id": "ch3_45",
        "topic": "Giao thức định tuyến",
        "question": "Giao thức định tuyến động tự động chia sẻ thông tin định tuyến giữa các bộ định tuyến (Routers).",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Đặc trưng lớn nhất của định tuyến động là các router tự động phát hiện, quảng bá và cập nhật tuyến đường cho nhau mà không cần cấu hình thủ công từng mạng."
      },
      {
        "id": "ch3_46",
        "topic": "Giao thức định tuyến",
        "question": "Số hiệu mạng (ASN) được cấp và quản lý bởi IANA",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "IANA cấp phát các khối ASN cho các Regional Internet Registries (RIRs) trên toàn thế giới."
      },
      {
        "id": "ch3_47",
        "topic": "Giao thức định tuyến",
        "question": "Khi sử dụng định tuyến tĩnh, người quản trị phải cấu hình thủ công trên bộ định tuyến",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Định tuyến tĩnh (Static Routing) yêu cầu người quản trị mạng trực tiếp gõ lệnh thiết lập đường đi tới từng mạng đích."
      },
      {
        "id": "ch3_48",
        "topic": "Giao thức định tuyến",
        "question": "Giao thức định tuyến động là một tập hợp các tiến trình, thuật toán, bản tin được sử dụng để trao đổi thông tin định tuyến và lựa chọn đường đi tốt nhất cập nhật vào bảng định tuyến.",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Đây là định nghĩa chuẩn mực của giao thức định tuyến động (Dynamic Routing Protocol)."
      },
      {
        "id": "ch3_49",
        "topic": "Giao thức định tuyến",
        "question": "Một máy tính trong một mạng đang liên lạc với một nhóm máy tính cụ thể. Đây là loại giao tiếp gì?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Broadcast"
          },
          {
            "key": "B",
            "text": "Multicast"
          },
          {
            "key": "C",
            "text": "Unicast"
          },
          {
            "key": "D",
            "text": "Anycast"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Giao tiếp từ một nguồn tới một nhóm đích xác định gọi là Multicast (đa hướng)."
      },
      {
        "id": "ch3_50",
        "topic": "Giao thức định tuyến",
        "question": "Khả năng định tuyến được thực hiện bởi thiết bị:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Switch"
          },
          {
            "key": "B",
            "text": "Hub"
          },
          {
            "key": "C",
            "text": "Bridge"
          },
          {
            "key": "D",
            "text": "Router"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Bộ định tuyến (Router) là thiết bị chuyên trách thực hiện định tuyến và chuyển tiếp các gói tin giữa các mạng IP khác nhau."
      },
      {
        "id": "ch3_51",
        "topic": "Giao thức định tuyến",
        "question": "Chức năng của default gateway trong bảng định tuyến của Router là:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Chỉ định đến địa chỉ tiếp theo (next hop) của gói dữ liệu nếu router không biết đường gửi đến đích"
          },
          {
            "key": "B",
            "text": "Dùng để ấn định subnet mặc định cho mạng LAN"
          },
          {
            "key": "C",
            "text": "Dùng xác định địa chỉ nguồn cho các gói dữ liệu gửi ra ngoài"
          },
          {
            "key": "D",
            "text": "Là địa chỉ NAT của firewall khi kết nối các máy tính vào Internet"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Default gateway (hoặc default route 0.0.0.0/0) là tuyến đường dự phòng cuối cùng chuyển tiếp gói tin tới chặng tiếp theo (next-hop) khi bảng định tuyến không có mục nào khớp cụ thể với địa chỉ đích."
      },
      {
        "id": "ch3_52",
        "topic": "Giao thức định tuyến",
        "question": "Định tuyến tĩnh là loại định tuyến:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Dùng cho mạng đơn giản, nhỏ"
          },
          {
            "key": "B",
            "text": "Chỉ kích hoạt giao thức thức định tuyến trên Router"
          },
          {
            "key": "C",
            "text": "Chỉ rõ đường đi trên mạng cho gói tin"
          },
          {
            "key": "D",
            "text": "Dùng cho mạng lớn, phức tạp"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Định tuyến tĩnh chỉ rõ đường đi (explicit path) cố định trên mạng cho từng gói tin bằng tay của người quản trị."
      },
      {
        "id": "ch3_53",
        "topic": "Giao thức định tuyến",
        "question": "Trong quá trình chuyển tiếp lưu lượng, Router sẽ làm gì ngay sau khi khớp địa chỉ IP đích với mạng trên mục nhập bảng định tuyến được kết nối trực tiếp?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Loại bỏ lưu lượng truy cập sau khi tham khảo Router table"
          },
          {
            "key": "B",
            "text": "Tra cứu địa chỉ hop tiếp theo của gói tin"
          },
          {
            "key": "C",
            "text": "Chuyển packet sang interface được kết nối trực tiếp"
          },
          {
            "key": "D",
            "text": "Phân tích địa chỉ IP đích"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Khi mục nhập là 'Directly Connected', đích đến nằm ngay trên liên kết vật lý của router, router sẽ chuyển ngay gói tin sang interface đó để đóng khung gửi tới đích."
      },
      {
        "id": "ch3_54",
        "topic": "Giao thức định tuyến",
        "question": "Địa chỉ IPv6 nào dưới đây thuộc nhóm IPv6 unicast là:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Multicast"
          },
          {
            "key": "B",
            "text": "Loopback"
          },
          {
            "key": "C",
            "text": "Anycast"
          },
          {
            "key": "D",
            "text": "Broadcast"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Địa chỉ vòng lặp Loopback (::1/128) là một loại địa chỉ Unicast đặc biệt trong IPv6."
      },
      {
        "id": "ch3_55",
        "topic": "Giao thức định tuyến",
        "question": "Thiết bị IPv6 gửi gói dữ liệu có địa chỉ đích là FF02::1. Mục tiêu của gói này là gì?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Tất cả các máy chủ IPv6 DHCP"
          },
          {
            "key": "B",
            "text": "Tất cả các nút kích hoạt IPv6 trên liên kết cục bộ"
          },
          {
            "key": "C",
            "text": "Tất cả các Router được cấu hình IPv6 trên liên kết cục bộ"
          },
          {
            "key": "D",
            "text": "Tất cả các Router được cấu hình IPv6 trên mạng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "FF02::1 là địa chỉ All-Nodes Multicast dành cho tất cả các thiết bị/nút có hỗ trợ IPv6 trên liên kết cục bộ (local link)."
      },
      {
        "id": "ch3_56",
        "topic": "Giao thức định tuyến",
        "question": "Chức năng của Router là gì?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Nó kết nối nhiều mạng IP."
          },
          {
            "key": "B",
            "text": "Nó kiểm soát luồng dữ liệu thông qua việc sử dụng địa chỉ Lớp 2."
          },
          {
            "key": "C",
            "text": "Nó làm tăng kích thước của broadcast."
          },
          {
            "key": "D",
            "text": "Nó quản lý cơ sở dữ liệu Vlan."
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Chức năng chính của Router là liên kết các mạng IP khác nhau và chuyển tiếp các gói tin giữa chúng."
      },
      {
        "id": "ch3_57",
        "topic": "Giao thức định tuyến",
        "question": "Loại địa chỉ IPv6 nào được yêu cầu bắt buộc trên các giao diện hỗ trợ IPv6?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "loopback"
          },
          {
            "key": "B",
            "text": "unique local"
          },
          {
            "key": "C",
            "text": "link-local"
          },
          {
            "key": "D",
            "text": "static"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Mỗi giao diện bật IPv6 bắt buộc phải có một địa chỉ Link-Local (bắt đầu bằng FE80::/10) để giao tiếp nội bộ trong phân đoạn mạng."
      },
      {
        "id": "ch3_58",
        "topic": "Giao thức định tuyến",
        "question": "Loại định tuyến nào cho phép Router chuyển tiếp gói tin ngay cả khi nó không có thông tin về mạng đích?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "dynamic route"
          },
          {
            "key": "B",
            "text": "default route"
          },
          {
            "key": "C",
            "text": "destination route"
          },
          {
            "key": "D",
            "text": "generic route"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Default route (0.0.0.0/0) là đường định tuyến mặc định, dùng để chuyển tiếp mọi gói tin không có trong bảng định tuyến."
      },
      {
        "id": "ch3_59",
        "topic": "Giao thức định tuyến",
        "question": "Giao thức định tuyến động thực hiện nhiệm vụ gì:",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Trao đổi thông tin định tuyến định kỳ"
          },
          {
            "key": "B",
            "text": "Tự động trao đổi thông tin định tuyến"
          },
          {
            "key": "C",
            "text": "Trao đổi thông tin định tuyến khi có yêu cầu"
          },
          {
            "key": "D",
            "text": "Trao đổi thông tin định tuyến theo kế hoạch của quản trị hệ thống"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Giao thức định tuyến động tự động trao đổi và đồng bộ bảng định tuyến giữa các router trong mạng."
      },
      {
        "id": "ch3_60",
        "topic": "Giao thức định tuyến",
        "question": "Mục đích của giao thức định tuyến là: (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Trao đổi thông tin giữa các thiết bị định tuyến"
          },
          {
            "key": "B",
            "text": "Tăng tính hiệu quả giao tiếp giữa các máy tính"
          },
          {
            "key": "C",
            "text": "Tìm đường đi tối ưu"
          },
          {
            "key": "D",
            "text": "Tìm kiếm địa chỉ MAC"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Mục đích của giao thức định tuyến: chia sẻ cập nhật topo giữa các router, tìm ra đường dẫn ngắn/tối ưu nhất, từ đó nâng cao hiệu suất truyền thông liên mạng."
      },
      {
        "id": "ch3_61",
        "topic": "Giao thức định tuyến",
        "question": "Dải địa chỉ liên kết cục bộ nào KHÔNG thể được gán cho interface hỗ trợ IPv6? (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "FEC0::/10"
          },
          {
            "key": "B",
            "text": "FE80::/8"
          },
          {
            "key": "C",
            "text": "FE80::/10"
          },
          {
            "key": "D",
            "text": "FEC0::/8"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
        "explanation": "Chỉ có FE80::/10 là dải chuẩn cho Link-Local Unicast trong IPv6. Các dải FEC0:: (site-local đã bị deprecate) và prefix /8 không phải link-local."
      },
      {
        "id": "ch3_62",
        "topic": "Giao thức định tuyến",
        "question": "Địa chỉ nào không phải là địa mạng cho địa chỉ 2001:DB8:BC15:A:12AB::1/64: (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "2001:DB8:BC15::0/64"
          },
          {
            "key": "B",
            "text": "2001:DB8:BC15:A::0/64"
          },
          {
            "key": "C",
            "text": "2001:DB8:BC15:A:1::1/64"
          },
          {
            "key": "D",
            "text": "2001:DB8:BC15:A:12::0/64"
          }
        ],
        "correct": [
          "A",
          "C",
          "D"
        ],
        "explanation": "Với prefix /64 (gồm 4 hextet đầu: 2001:DB8:BC15:A::), địa chỉ mạng chính xác là 2001:DB8:BC15:A::/64 (phương án B). Các phương án A, C, D không phải là địa chỉ mạng của host trên."
      },
      {
        "id": "ch3_63",
        "topic": "Giao thức định tuyến",
        "question": "Các thuật toán tính toán đường đi tốt nhất tới đích là: (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Thuật toán khoảng cách - véc tơ"
          },
          {
            "key": "B",
            "text": "Thuật toán trạng thái đường"
          },
          {
            "key": "C",
            "text": "Thuật toán đường đi tốt nhất"
          },
          {
            "key": "D",
            "text": "Thuật toán khoảng cách - trạng thái"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Định tuyến gồm các họ thuật toán: Distance Vector (Bellman-Ford), Link-State (Dijkstra - Shortest Path First / đường đi tốt nhất)."
      },
      {
        "id": "ch3_64",
        "topic": "Giao thức định tuyến",
        "question": "Mục đích của giao thức định tuyến động là: (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Khám phá các mạng ở xa"
          },
          {
            "key": "B",
            "text": "Tìm đường đi tối ưu"
          },
          {
            "key": "C",
            "text": "Duy trì thông tin định tuyến"
          },
          {
            "key": "D",
            "text": "Kiểm soát luồng"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Giao thức định tuyến động tự khám phá các mạng từ xa, duy trì và cập nhật bảng định tuyến khi topo thay đổi, tìm đường đi tối ưu tới đích. Kiểm soát luồng là của tầng Giao vận."
      },
      {
        "id": "ch3_65",
        "topic": "Giao thức định tuyến",
        "question": "Các giao thức định tuyến là: (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "IGP"
          },
          {
            "key": "B",
            "text": "EGP"
          },
          {
            "key": "C",
            "text": "BGP"
          },
          {
            "key": "D",
            "text": "ARP"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "IGP (Interior Gateway Protocol), EGP (Exterior Gateway Protocol) và BGP (Border Gateway Protocol) là các giao thức/họ giao thức định tuyến. ARP là giao thức phân giải địa chỉ ở tầng liên kết."
      },
      {
        "id": "ch3_66",
        "topic": "Giao thức định tuyến",
        "question": "Các loại giao thức định tuyến là (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Định tuyến tĩnh"
          },
          {
            "key": "B",
            "text": "Định tuyến động"
          },
          {
            "key": "C",
            "text": "Định tuyến mặc định"
          },
          {
            "key": "D",
            "text": "Định tuyến vòng"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "3 kiểu định tuyến căn bản: Static routing (tĩnh), Dynamic routing (động), và Default routing (mặc định)."
      },
      {
        "id": "ch3_67",
        "topic": "Giao thức định tuyến",
        "question": "Các giao thức nào dưới đây dùng thuật toán khoảng cách - véc tơ (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "RIPv1"
          },
          {
            "key": "B",
            "text": "RIPv2"
          },
          {
            "key": "C",
            "text": "IGRP"
          },
          {
            "key": "D",
            "text": "IS-IS"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "RIPv1, RIPv2, và IGRP đều thuộc họ Distance-Vector. IS-IS là Link-State."
      },
      {
        "id": "ch3_68",
        "topic": "Giao thức định tuyến",
        "question": "Các chức năng trong giao thức định tuyến động (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Tự động chia sẻ thông tin định tuyến giữa các Routers"
          },
          {
            "key": "B",
            "text": "Tự động cập nhật bảng định tuyến khi kết nối thay đổi"
          },
          {
            "key": "C",
            "text": "Tìm đường đi tốt nhất tới đích"
          },
          {
            "key": "D",
            "text": "Tự động phát hiện tuyến mới và tối ưu"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Chia sẻ thông tin, tự động cập nhật bảng định tuyến khi có thay đổi, và xác định đường đi tốt nhất tới đích."
      },
      {
        "id": "ch3_69",
        "topic": "Thiết bị định tuyến",
        "question": "Chuyển tiếp là một nhiệm vụ của Router:",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Chuyển tiếp gói tin (Packet forwarding) là một trong hai nhiệm vụ sống còn của Router."
      },
      {
        "id": "ch3_70",
        "topic": "Thiết bị định tuyến",
        "question": "Router có chức năng định tuyến:",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Đúng, Router là thiết bị định tuyến chuyên dụng."
      },
      {
        "id": "ch3_71",
        "topic": "Thiết bị định tuyến",
        "question": "Câu lệnh để hiển thị bảng định tuyến trên Router Cisco 2811 là “show ip cef”",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Lệnh chuẩn để hiển thị bảng định tuyến là 'show ip route'. 'show ip cef' hiển thị bảng chuyển tiếp Cisco Express Forwarding."
      },
      {
        "id": "ch3_72",
        "topic": "Thiết bị định tuyến",
        "question": "Thiết bị nào thực hiện chức năng xác định đường đi cho gói tin qua mạng?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Router"
          },
          {
            "key": "B",
            "text": "Tường lửa"
          },
          {
            "key": "C",
            "text": "Web Server"
          },
          {
            "key": "D",
            "text": "Modem DSL"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Router dựa vào bảng định tuyến để xác định chặng tiếp theo (next-hop) cho gói tin."
      },
      {
        "id": "ch3_73",
        "topic": "Thiết bị định tuyến",
        "question": "Nếu Default Gateway được cấu hình không chính xác trên các máy tính thì hiện tượng gì sẽ xảy ra ?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Máy không thể giao tiếp trên mạng cục bộ."
          },
          {
            "key": "B",
            "text": "Máy có thể giao tiếp với các máy khác trên mạng cục bộ nhưng không thể giao tiếp với các máy trên mạng từ xa."
          },
          {
            "key": "C",
            "text": "Máy có thể giao tiếp với các máy khác trên mạng từ xa, nhưng không thể giao tiếp với các máy trên mạng cục bộ."
          },
          {
            "key": "D",
            "text": "Không có ảnh hưởng gì"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Giao tiếp nội bộ LAN chỉ cần địa chỉ MAC và IP cùng subnet nên vẫn thông suốt. Nhưng gói tin đi mạng ngoài cần gửi tới Default Gateway, nếu cấu hình sai sẽ không thể ra mạng ngoài/Internet."
      },
      {
        "id": "ch3_74",
        "topic": "Thiết bị định tuyến",
        "question": "Quản trị mạng cấu hình router bằng lệnh “ip route 0.0.0.0 0.0.0.0 209.165.200.226”, mục đích của lệnh này là gì?",
        "level": "Thông hiểu",
        "points": 2,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Để chuyển tiếp các gói đến thiết bị có địa chỉ IP 209.165.200.226"
          },
          {
            "key": "B",
            "text": "Để thêm tuyến động cho mạng đích 0.0.0.0 vào bảng định tuyến"
          },
          {
            "key": "C",
            "text": "Để chuyển tiếp các gói dành cho mạng 0.0.0.0 tới thiết bị có địa chỉ IP 209.165.200.226"
          },
          {
            "key": "D",
            "text": "Để cung cấp một tuyến chuyển tiếp các gói, khi không có tuyến đường nào phù hợp với nó trong bảng định tuyến"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "0.0.0.0 0.0.0.0 cấu hình Default Route (tuyến ngầm định). Nó chuyển tiếp mọi gói tin đến 209.165.200.226 khi không có tuyến nào khớp cụ thể hơn."
      },
      {
        "id": "ch3_75",
        "topic": "Thiết bị định tuyến",
        "question": "Đâu là những trường thông tin được ghi trong bảng định tuyến (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "Destination"
          },
          {
            "key": "B",
            "text": "Next-Hop"
          },
          {
            "key": "C",
            "text": "Outgoing Interface"
          },
          {
            "key": "D",
            "text": "Next-Interface"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Bảng định tuyến lưu giữ: Mạng đích (Destination Network/Prefix), Địa chỉ chặng kế tiếp (Next-Hop IP), và Cổng gửi ra (Exit/Outgoing Interface)."
      },
      {
        "id": "ch3_76",
        "topic": "Thiết bị định tuyến",
        "question": "Những câu lệnh nào dùng để thoát trong Router: (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "logout"
          },
          {
            "key": "B",
            "text": "end"
          },
          {
            "key": "C",
            "text": "exit"
          },
          {
            "key": "D",
            "text": "off"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Trong Cisco IOS: 'exit' lùi một cấp chế độ, 'end' quay về Privileged EXEC mode (#), 'logout' đăng xuất khỏi phiên console/telnet. Không có lệnh 'off'."
      },
      {
        "id": "ch3_77",
        "topic": "Thiết bị định tuyến",
        "question": "Những lệnh sau, lệnh nào được sử dụng trên thiết bị Router (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "show ip"
          },
          {
            "key": "B",
            "text": "show ip cef"
          },
          {
            "key": "C",
            "text": "switchport mode access"
          },
          {
            "key": "D",
            "text": "show ipv4"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
        "explanation": "'switchport mode access' là lệnh cấu hình cổng của Switch Layer 2. Các lệnh kiểm tra show ip, show ip cef, show ipv4... dùng trên Router."
      },
      {
        "id": "ch3_78",
        "topic": "Thiết bị định tuyến",
        "question": "Đâu là các tham số được sử dụng để hiển thị trong bảng định tuyến (Chọn 3)",
        "level": "Vận dụng",
        "points": 3,
        "type": "multiple",
        "options": [
          {
            "key": "A",
            "text": "S"
          },
          {
            "key": "B",
            "text": "C"
          },
          {
            "key": "C",
            "text": "*"
          },
          {
            "key": "D",
            "text": "W"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Trong bảng định tuyến Cisco: C là Connected (kết nối trực tiếp), S là Static (tĩnh), * biểu thị ứng viên cho Default Route (Candidate default). Không có mã W."
      },
      {
        "id": "ch3_79",
        "topic": "Chia mạng con IPv4 – Dạng 1",
        "question": "Cho địa chỉ IPv4 ở dạng CIDR: 134.15.17.80/22. Xác định:\n- Số lượng địa chỉ dùng gán cho các hosts\n- Mặt nạ mạng con ở dạng thập phân chấm\n- Địa chỉ mạng ở dạng CIDR\n- Địa chỉ host đầu tiên ở dạng CIDR\n- Địa chỉ host cuối cùng ở dạng CIDR\n- Địa chỉ quảng bá ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(1022;255.255.252.0;134.15.16.0/22;134.15.16.1/22;134.15.19.254/22;134.15.19.255/22;)"
        ],
        "explanation": "Prefix /22:\n- Số bit host = 32 - 22 = 10 bit => Số host = 2^10 - 2 = 1022 host.\n- Subnet mask: 255.255.252.0 (bước nhảy ở octet 3 là 4).\n- 17 chia 4 = 4 dư 1 => Địa chỉ mạng = 134.15.16.0/22.\n- Host đầu tiên: 134.15.16.1/22.\n- Host cuối cùng: 134.15.19.254/22.\n- Địa chỉ broadcast: 134.15.19.255/22."
      },
      {
        "id": "ch3_80",
        "topic": "Chia mạng con IPv4 – Dạng 1",
        "question": "Cho địa chỉ IPv4 ở dạng CIDR: 172.134.25.76/23. Xác định:\n- Số lượng địa chỉ dùng gán cho các hosts\n- Mặt nạ mạng con ở dạng thập phân chấm\n- Địa chỉ mạng ở dạng CIDR\n- Địa chỉ host đầu tiên ở dạng CIDR\n- Địa chỉ host cuối cùng ở dạng CIDR\n- Địa chỉ quảng bá ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(510;255.255.254.0;172.134.24.0/23;172.134.24.1/23;172.134.25.254/23;172.134.25.255/23;)"
        ],
        "explanation": "Prefix /23:\n- Số bit host = 32 - 23 = 9 bit => Số host = 2^9 - 2 = 510 host.\n- Subnet mask: 255.255.254.0 (bước nhảy octet 3 là 2).\n- 25 chia 2 = 12 dư 1 => Địa chỉ mạng = 172.134.24.0/23.\n- Host đầu: 172.134.24.1/23.\n- Host cuối: 172.134.25.254/23.\n- Broadcast: 172.134.25.255/23."
      },
      {
        "id": "ch3_81",
        "topic": "Chia mạng con IPv4 – Dạng 1",
        "question": "Cho địa chỉ IPv4 ở dạng CIDR: 173.14.225.209/24. Xác định:\n- Số lượng địa chỉ dùng gán cho các hosts\n- Mặt nạ mạng con ở dạng thập phân chấm\n- Địa chỉ mạng ở dạng CIDR\n- Địa chỉ host đầu tiên ở dạng CIDR\n- Địa chỉ host cuối cùng ở dạng CIDR\n- Địa chỉ quảng bá ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(254;255.255.255.0;173.14.225.0/24;173.14.225.1/24;173.14.225.254/24;173.14.225.255/24;)"
        ],
        "explanation": "Prefix /24:\n- Số host = 2^8 - 2 = 254.\n- Subnet mask: 255.255.255.0.\n- Địa chỉ mạng: 173.14.225.0/24.\n- Host đầu: 173.14.225.1/24.\n- Host cuối: 173.14.225.254/24.\n- Broadcast: 173.14.225.255/24."
      },
      {
        "id": "ch3_82",
        "topic": "Chia mạng con IPv4 – Dạng 1",
        "question": "Cho địa chỉ IPv4 ở dạng CIDR: 145.35.167.98/25. Xác định:\n- Số lượng địa chỉ dùng gán cho các hosts\n- Mặt nạ mạng con ở dạng thập phân chấm\n- Địa chỉ mạng ở dạng CIDR\n- Địa chỉ host đầu tiên ở dạng CIDR\n- Địa chỉ host cuối cùng ở dạng CIDR\n- Địa chỉ quảng bá ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(126;255.255.255.128;145.35.167.0/25;145.35.167.1/25;145.35.167.126/25;145.35.167.127/25;)"
        ],
        "explanation": "Prefix /25:\n- Số host = 2^7 - 2 = 126 host.\n- Subnet mask: 255.255.255.128 (bước nhảy = 128).\n- 98 < 128 => Địa chỉ mạng: 145.35.167.0/25.\n- Host đầu: 145.35.167.1/25.\n- Host cuối: 145.35.167.126/25.\n- Broadcast: 145.35.167.127/25."
      },
      {
        "id": "ch3_83",
        "topic": "Chia mạng con IPv4 – Dạng 1",
        "question": "Cho địa chỉ IPv4 ở dạng CIDR: 129.166.25.193/26. Xác định:\n- Số lượng địa chỉ dùng gán cho các hosts\n- Mặt nạ mạng con ở dạng thập phân chấm\n- Địa chỉ mạng ở dạng CIDR\n- Địa chỉ host đầu tiên ở dạng CIDR\n- Địa chỉ host cuối cùng ở dạng CIDR\n- Địa chỉ quảng bá ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(62;255.255.255.192;129.166.25.192/26;129.166.25.193/26;129.166.25.254/26;129.166.25.255/26;)"
        ],
        "explanation": "Prefix /26:\n- Số host = 2^6 - 2 = 62 host.\n- Subnet mask: 255.255.255.192 (bước nhảy = 64: .0, .64, .128, .192).\n- 193 nằm trong dải 192..255 => Địa chỉ mạng: 129.166.25.192/26.\n- Host đầu: 129.166.25.193/26.\n- Host cuối: 129.166.25.254/26.\n- Broadcast: 129.166.25.255/26."
      },
      {
        "id": "ch3_84",
        "topic": "Chia mạng con IPv4 – Dạng 2a",
        "question": "Cho địa chỉ IPv4 (164.17.148.100/22) và chia mạng có chứa địa chỉ này thành bốn mạng con. Xác định những vấn đề sau:\n- Tính địa chỉ mạng của địa chỉ IP hiện tại\n- Xác định mặt nạ mạng con mới để có được số lượng mạng con cần thiết\n- Liệt kê bốn ID mạng của các mạng con ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(164.17.148.0/22;255.255.255.0;164.17.148.0/24;164.17.149.0/24;164.17.150.0/24;164.17.151.0/24;)"
        ],
        "explanation": "- Mạng gốc: /22 (bước nhảy = 4 ở octet 3). 148 chia hết cho 4 => 164.17.148.0/22.\n- Chia 4 mạng con: mượn 2 bit (2^2 = 4) => Prefix mới = 22 + 2 = /24 => Subnet mask: 255.255.255.0.\n- 4 mạng con /24 lần lượt: 164.17.148.0/24, 164.17.149.0/24, 164.17.150.0/24, 164.17.151.0/24."
      },
      {
        "id": "ch3_85",
        "topic": "Chia mạng con IPv4 – Dạng 2a",
        "question": "Cho địa chỉ IPv4 (136.137.153.40/25) và chia mạng có chứa địa chỉ này thành 4 mạng con. Xác định những vấn đề sau:\n- Tính địa chỉ mạng của địa chỉ IP hiện tại\n- Xác định mặt nạ mạng con mới để có được số lượng mạng con cần thiết\n- Liệt kê bốn ID mạng (đầu tiên) của các mạng con ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(136.137.153.0/25;255.255.255.224;136.137.153.0/27;136.137.153.32/27;136.137.153.64/27;136.137.153.96/27;)"
        ],
        "explanation": "- Mạng gốc: 136.137.153.0/25.\n- Chia 4 mạng con: mượn 2 bit => Prefix mới = 25 + 2 = /27 => Subnet mask: 255.255.255.224 (bước nhảy = 32).\n- 4 mạng con: .0/27, .32/27, .64/27, .96/27."
      },
      {
        "id": "ch3_86",
        "topic": "Chia mạng con IPv4 – Dạng 2a",
        "question": "Cho địa chỉ IPv4 (198.122.10.210/26) và chia mạng có chứa địa chỉ này thành bốn mạng con. Xác định những vấn đề sau:\n- Tính địa chỉ mạng của địa chỉ IP hiện tại\n- Xác định mặt nạ mạng con mới để có được số lượng mạng con cần thiết\n- Liệt kê bốn ID mạng của các mạng con ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(198.122.10.192/26;255.255.255.240;198.122.10.192/28;198.122.10.208/28;198.122.10.224/28;198.122.10.240/28;)"
        ],
        "explanation": "- Mạng gốc /26: bước nhảy 64, 210 nằm trong 192..255 => 198.122.10.192/26.\n- Chia 4 mạng con: mượn 2 bit => /28 => Mask: 255.255.255.240 (bước nhảy 16).\n- 4 mạng con: .192/28, .208/28, .224/28, .240/28."
      },
      {
        "id": "ch3_87",
        "topic": "Chia mạng con IPv4 – Dạng 2b",
        "question": "Cho địa chỉ IPv4 (134.101.40.10/24) và chia mạng (có chứa IP vừa đề cập) đó thành một số mạng con. Mỗi mạng con có 19 PC (một IP cho mỗi PC). Xác định những vấn đề sau:\n- Tính địa chỉ mạng của địa chỉ IP hiện tại\n- Tìm số bit 'mượn' để tạo các mạng con mới\n- Xác định mặt nạ mạng con mới\n- Liệt kê ba ID mạng (cuối cùng) của các mạng con ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(134.101.40.0/24;3;255.255.255.224;134.101.40.160/27;134.101.40.192/27;134.101.40.224/27;)"
        ],
        "explanation": "- Mạng hiện tại: 134.101.40.0/24.\n- Mỗi mạng cần 19 host: 2^h - 2 >= 19 => h = 5 bit host (32 - 2 = 30 host).\n- Số bit mượn: 8 - 5 = 3 bit mượn => Prefix mới = 24 + 3 = /27.\n- Mask mới: 255.255.255.224 (bước nhảy = 32, tổng 8 mạng con từ index 0 đến 7).\n- 3 mạng cuối cùng (index 5, 6, 7): .160/27, .192/27, .224/27."
      },
      {
        "id": "ch3_88",
        "topic": "Chia mạng con IPv4 – Dạng 2b",
        "question": "Cho địa chỉ IPv4 (18.22.146.87/25) và chia mạng (có chứa IP vừa đề cập) đó thành một số mạng con. Mỗi mạng con có 12 PC (một IP cho mỗi PC). Xác định những vấn đề sau:\n- Tính địa chỉ mạng của địa chỉ IP hiện tại\n- Tìm số bit 'mượn' để tạo các mạng con mới\n- Xác định mặt nạ mạng con mới\n- Liệt kê ba ID mạng (cuối cùng) của các mạng con ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(18.22.146.0/25;3;255.255.255.240;18.22.146.80/28;18.22.146.96/28;18.22.146.112/28;)"
        ],
        "explanation": "- Mạng gốc: 18.22.146.0/25.\n- Cần 12 host: 2^4 - 2 = 14 >= 12 => h = 4 bit host.\n- Số bit mượn = 7 - 4 = 3 bit mượn => Prefix mới = 25 + 3 = /28.\n- Mask: 255.255.255.240 (bước nhảy = 16, dải từ .0 đến .127).\n- 3 mạng con cuối cùng: .80/28, .96/28, .112/28."
      },
      {
        "id": "ch3_89",
        "topic": "Chia mạng con IPv4 – Dạng 2b",
        "question": "Cho địa chỉ IPv4 (213.46.187.9/26) và chia mạng (có chứa IP vừa đề cập) đó thành một số mạng con. Mỗi mạng con có 11 PC (một IP cho mỗi PC). Xác định những vấn đề sau:\n- Tính địa chỉ mạng của địa chỉ IP hiện tại\n- Tìm số bit 'mượn' để tạo các mạng con mới\n- Xác định mặt nạ mạng con mới\n- Liệt kê ba ID mạng (cuối cùng) của các mạng con ở dạng CIDR",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(213.46.187.0/26;2;255.255.255.240;213.46.187.16/28;213.46.187.32/28;213.46.187.48/28;)"
        ],
        "explanation": "- Mạng gốc: 213.46.187.0/26.\n- Cần 11 host => 2^4 - 2 = 14 >= 11 => h = 4 bit host.\n- Bit mượn = 6 - 4 = 2 bit => Prefix mới = /28 => Mask: 255.255.255.240 (bước nhảy = 16).\n- Dải mạng gốc từ .0 đến .63 (4 mạng: .0, .16, .32, .48).\n- 3 mạng cuối cùng: .16/28, .32/28, .48/28."
      },
      {
        "id": "ch3_90",
        "topic": "Chia mạng con IPv4 – Dạng 3 (VLSM)",
        "question": "Cho địa chỉ mạng của địa chỉ IP (13.88.19.92/21). Chia mạng đó thành 6 mạng con (cho 6 đơn vị trong công ty). Mỗi người có một PC với một địa chỉ IP:\n- Phòng Kỹ thuật - bảo trì: 90 người\n- Phòng SX - CN - R&D: 180 người\n- Phòng Hành chính: 70 người\n- Phòng Cung ứng – xuất nhập khẩu: 111 người\n- Phòng Quản lý chất lượng: 130 người\n- Phòng Kế hoạch - kinh doanh: 146 người",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(13.88.19.128/25;13.88.16.0/24;13.88.20.0/25;13.88.19.0/25;13.88.18.0/24;13.88.17.0/24;)"
        ],
        "explanation": "Sắp xếp theo thứ tự giảm dần số lượng host (VLSM) và phân bổ địa chỉ tuần tự từ mạng gốc 13.88.16.0/21 theo hướng dẫn chuẩn."
      },
      {
        "id": "ch3_91",
        "topic": "Chia mạng con IPv4 – Dạng 3 (VLSM)",
        "question": "Cho địa chỉ mạng của địa chỉ IP (169.35.194.47/22). Chia mạng đó thành 6 mạng con (cho 6 đơn vị trong công ty). Mỗi người có một PC với một địa chỉ IP:\n- Ban giám đốc: 2 người\n- Ban quản lý dự án: 20 người\n- Phòng phần mềm: 100 người\n- Phòng marketing: 50 người\n- Phòng kỹ thuật – Công nghệ: 75 người\n- Phòng NC và PT: 8 người",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(169.35.193.112/30;169.35.193.64/27;169.35.192.0/25;169.35.193.0/26;169.35.192.128/25;169.35.193.96/28;)"
        ],
        "explanation": "Áp dụng phân bổ VLSM theo thứ tự nhu cầu giảm dần: 1) Phần mềm (100) -> /25 (169.35.192.0/25); 2) Kỹ thuật (75) -> /25 (169.35.192.128/25); 3) Marketing (50) -> /26 (169.35.193.0/26); 4) QLDA (20) -> /27 (169.35.193.64/27); 5) NC&PT (8) -> /28 (169.35.193.96/28); 6) Ban giám đốc (2) -> /30 (169.35.193.112/30)."
      },
      {
        "id": "ch3_92",
        "topic": "Chia mạng con IPv4 – Dạng 3 (VLSM)",
        "question": "Cho địa chỉ mạng của địa chỉ IP (122.109.146.24/23). Chia mạng đó thành 6 mạng con (cho 6 đơn vị trong công ty). Mỗi người có một PC với một địa chỉ IP:\n- Phòng kiểm toán: 15 người\n- Phòng nhân sự: 20 người\n- Phòng chăm sóc khách hàng: 40 người\n- Nhà máy: 100 người\n- Phòng NC và PT: 31 người\n- Phòng kỹ thuật: 80 người",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(122.109.147.160/27;122.109.147.128/27;122.109.147.0/26;122.109.146.0/25;122.109.147.64/26;122.109.146.128/25;)"
        ],
        "explanation": "Phân bổ VLSM từ lớn đến nhỏ: 1) Nhà máy (100) -> /25 (122.109.146.0/25); 2) Kỹ thuật (80) -> /25 (122.109.146.128/25); 3) CSKH (40) -> /26 (122.109.147.0/26); 4) NC&PT (31) -> /26 (122.109.147.64/26); 5) Nhân sự (20) -> /27 (122.109.147.128/27); 6) Kiểm toán (15) -> /27 (122.109.147.160/27)."
      },
      {
        "id": "ch3_93",
        "topic": "Chia mạng con IPv4 – Dạng 3 (VLSM)",
        "question": "Cho địa chỉ mạng của địa chỉ IP (145.205.167.98/24). Chia mạng đó thành 6 mạng con (cho 6 đơn vị trong công ty). Mỗi người có một PC với một địa chỉ IP:\n- Phòng kinh doanh: 14 người\n- Xưởng sản xuất: 18 người\n- Phòng Marketing: 30 người\n- Phòng Quan hệ quốc tế: 20 người\n- Phòng thu mua: 15 người\n- Phòng NC và PTSP: 10 người",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(145.205.166.128/28;145.205.166.64/27;145.205.166.0/27;145.205.166.32/27;145.205.166.96/27;145.205.166.144.28;)"
        ],
        "explanation": "Phân bổ VLSM theo số lượng host yêu cầu cho từng đơn vị."
      },
      {
        "id": "ch3_94",
        "topic": "Chia mạng con IPv4 – Dạng 3 (VLSM)",
        "question": "Cho địa chỉ mạng của địa chỉ IP (236.155.44.33/25). Chia mạng đó thành 6 mạng con (cho 6 đơn vị trong công ty). Mỗi người có một PC với một địa chỉ IP:\n- Ban thể thao và du lịch: 13 người\n- Ban giáo dục đào tạo: 14 người\n- Ban kinh tế và ngân sách: 10 người\n- Ban văn hoá - xã hội: 16 người\n- Ban pháp chế: 8 người\n- Ban thanh tra: 18 người",
        "level": "Vận dụng cao",
        "points": 4,
        "type": "fill",
        "correct": [
          "(236.155.44.80/28;236.155.44.64/28;236.155.44.96/28;236.155.44.32/27;236.155.44.112/28;236.155.44.0/27;)"
        ],
        "explanation": "Phân bổ VLSM theo số lượng host yêu cầu cho từng ban."
      }
    ]
  },
  "ch4": {
    "id": "ch4",
    "title": "Chương 4: Tầng Giao vận (Transport Layer)",
    "subtitle": "Giao thức TCP, UDP, Socket, Cổng (Port), Bắt tay 3 bước & Kiểm soát luồng",
    "docName": "MMT - 13 - Ch04 - Trắc nghiệm chương 4 và đáp án.pdf",
    "badge": "Chương 4",
    "icon": "cpu",
    "questions": [
      {
        "id": "ch4_1",
        "topic": "Tầng giao vận",
        "question": "UDP và TCP là các giao thức nằm ở tầng giao vận?",
        "level": "Nhận biết",
        "points": 1,
        "type": "single",
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Port dùng để kết nối Client/Server"
          },
          {
            "key": "B",
            "text": "Port xác định ứng dụng truyền/nhận dữ liệu"
          },
          {
            "key": "C",
            "text": "Port có giá trị từ 1 đến 1023"
          },
          {
            "key": "D",
            "text": "Port được dùng cho TCP và UDP"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "TCP/80"
          },
          {
            "key": "B",
            "text": "TCP/23"
          },
          {
            "key": "C",
            "text": "UDP/25"
          },
          {
            "key": "D",
            "text": "UDP/110"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Địa chỉ của một ứng dụng trên internet"
          },
          {
            "key": "B",
            "text": "Địa chỉ của một máy tính trên internet"
          },
          {
            "key": "C",
            "text": "Địa chỉ của một ứng dụng trên một máy tính"
          },
          {
            "key": "D",
            "text": "Liên kết với giao thức tầng Giao vận để xác định một ứng dụng"
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "Số thứ tự"
          },
          {
            "key": "B",
            "text": "Số thứ tự ghi nhận"
          },
          {
            "key": "C",
            "text": "Bộ định thời"
          },
          {
            "key": "D",
            "text": "Checksum"
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "TCP và FTP"
          },
          {
            "key": "B",
            "text": "UDP và HTTP"
          },
          {
            "key": "C",
            "text": "TCP và UDP"
          },
          {
            "key": "D",
            "text": "HTTP và FTP"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Giao tiếp giữa ứng dụng với ứng dụng"
          },
          {
            "key": "B",
            "text": "Giao tiếp giữa tiến trình với tiến trình"
          },
          {
            "key": "C",
            "text": "Giao tiếp giữa node với node"
          },
          {
            "key": "D",
            "text": "Giao tiếp giữa con người với con người"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Port"
          },
          {
            "key": "B",
            "text": "Pipe"
          },
          {
            "key": "C",
            "text": "Node"
          },
          {
            "key": "D",
            "text": "Protocol"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đảm bảo các yêu cầu truyền dữ liệu qua các phương tiện vật lý"
          },
          {
            "key": "B",
            "text": "Mã hóa dữ liệu để bảo mật thông tin trên đường tuyền"
          },
          {
            "key": "C",
            "text": "Thực hiện việc tạo luồng dữ liệu kết nối giữa các đầu cuối"
          },
          {
            "key": "D",
            "text": "Nén dữ liệu để việc truyền qua mạng nhanh hơn"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Giải quyết tắc nghẽn tốt hơn"
          },
          {
            "key": "B",
            "text": "Chất lượng dịch vụ có thể được đảm bảo"
          },
          {
            "key": "C",
            "text": "Không mất thời gian thiết lập và quản lý kết nối"
          },
          {
            "key": "D",
            "text": "Độ tin cậy cao"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Cung cấp quyền truy cập mạng"
          },
          {
            "key": "B",
            "text": "Phân tách các luồng dữ liệu"
          },
          {
            "key": "C",
            "text": "Xác định đường đi tốt nhất để chuyển tiếp gói"
          },
          {
            "key": "D",
            "text": "Dịch địa chỉ IP riêng sang địa chỉ IP công cộng"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Sequence number"
          },
          {
            "key": "B",
            "text": "Checksum"
          },
          {
            "key": "C",
            "text": "Source port"
          },
          {
            "key": "D",
            "text": "Destination port"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "0 – 255"
          },
          {
            "key": "B",
            "text": "0 – 1023"
          },
          {
            "key": "C",
            "text": "256 – 1023"
          },
          {
            "key": "D",
            "text": "1024 - 49151"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Sự kết hợp giữa địa chỉ IP, số hiệu cổng và giao thức tầng ứng dụng"
          },
          {
            "key": "B",
            "text": "Sự kết hợp giữa địa chỉ IP, số hiệu mạng và giao thức tầng giao vận"
          },
          {
            "key": "C",
            "text": "Sự kết hợp giữa địa chỉ IP, số hiệu cổng và giao thức tầng giao vận"
          },
          {
            "key": "D",
            "text": "Sự kết hợp giữa địa chỉ IP, số hiệu cổng thông dụng và giao thức tầng ứng dụng"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Private port"
          },
          {
            "key": "B",
            "text": "Registered port"
          },
          {
            "key": "C",
            "text": "Well-known port"
          },
          {
            "key": "D",
            "text": "Dynamic port"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "SNMP"
          },
          {
            "key": "B",
            "text": "SMTP"
          },
          {
            "key": "C",
            "text": "DHCP"
          },
          {
            "key": "D",
            "text": "DNS"
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "Theo dõi giao tiếp"
          },
          {
            "key": "B",
            "text": "Phân mảnh (hoặc phân đoạn) dữ liệu"
          },
          {
            "key": "C",
            "text": "Xác định các ứng dụng"
          },
          {
            "key": "D",
            "text": "Kiểm soát luồng dữ liệu"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "Mỗi số hiệu cổng được hiển thị bằng một số nguyên không dấu"
          },
          {
            "key": "B",
            "text": "Mỗi số hiệu cổng có độ dài 16-bit do ICANN cấp"
          },
          {
            "key": "C",
            "text": "Mỗi số hiệu cổng có độ dài 16-bit do IANA cấp"
          },
          {
            "key": "D",
            "text": "Số hiệu cổng được dùng để xác định một ứng dụng"
          }
        ],
        "correct": [
          "A",
          "C",
          "D"
        ],
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
          {
            "key": "A",
            "text": "Segment hoặc Datagrama"
          },
          {
            "key": "B",
            "text": "Segmen hoặc Datagram"
          },
          {
            "key": "C",
            "text": "Segment hoặc Datagram"
          },
          {
            "key": "D",
            "text": "Segmen hoặc Datagrama"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Video Conference"
          },
          {
            "key": "B",
            "text": "Truyền tải file qua mạng"
          },
          {
            "key": "C",
            "text": "Thanh toán qua mạng"
          },
          {
            "key": "D",
            "text": "Truyền tải email qua mạng"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Các gói UDP được xử lý độc lập bởi lớp vận chuyển"
          },
          {
            "key": "B",
            "text": "Nó gửi dữ liệu dưới dạng luồng các gói liên quan"
          },
          {
            "key": "C",
            "text": "Nó được nhận theo thứ tự như thứ tự đã gửi"
          },
          {
            "key": "D",
            "text": "Nó gửi dữ liệu rất nhanh"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "161"
          },
          {
            "key": "B",
            "text": "123"
          },
          {
            "key": "C",
            "text": "162"
          },
          {
            "key": "D",
            "text": "124"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "UDP/16"
          },
          {
            "key": "B",
            "text": "UDP/25"
          },
          {
            "key": "C",
            "text": "UDP/161"
          },
          {
            "key": "D",
            "text": "UDP/23"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Truyền các gói dữ liệu theo đúng thứ tự"
          },
          {
            "key": "B",
            "text": "Truyền lại các gói dữ liệu mất trên đường truyền"
          },
          {
            "key": "C",
            "text": "Không truyền lại các gói dữ liệu bị lỗi"
          },
          {
            "key": "D",
            "text": "Không có câu nào đúng"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Các ứng dụng nhạy cảm với độ trễ"
          },
          {
            "key": "B",
            "text": "Các ứng dụng cần phân phối đáng tin cậy"
          },
          {
            "key": "C",
            "text": "Các ứng dụng yêu cầu truyền lại các gói bị mất"
          },
          {
            "key": "D",
            "text": "Các ứng dụng nhạy cảm với việc mất gói"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Máy khách đặt kích thước cửa sổ cho phiên."
          },
          {
            "key": "B",
            "text": "Máy khách gửi SYN đến máy chủ để bắt đầu bắt tay 3 bước."
          },
          {
            "key": "C",
            "text": "Máy khách chọn ngẫu nhiên một số hiệu cổng"
          },
          {
            "key": "D",
            "text": "Máy khách gửi một gói tin đồng bộ hóa để yêu cầu kết nối."
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "UDP đáp ứng nhanh và ít tiêu tốn tài nguyên."
          },
          {
            "key": "B",
            "text": "UDP cung cấp khả năng kiểm soát luồng bằng cách sử dụng cửa sổ trượt windows."
          },
          {
            "key": "C",
            "text": "UDP cung cấp xác nhận dữ liệu đã nhận."
          },
          {
            "key": "D",
            "text": "UDP cung cấp một phiên đáng tin cậy."
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Nó thiết lập phiên kết nối qua quá trình bắt tay ba bước"
          },
          {
            "key": "B",
            "text": "Nó đóng phiên đã thiết lập qua quá trình bắt tay bốn bước"
          },
          {
            "key": "C",
            "text": "Nó cung cấp khả năng phân phối các datagram một cách không tin cậy"
          },
          {
            "key": "D",
            "text": "Nó cung cấp khả năng phân phối các segment một cách không tin cậy"
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "Ứng dụng video và đa phương tiện trực tiếp"
          },
          {
            "key": "B",
            "text": "Ứng dụng yêu cầu và trả lời đơn giản"
          },
          {
            "key": "C",
            "text": "Các ứng dụng tự xử lý độ tin cậy"
          },
          {
            "key": "D",
            "text": "Ứng dụng gửi thư điện tử"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "DHCP"
          },
          {
            "key": "B",
            "text": "TFTP"
          },
          {
            "key": "C",
            "text": "NTP"
          },
          {
            "key": "D",
            "text": "DNS"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "Không có giai đoạn thiết lập kết nối"
          },
          {
            "key": "B",
            "text": "Không duy trì trạng thái kết nối"
          },
          {
            "key": "C",
            "text": "Không kiểm soát tốc độ gửi"
          },
          {
            "key": "D",
            "text": "Chỉ kiểm soát tốc độ nhận"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "Source Port"
          },
          {
            "key": "B",
            "text": "Checksum"
          },
          {
            "key": "C",
            "text": "Length"
          },
          {
            "key": "D",
            "text": "SYN Bit"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "Dữ liệu được xây dựng lại theo thứ tự nhận được."
          },
          {
            "key": "B",
            "text": "Bất kỳ datagram nào bị mất sẽ không được gửi lại."
          },
          {
            "key": "C",
            "text": "Không thiết lập phiên"
          },
          {
            "key": "D",
            "text": "Kiểm soát luồng"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Dòng bytes"
          },
          {
            "key": "B",
            "text": "Chuỗi các ký tự"
          },
          {
            "key": "C",
            "text": "Các đường dữ liệu"
          },
          {
            "key": "D",
            "text": "Các gói tin"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "TCP/404"
          },
          {
            "key": "B",
            "text": "TCP/110"
          },
          {
            "key": "C",
            "text": "TCP/443"
          },
          {
            "key": "D",
            "text": "TCP/80"
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "Trình duyệt Web"
          },
          {
            "key": "B",
            "text": "Hệ thống hội thảo video trực tuyến"
          },
          {
            "key": "C",
            "text": "Hệ thống thanh toán qua mạng"
          },
          {
            "key": "D",
            "text": "Email"
          }
        ],
        "correct": [
          "B"
        ],
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
          {
            "key": "A",
            "text": "Độc lập"
          },
          {
            "key": "B",
            "text": "Ngẫu nhiên"
          },
          {
            "key": "C",
            "text": "Liên quan tới số SeqN của bên gửi"
          },
          {
            "key": "D",
            "text": "Không liên quan tới số SeqN của bên gửi"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Số cố định"
          },
          {
            "key": "B",
            "text": "Số 0"
          },
          {
            "key": "C",
            "text": "Số 1"
          },
          {
            "key": "D",
            "text": "Chuỗi số 0 và số 1"
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "TCP/24"
          },
          {
            "key": "B",
            "text": "TCP/26"
          },
          {
            "key": "C",
            "text": "TCP/25"
          },
          {
            "key": "D",
            "text": "TCP/27"
          }
        ],
        "correct": [
          "C"
        ],
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
          {
            "key": "A",
            "text": "Điều khiển luồng"
          },
          {
            "key": "B",
            "text": "Điều khiển lỗi"
          },
          {
            "key": "C",
            "text": "Kiểm soát tắc nghẽn"
          },
          {
            "key": "D",
            "text": "Phát hiện lỗi"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "Địa chỉ IP đích."
          },
          {
            "key": "B",
            "text": "Địa chỉ MAC nguồn."
          },
          {
            "key": "C",
            "text": "Địa chỉ cổng mặc định."
          },
          {
            "key": "D",
            "text": "Cổng nguồn."
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "Lưu số thứ tự của gói tin"
          },
          {
            "key": "B",
            "text": "Lưu mã xử lý lỗi của gói tin"
          },
          {
            "key": "C",
            "text": "Lưu thông tin điều khiển lưu lượng"
          },
          {
            "key": "D",
            "text": "Lưu thông tin điều khiển xung đột"
          }
        ],
        "correct": [
          "A"
        ],
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
          {
            "key": "A",
            "text": "FIN"
          },
          {
            "key": "B",
            "text": "PSH"
          },
          {
            "key": "C",
            "text": "RST"
          },
          {
            "key": "D",
            "text": "SYN"
          }
        ],
        "correct": [
          "D"
        ],
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
          {
            "key": "A",
            "text": "Thiết lập phiên"
          },
          {
            "key": "B",
            "text": "Đảm bảo tin cậy"
          },
          {
            "key": "C",
            "text": "Điều khiển luồng"
          },
          {
            "key": "D",
            "text": "Giữ và chuyển tiếp"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "FTP"
          },
          {
            "key": "B",
            "text": "HTTP"
          },
          {
            "key": "C",
            "text": "SMTP"
          },
          {
            "key": "D",
            "text": "Streaming"
          }
        ],
        "correct": [
          "A",
          "B",
          "C"
        ],
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
          {
            "key": "A",
            "text": "ISN"
          },
          {
            "key": "B",
            "text": "SYN"
          },
          {
            "key": "C",
            "text": "FIN"
          },
          {
            "key": "D",
            "text": "URG"
          }
        ],
        "correct": [
          "B",
          "C",
          "D"
        ],
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
          {
            "key": "A",
            "text": "Khi Client không còn dữ liệu để gửi, nó sẽ gửi một segment có gán cờ FIN"
          },
          {
            "key": "B",
            "text": "Server gửi lại ACK để xác nhận đã nhận được FIN để chấm dứt phiên kết nối"
          },
          {
            "key": "C",
            "text": "Server gửi ISN để đóng phiên kết nối này"
          },
          {
            "key": "D",
            "text": "Client gửi lại ACK để xác nhận đã nhận được FIN từ Server"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
        "explanation": "Quá trình đóng kết nối TCP 4 bước: 1) Client gửi FIN. 2) Server gửi ACK. 3) Server gửi FIN khi hoàn tất gửi dữ liệu. 4) Client gửi ACK xác nhận FIN của Server."
      }
    ]
  },
  "eduso": {
    "id": "eduso",
    "title": "Đề thi Eduso: 45 phút - 100 câu - 200 điểm",
    "subtitle": "Mẫu đề thi trắc nghiệm UTC kèm đáp án và lời giải chi tiết chuẩn xác",
    "docName": "MMT - 18 - BT08 - Trắc nghiệm Eduso - Mẫu đề 45p 100c 200đ.pdf",
    "badge": "Đề thi 100 câu",
    "icon": "award",
    "timeLimit": 2700,
    "totalScore": 200,
    "questions": [
      {
        "id": "eduso_1",
        "number": 1,
        "question": "Coaxial là một loại cáp dùng trong truyền thông mạng máy tính",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Cáp đồng trục (Coaxial Cable) là một loại cáp truyền thông vật lý được sử dụng rộng rãi trong mạng máy tính (như chuẩn 10BASE2, 10BASE5)."
      },
      {
        "id": "eduso_2",
        "number": 2,
        "question": "Hub là một thiết bị đầu cuối.",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Hub là thiết bị kết nối mạng trung gian hoạt động ở tầng vật lý (Physical Layer), không phải thiết bị đầu cuối (End Device như PC, Server, Smartphone)."
      },
      {
        "id": "eduso_3",
        "number": 3,
        "question": "Mạng Internet được hình thành từ sự kết nối của rất nhiều mạng, nhiều loại mạng khác nhau trên toàn thế giới.",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Internet là mạng toàn cầu liên kết hàng triệu mạng máy tính khác nhau thông qua bộ giao thức TCP/IP."
      },
      {
        "id": "eduso_4",
        "number": 4,
        "question": "Các dạng mạng máy tính có cấu trúc liên kết (dạng như Bus, Star, Ring,…) được phân loại dựa trên hình dạng kết nối các thiết bị?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Cấu trúc liên kết mạng (Topology) chính là sự sắp xếp, bố trí hình học kết nối giữa các nút mạng và đường truyền."
      },
      {
        "id": "eduso_5",
        "number": 5,
        "question": "Trong mô hình OSI, tầng Network có thể thông tin trực tiếp với các tầng Datalink và Transport trong cùng một thiết bị",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Trong cùng một thiết bị, một tầng chỉ trao đổi dữ liệu trực tiếp với tầng kề dưới (Datalink) và tầng kề trên (Transport) thông qua các giao diện SAP."
      },
      {
        "id": "eduso_6",
        "number": 6,
        "question": "Dữ liệu ở VLAN gốc không được trao đổi qua kết nối Trunking",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Dữ liệu của VLAN gốc (Native VLAN) vẫn được truyền qua đường kết nối Trunking bình thường và không bị gắn thêm tag 802.1Q."
      },
      {
        "id": "eduso_7",
        "number": 7,
        "question": "Cấu trúc khung tầng liên kết dữ liệu có trường tiêu đề (header) và phần đuôi (trailer)",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Frame là PDU duy nhất có cả Header (địa chỉ MAC, EtherType...) và Trailer (chứa FCS/CRC kiểm tra lỗi)."
      },
      {
        "id": "eduso_8",
        "number": 8,
        "question": "Một trong những chức năng của tầng liên kết dữ liệu là phát hiện lỗi.",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Tầng liên kết dữ liệu phát hiện lỗi bit truyền dẫn thông qua chuỗi kiểm tra khung FCS (Frame Check Sequence)."
      },
      {
        "id": "eduso_9",
        "number": 9,
        "question": "Mac Address Table được lưu trữ trong RAM của Switch?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Bảng địa chỉ MAC (bảng CAM) được lưu trong bộ nhớ động (RAM) của Switch và được cập nhật liên tục."
      },
      {
        "id": "eduso_10",
        "number": 10,
        "question": "CSMA/CD là giao thức truy cập ngẫu nhiên",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) là giao thức đa truy nhập môi trường ngẫu nhiên (Random Access)."
      },
      {
        "id": "eduso_11",
        "number": 11,
        "question": "Tốc độ của GigabitEthernet có thể lên đến 10000Mbps?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Gigabit Ethernet có tốc độ 1000 Mbps (1 Gbps). 10000 Mbps (10 Gbps) là 10 Gigabit Ethernet (10GbE)."
      },
      {
        "id": "eduso_12",
        "number": 12,
        "question": "VLAN là một mạng LAN ảo",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "VLAN là Virtual Local Area Network (mạng cục bộ ảo)."
      },
      {
        "id": "eduso_13",
        "number": 13,
        "question": "Switch dùng để kết nối mạng LAN Ethernet có dây.",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Switch là thiết bị trung tâm dùng để kết nối các máy tính và thiết bị có dây trong mạng Ethernet LAN."
      },
      {
        "id": "eduso_14",
        "number": 14,
        "question": "IEEE 802.1Q có tên gọi khác là dot1Q",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Chuẩn gắn tag VLAN IEEE 802.1Q thường được gọi vắn tắt là dot1Q."
      },
      {
        "id": "eduso_15",
        "number": 15,
        "question": "LLC là một lớp con (sublayer) trong tầng liên kết dữ liệu",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Chuẩn IEEE 802 chia tầng Data Link làm 2 tầng con: LLC (Logical Link Control - 802.2) và MAC (Media Access Control)."
      },
      {
        "id": "eduso_16",
        "number": 16,
        "question": "IPv6 là một giao thức nằm ở tầng Internet",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "IPv6 là giao thức truyền thông gói tin nằm ở tầng Internet trong mô hình TCP/IP."
      },
      {
        "id": "eduso_17",
        "number": 17,
        "question": "IPX không phải là một giao thức kết nối mạng",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "IPX (Internetwork Packet Exchange) của Novell NetWare chính là một giao thức mạng tầng 3 kinh điển. Do đó câu nói IPX không phải... là Sai."
      },
      {
        "id": "eduso_18",
        "number": 18,
        "question": "Internet là mạng được kết nối bởi các thiết bị định tuyến trên phạm vi toàn cầu.",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Internet được hình thành nhờ việc liên kết các mạng máy tính độc lập trên toàn cầu thông qua các bộ định tuyến (Routers) chạy giao thức BGP/IP."
      },
      {
        "id": "eduso_19",
        "number": 19,
        "question": "Địa chỉ IP không thay đổi từ nguồn tới đích:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Trong định tuyến mạng tiêu chuẩn, cặp địa chỉ IP nguồn và IP đích trong tiêu đề gói tin không đổi khi đi qua các router."
      },
      {
        "id": "eduso_20",
        "number": 20,
        "question": "Địa chỉ IPv4 có độ dài là 64 bits",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Địa chỉ IPv4 dài 32 bit (4 byte). IPv6 dài 128 bit."
      },
      {
        "id": "eduso_21",
        "number": 21,
        "question": "Chuyển tiếp là một nhiệm vụ của Router:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Hai chức năng cốt lõi của Router là Định tuyến (Routing) và Chuyển tiếp (Forwarding gói tin giữa các cổng)."
      },
      {
        "id": "eduso_22",
        "number": 22,
        "question": "Địa chỉ IPv6 nguồn phải là địa chỉ multicast",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Địa chỉ nguồn của bất kỳ gói tin nào phải là địa chỉ Unicast của thiết bị phát, không bao giờ là Multicast."
      },
      {
        "id": "eduso_23",
        "number": 23,
        "question": "192.168.0.0/24 là một địa chỉ public (địa chỉ công cộng)",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "192.168.0.0/24 thuộc dải địa chỉ riêng (Private IP Address - RFC 1918), không định tuyến trên Internet công cộng."
      },
      {
        "id": "eduso_24",
        "number": 24,
        "question": "Địa chỉ IPv4 có thể được biểu diễn dưới dạng 32 bit.",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "IPv4 là một chuỗi nhị phân gồm chính xác 32 bit (4 octet)."
      },
      {
        "id": "eduso_25",
        "number": 25,
        "question": "Lớp mạng cho phép kết nối các thiết bị với nhau",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Lớp mạng (Network Layer) chịu trách nhiệm vận chuyển gói tin và liên kết các thiết bị qua các mạng khác nhau."
      },
      {
        "id": "eduso_26",
        "number": 26,
        "question": "TCP là một giao thức không tin cậy?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "TCP là giao thức hướng kết nối và đảm bảo tin cậy (Reliable). UDP mới là giao thức không tin cậy."
      },
      {
        "id": "eduso_27",
        "number": 27,
        "question": "Một trong các nhiệm vụ của UDP thiết lập phiên trước khi truyền dữ liệu giữa 2 thiết bị đầu cuối",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "UDP là giao thức không kết nối (Connectionless), không thực hiện bất kỳ bước thiết lập phiên nào trước khi gửi."
      },
      {
        "id": "eduso_28",
        "number": 28,
        "question": "UDP không có cơ chế phát hiện lỗi",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "UDP CÓ trường Checksum trong tiêu đề để kiểm tra và phát hiện lỗi dữ liệu."
      },
      {
        "id": "eduso_29",
        "number": 29,
        "question": "Địa chỉ Default Gateway là một thành phần của Socket?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đúng"
          },
          {
            "key": "B",
            "text": "Sai"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Socket chỉ gồm Địa chỉ IP + Số hiệu cổng (Port) + Giao thức giao vận, không bao gồm Default Gateway."
      },
      {
        "id": "eduso_30",
        "number": 30,
        "question": "Các ứng dụng trao đổi dữ liệu giữa hai máy đều liên quan tới số hiệu cổng tầng giao vận",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Sai"
          },
          {
            "key": "B",
            "text": "Đúng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Số hiệu cổng (Port number) ở tầng giao vận phân định chính xác luồng dữ liệu của từng ứng dụng/tiến trình trên máy tính."
      },
      {
        "id": "eduso_31",
        "number": 31,
        "question": "Thứ tự (từ trên xuống) của các tầng trong mô hình TCP/IP là?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Application – Transport – Internet – Network Access"
          },
          {
            "key": "B",
            "text": "Internet – Network Access – Transport – Application"
          },
          {
            "key": "C",
            "text": "Transport – Internet – Network Access – Application"
          },
          {
            "key": "D",
            "text": "Application – Internet – Transport – Network Access"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "4 tầng TCP/IP từ trên xuống: Application -> Transport -> Internet -> Network Access."
      },
      {
        "id": "eduso_32",
        "number": 32,
        "question": "Tổ chức nào sau đây KHÔNG phải là nhà cung cấp dịch vụ truy cập Internet tại Việt Nam?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Voodaaphone"
          },
          {
            "key": "B",
            "text": "Viettel"
          },
          {
            "key": "C",
            "text": "FPT"
          },
          {
            "key": "D",
            "text": "VNPT"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Vodafone là nhà mạng quốc tế, không cung cấp dịch vụ viễn thông/Internet trực tiếp tại Việt Nam như Viettel, VNPT, FPT."
      },
      {
        "id": "eduso_33",
        "number": 33,
        "question": "Hai máy tính khác nhau có thể truyền thông với nhau nếu (Chọn phát biểu phù hợp nhất)",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Chúng có phần cứng giống nhau"
          },
          {
            "key": "B",
            "text": "Chúng cùng tuân thủ theo một mô hình"
          },
          {
            "key": "C",
            "text": "Chúng cùng dùng một bộ giao thức"
          },
          {
            "key": "D",
            "text": "Chúng cài đặt cùng hệ điều hành mạng"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Chỉ cần cài đặt và sử dụng cùng một bộ giao thức mạng (như TCP/IP), các máy tính khác nhau về phần cứng và hệ điều hành đều có thể truyền thông suôn sẻ."
      },
      {
        "id": "eduso_34",
        "number": 34,
        "question": "Phương thức giao tiếp trong đó việc truyền dữ liệu diễn ra theo cả hai hướng nhưng tại một thời điểm chỉ có một hướng được truyền dữ liệu, gọi là",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Simplex"
          },
          {
            "key": "B",
            "text": "Four-wire circuit"
          },
          {
            "key": "C",
            "text": "Full duplex"
          },
          {
            "key": "D",
            "text": "Half-duplex"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Half-duplex (Bán song công): truyền 2 chiều nhưng luân phiên từng thời điểm (như bộ đàm). Full-duplex truyền đồng thời cả 2 chiều."
      },
      {
        "id": "eduso_35",
        "number": 35,
        "question": "Thứ tự (từ trên xuống) của các lớp trong mô hình TCP/IP là?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Lớp ứng dụng - Lớp vận chuyển - Lớp liên kết dữ liệu - Lớp Network - Lớp vật lý"
          },
          {
            "key": "B",
            "text": "Lớp ứng dụng - Lớp Network - Lớp vận chuyển - Lớp liên kết dữ liệu - Lớp vật lý"
          },
          {
            "key": "C",
            "text": "Lớp ứng dụng - Lớp vận chuyển - Lớp Network - Lớp liên kết dữ liệu - Lớp vật lý"
          },
          {
            "key": "D",
            "text": "Lớp ứng dụng - Lớp liên kết dữ liệu - Lớp Network - Lớp vận chuyển - Lớp vật lý"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Mô hình tương đương 5 lớp: Ứng dụng -> Vận chuyển -> Network -> Liên kết dữ liệu -> Vật lý."
      },
      {
        "id": "eduso_36",
        "number": 36,
        "question": "Đơn vị dữ liệu giao thức (PDU) của tầng Giao vận là",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Segment"
          },
          {
            "key": "B",
            "text": "Packet"
          },
          {
            "key": "C",
            "text": "Data"
          },
          {
            "key": "D",
            "text": "Bits"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "PDU ở Tầng Giao vận là Segment (đối với TCP) hoặc Datagram (đối với UDP)."
      },
      {
        "id": "eduso_37",
        "number": 37,
        "question": "ISP là chữ viết tắt của?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Internetwork System Provider"
          },
          {
            "key": "B",
            "text": "International Service Provider"
          },
          {
            "key": "C",
            "text": "International System Provider"
          },
          {
            "key": "D",
            "text": "Internet Service Provider"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "ISP là Internet Service Provider (Nhà cung cấp dịch vụ Internet)."
      },
      {
        "id": "eduso_38",
        "number": 38,
        "question": "Mô hình OSI có mấy tầng?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "4 tầng"
          },
          {
            "key": "B",
            "text": "7 tầng"
          },
          {
            "key": "C",
            "text": "5 tầng"
          },
          {
            "key": "D",
            "text": "6 tầng"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Mô hình tham chiếu OSI chuẩn có 7 tầng (Physical, Data Link, Network, Transport, Session, Presentation, Application)."
      },
      {
        "id": "eduso_39",
        "number": 39,
        "question": "Một trong các chức năng chính của chuyển mạch lớp 2 là:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Cấp phát địa chỉ IP"
          },
          {
            "key": "B",
            "text": "Lọc và chuyển tiếp khung"
          },
          {
            "key": "C",
            "text": "Điều khiển truy cập mạng WAN"
          },
          {
            "key": "D",
            "text": "Nén dữ liệu"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Switch Layer 2 thực hiện học địa chỉ MAC và đưa ra quyết định lọc và chuyển tiếp khung (Frame filtering and forwarding)."
      },
      {
        "id": "eduso_40",
        "number": 40,
        "question": "Một mạng chứa nhiều VLAN trải rộng trên nhiều thiết bị chuyển mạch (trong các VLAN có VLAN 20). Điều gì xảy ra khi một thiết bị trong VLAN 20 gửi khung Ethernet quảng bá?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Chỉ các thiết bị trong VLAN 20 mới nhìn thấy frame."
          },
          {
            "key": "B",
            "text": "Các thiết bị trong các VLAN đều nhìn thấy frame."
          },
          {
            "key": "C",
            "text": "Chỉ những thiết bị được kết nối với bộ chuyển mạch cục bộ mới nhìn thấy frame."
          },
          {
            "key": "D",
            "text": "Các thiết bị trong VLAN 20 và VLAN quản lý sẽ nhìn thấy frame."
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "VLAN phân tách các miền quảng bá độc lập, do đó gói tin quảng bá trong VLAN 20 chỉ truyền tới các cổng/thiết bị thuộc VLAN 20."
      },
      {
        "id": "eduso_41",
        "number": 41,
        "question": "Thiết bị Switch có bao nhiêu collision domain?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "3 collisions / 1 port"
          },
          {
            "key": "B",
            "text": "4 collisions / 1 port"
          },
          {
            "key": "C",
            "text": "1 collision / 1port"
          },
          {
            "key": "D",
            "text": "2 collisions / 1port"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Mỗi cổng trên Switch là một miền va chạm riêng biệt (1 collision domain trên 1 port)."
      },
      {
        "id": "eduso_42",
        "number": 42,
        "question": "Thiết bị Switch thông thường nằm ở tầng nào của mô hình OSI?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Tầng 1"
          },
          {
            "key": "B",
            "text": "Tầng 3"
          },
          {
            "key": "C",
            "text": "Tầng 4"
          },
          {
            "key": "D",
            "text": "Tầng 2"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Switch truyền thống hoạt động ở Tầng 2 (Data Link Layer)."
      },
      {
        "id": "eduso_43",
        "number": 43,
        "question": "Chuẩn nào dưới đây đặc tả về chuẩn kiến trúc mạng cục bộ cho Ethernet, bao gồm các chuẩn tầng vật lý và tầng con MAC:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Token Bus"
          },
          {
            "key": "B",
            "text": "Token Ring"
          },
          {
            "key": "C",
            "text": "IEEE 802.2"
          },
          {
            "key": "D",
            "text": "IEEE 802.3"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "IEEE 802.3 là chuẩn đặc tả mạng Ethernet (gồm tầng vật lý và tầng con MAC)."
      },
      {
        "id": "eduso_44",
        "number": 44,
        "question": "Bảng MAC của Switch lưu trữ thông tin gì?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "MAC – giao diện của switch"
          },
          {
            "key": "B",
            "text": "MAC – địa chỉ IP"
          },
          {
            "key": "C",
            "text": "MAC – tên máy tính"
          },
          {
            "key": "D",
            "text": "MAC – mật khẩu thiết bị"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Bảng CAM/MAC của Switch lưu ánh xạ giữa địa chỉ MAC và cổng/giao diện (Port/Interface) tương ứng."
      },
      {
        "id": "eduso_45",
        "number": 45,
        "question": "Virtual LAN (VLAN) là một nhóm các thiết bị kết nối trong cùng miền nào dưới đây?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Miền quảng bá"
          },
          {
            "key": "B",
            "text": "Miền va chạm"
          },
          {
            "key": "C",
            "text": "Miền vật lý"
          },
          {
            "key": "D",
            "text": "Miền tự trị"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "VLAN nhóm các thiết bị vào cùng một Broadcast Domain (miền quảng bá) độc lập logic."
      },
      {
        "id": "eduso_46",
        "number": 46,
        "question": "CSMA/CD là viết tắt của:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Carrier Sense Multiple Access / Carrier Detection"
          },
          {
            "key": "B",
            "text": "Carrier Sense Multiple Access / Collision Detection"
          },
          {
            "key": "C",
            "text": "Collision Sense Multiple Access / Collision Detection"
          },
          {
            "key": "D",
            "text": "Collision Sense Multiple Access / Carrier Detection"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "CSMA/CD: Carrier Sense Multiple Access with Collision Detection."
      },
      {
        "id": "eduso_47",
        "number": 47,
        "question": "Địa chỉ MAC multicast biểu thị:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Các thiết bị ngoài LAN"
          },
          {
            "key": "B",
            "text": "Một nhóm thiết bị"
          },
          {
            "key": "C",
            "text": "Tất cả thiết bị"
          },
          {
            "key": "D",
            "text": "Một thiết bị duy nhất"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Multicast đại diện cho một nhóm các thiết bị tiếp nhận."
      },
      {
        "id": "eduso_48",
        "number": 48,
        "question": "12 chữ số hexa trong địa chỉ MAC tương đương với bao nhiêu byte?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "12 byte"
          },
          {
            "key": "B",
            "text": "8 byte"
          },
          {
            "key": "C",
            "text": "3 byte"
          },
          {
            "key": "D",
            "text": "6 byte"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Mỗi số hexa = 4 bit = 0.5 byte. 12 số hexa = 48 bit = 6 byte."
      },
      {
        "id": "eduso_49",
        "number": 49,
        "question": "Công nghệ Ethernet sử dụng phương pháp truy nhập đường truyền nào sau đây:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "TDMA"
          },
          {
            "key": "B",
            "text": "ALOHA"
          },
          {
            "key": "C",
            "text": "CSMA/CD"
          },
          {
            "key": "D",
            "text": "CSMA"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Ethernet bán song công sử dụng giao thức CSMA/CD."
      },
      {
        "id": "eduso_50",
        "number": 50,
        "question": "Tầng nào cung cấp dịch vụ truyền tin tin cậy qua môi trường vật lý:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Transport"
          },
          {
            "key": "B",
            "text": "Physical"
          },
          {
            "key": "C",
            "text": "Data link"
          },
          {
            "key": "D",
            "text": "Network"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Theo chuẩn mô hình OSI, Tầng Data Link cung cấp truyền tin tin cậy trực tiếp trên đường truyền vật lý thông qua đóng khung và CRC."
      },
      {
        "id": "eduso_51",
        "number": 51,
        "question": "Địa chỉ MAC trên Windows 10 hiển thị dưới mục nào?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "MAC Address"
          },
          {
            "key": "B",
            "text": "Physical Address"
          },
          {
            "key": "C",
            "text": "Adapter ID"
          },
          {
            "key": "D",
            "text": "Hardware Number"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Trong lệnh `ipconfig /all` trên Windows, địa chỉ MAC được hiển thị dưới nhãn 'Physical Address' (Địa chỉ vật lý)."
      },
      {
        "id": "eduso_52",
        "number": 52,
        "question": "Ở chế độ Unicast, frame được gửi từ:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Một nguồn đến một đích duy nhất"
          },
          {
            "key": "B",
            "text": "Tất cả nguồn đến một đích"
          },
          {
            "key": "C",
            "text": "Một nguồn đến một nhóm thiết bị"
          },
          {
            "key": "D",
            "text": "Một nguồn đến tất cả thiết bị"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Unicast là truyền thông điểm-điểm: từ một thiết bị nguồn tới đúng một thiết bị đích xác định."
      },
      {
        "id": "eduso_53",
        "number": 53,
        "question": "Frame là dữ liệu ở tầng:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Data Link"
          },
          {
            "key": "B",
            "text": "Transport"
          },
          {
            "key": "C",
            "text": "Physical"
          },
          {
            "key": "D",
            "text": "Network"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Frame là PDU của tầng Liên kết dữ liệu (Data Link Layer)."
      },
      {
        "id": "eduso_54",
        "number": 54,
        "question": "Thiết bị Hub có bao nhiêu collision domain?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "4"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "1"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Toàn bộ Hub tạo thành duy nhất 1 miền va chạm (1 collision domain)."
      },
      {
        "id": "eduso_55",
        "number": 55,
        "question": "Để mạng LAN truy cập Internet, dữ liệu phải đi qua thiết bị nào?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Hub"
          },
          {
            "key": "B",
            "text": "Router"
          },
          {
            "key": "C",
            "text": "Access Point"
          },
          {
            "key": "D",
            "text": "Switch"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Bộ định tuyến (Router) đóng vai trò Default Gateway kết nối mạng nội bộ LAN ra mạng Internet bên ngoài."
      },
      {
        "id": "eduso_56",
        "number": 56,
        "question": "Thông tin nào sau đây là địa chỉ IP hợp lệ:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "208.151.256.10"
          },
          {
            "key": "B",
            "text": "208.191.256.30"
          },
          {
            "key": "C",
            "text": "127.191.257.30"
          },
          {
            "key": "D",
            "text": "191.255.33.7"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Mỗi octet trong IPv4 từ 0 đến 255. Các phương án A, B, C đều có octet > 255 (256, 257) nên không hợp lệ. Chỉ có 191.255.33.7 hợp lệ."
      },
      {
        "id": "eduso_57",
        "number": 57,
        "question": "Mặt nạ mạng con (Subnet mask) được dùng để:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Mã hóa dữ liệu"
          },
          {
            "key": "B",
            "text": "Chuyển đổi IPv4 sang IPv6"
          },
          {
            "key": "C",
            "text": "Xác định tốc độ truyền dữ liệu"
          },
          {
            "key": "D",
            "text": "Xác định phần mạng và phần host của địa chỉ IP"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Subnet Mask dùng phép toán logic AND với địa chỉ IP để phân định rõ ràng phần mạng (Network ID) và phần máy chủ (Host ID)."
      },
      {
        "id": "eduso_58",
        "number": 58,
        "question": "Khi router nhận được một gói tin, bước đầu tiên nó thực hiện là gì?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Kiểm tra cổng vật lý"
          },
          {
            "key": "B",
            "text": "Xem địa chỉ đích trong tiêu đề IP"
          },
          {
            "key": "C",
            "text": "Giải mã dữ liệu"
          },
          {
            "key": "D",
            "text": "Kiểm tra địa chỉ MAC nguồn"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Router kiểm tra Destination IP Address trong IP Header để tra bảng định tuyến và quyết định chặng tiếp theo."
      },
      {
        "id": "eduso_59",
        "number": 59,
        "question": "Một máy tính trong một mạng đang liên lạc với một nhóm máy tính cụ thể. Đây là loại giao tiếp gì?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Broadcast"
          },
          {
            "key": "B",
            "text": "Unicast"
          },
          {
            "key": "C",
            "text": "Anycast"
          },
          {
            "key": "D",
            "text": "Multicast"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Giao tiếp từ một nguồn tới một nhóm máy cụ thể là Multicast."
      },
      {
        "id": "eduso_60",
        "number": 60,
        "question": "Dạng biểu diễn “192.168.1.1” thuộc kiểu nào?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "CIDR"
          },
          {
            "key": "B",
            "text": "Thập lục phân"
          },
          {
            "key": "C",
            "text": "Nhị phân"
          },
          {
            "key": "D",
            "text": "Chấm-thập phân"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Dạng 4 octet số thập phân phân tách bởi dấu chấm gọi là Dotted-Decimal (Chấm - thập phân)."
      },
      {
        "id": "eduso_61",
        "number": 61,
        "question": "Địa chỉ IPv6 có không gian địa chỉ là:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "2⁶⁴ (= 2^64)"
          },
          {
            "key": "B",
            "text": "2¹²⁸ (= 2^128)"
          },
          {
            "key": "C",
            "text": "2⁹⁶ (= 2^96)"
          },
          {
            "key": "D",
            "text": "2³² (= 2^32)"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "IPv6 có độ dài 128 bit, cung cấp không gian 2^128 địa chỉ (xấp xỉ 3.4 x 10^38)."
      },
      {
        "id": "eduso_62",
        "number": 62,
        "question": "Giao thức định tuyến được dùng để",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Trao đổi thông tin định tuyến giữa các thiết bị định tuyến trên mạng"
          },
          {
            "key": "B",
            "text": "Kết nối liên mạng"
          },
          {
            "key": "C",
            "text": "Phân giải địa chỉ"
          },
          {
            "key": "D",
            "text": "Trao đổi thông tin chuyển tiếp dữ liệu qua mạng"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Giao thức định tuyến (như RIP, OSPF, BGP) được các Router dùng để tự động trao đổi thông tin định tuyến."
      },
      {
        "id": "eduso_63",
        "number": 63,
        "question": "Trong những công việc sau, công việc nào không phải là chức năng của tầng Mạng",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Đặt tên gợi nhớ cho máy tính"
          },
          {
            "key": "B",
            "text": "Tìm đường đi cho các gói tin"
          },
          {
            "key": "C",
            "text": "Giải quyết tắc nghẽn"
          },
          {
            "key": "D",
            "text": "Đánh địa chỉ logic cho máy tính"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Đặt tên gợi nhớ là nhiệm vụ của DNS (Tầng Ứng dụng), không phải chức năng của tầng Mạng."
      },
      {
        "id": "eduso_64",
        "number": 64,
        "question": "Khi thực hiện subnetting, phần nào được “mượn” để tạo mạng con?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Bit của phần host"
          },
          {
            "key": "B",
            "text": "Bit của địa chỉ cổng (port)"
          },
          {
            "key": "C",
            "text": "Bit của phần mạng"
          },
          {
            "key": "D",
            "text": "Bit của địa chỉ MAC"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Subnetting mượn các bit có trọng số cao nhất của phần máy chủ (Host bits) để gộp vào phần mạng con (Subnet ID)."
      },
      {
        "id": "eduso_65",
        "number": 65,
        "question": "Trong các cách biểu diễn sau, đâu không phải là cách biểu diễn địa chỉ IPv4?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Dạng CIDR"
          },
          {
            "key": "B",
            "text": "Dạng thập lục phân 6 byte"
          },
          {
            "key": "C",
            "text": "Dạng 4 octets"
          },
          {
            "key": "D",
            "text": "Dạng 32 bit"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Địa chỉ IPv4 dài 4 byte (32 bit). Dạng thập lục phân 6 byte (48 bit) là địa chỉ MAC, không phải IPv4."
      },
      {
        "id": "eduso_66",
        "number": 66,
        "question": "Thiết bị IPv6 gửi gói dữ liệu có địa chỉ đích là FF02::1. Mục tiêu của gói này là gì?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Tất cả các nút kích hoạt IPv6 trên liên kết cục bộ"
          },
          {
            "key": "B",
            "text": "Tất cả các Router được cấu hình IPv6 trên mạng"
          },
          {
            "key": "C",
            "text": "Tất cả các máy chủ IPv6 DHCP"
          },
          {
            "key": "D",
            "text": "Tất cả các Router được cấu hình IPv6 trên liên kết cục bộ"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "FF02::1 là All-Nodes Multicast Address dành cho mọi nút kích hoạt IPv6 trong phạm vi link-local."
      },
      {
        "id": "eduso_67",
        "number": 67,
        "question": "Khi router không tìm thấy tuyến đường trong bảng chuyển tiếp, nó sẽ:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Không xử lý"
          },
          {
            "key": "B",
            "text": "Chuyển tiếp ngẫu nhiên"
          },
          {
            "key": "C",
            "text": "Gửi gói theo tuyến mặc định"
          },
          {
            "key": "D",
            "text": "Gửi gói đến tất cả các cổng"
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Router sẽ chuyển gói theo Tuyến mặc định (Default Route 0.0.0.0/0) nếu có thiết lập. (Nếu không có default route, router mới loại bỏ gói)."
      },
      {
        "id": "eduso_68",
        "number": 68,
        "question": "Khi biểu diễn IPv6 rút gọn, ký hiệu “::” có thể xuất hiện:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Bất kỳ số lần"
          },
          {
            "key": "B",
            "text": "Tối đa 3 lần"
          },
          {
            "key": "C",
            "text": "Tối đa 2 lần"
          },
          {
            "key": "D",
            "text": "Chỉ 1 lần"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Dấu hai chấm kép '::' chỉ được dùng DUY NHẤT 1 LẦN trong địa chỉ IPv6 để tránh không thể xác định số khối 0 được rút gọn."
      },
      {
        "id": "eduso_69",
        "number": 69,
        "question": "Địa chỉ IPv6 nào dưới đây thuộc nhóm IPv6 unicast là:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Multicast"
          },
          {
            "key": "B",
            "text": "Loopback"
          },
          {
            "key": "C",
            "text": "Broadcast"
          },
          {
            "key": "D",
            "text": "Anycast"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Địa chỉ Loopback (::1/128) được xếp vào phân loại địa chỉ IPv6 Unicast đặc biệt."
      },
      {
        "id": "eduso_70",
        "number": 70,
        "question": "Phần nào là thành phần cố định trong địa chỉ IPv4?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Phần logic"
          },
          {
            "key": "B",
            "text": "Phần mạng"
          },
          {
            "key": "C",
            "text": "Phần host"
          },
          {
            "key": "D",
            "text": "Phần mạng con"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Phần mạng (Network portion) là cố định đối với mọi thiết bị nằm trong cùng một mạng."
      },
      {
        "id": "eduso_71",
        "number": 71,
        "question": "Ứng dụng nào sau đây phù hợp nhất với UDP:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Video Conference"
          },
          {
            "key": "B",
            "text": "Thanh toán qua mạng"
          },
          {
            "key": "C",
            "text": "Truyền tải file qua mạng"
          },
          {
            "key": "D",
            "text": "Truyền tải email qua mạng"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "Video Conference yêu cầu thời gian thực, độ trễ tối thiểu nên sử dụng UDP."
      },
      {
        "id": "eduso_72",
        "number": 72,
        "question": "Một máy khách đã thực hiện yêu cầu HTTP tới trình duyệt web. Số hiệu địa chỉ cổng thông dụng nào được liên kết với địa chỉ đích?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "TCP/443"
          },
          {
            "key": "B",
            "text": "TCP/110"
          },
          {
            "key": "C",
            "text": "TCP/404"
          },
          {
            "key": "D",
            "text": "TCP/80"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Dịch vụ HTTP chạy trên cổng đích mặc định TCP/80."
      },
      {
        "id": "eduso_73",
        "number": 73,
        "question": "Loại ứng dụng nào phù hợp nhất để sử dụng UDP?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Các ứng dụng yêu cầu truyền lại các gói bị mất"
          },
          {
            "key": "B",
            "text": "Các ứng dụng nhạy cảm với việc mất gói"
          },
          {
            "key": "C",
            "text": "Các ứng dụng cần phân phối đáng tin cậy"
          },
          {
            "key": "D",
            "text": "Các ứng dụng nhạy cảm với độ trễ"
          }
        ],
        "correct": [
          "D"
        ],
        "explanation": "Các ứng dụng truyền thông nhạy cảm với độ trễ (Delay-sensitive như VoIP, video trực tiếp, gaming) phù hợp nhất với UDP."
      },
      {
        "id": "eduso_74",
        "number": 74,
        "question": "Cổng kết nối của giao thức SMTP là",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "TCP/25"
          },
          {
            "key": "B",
            "text": "TCP/26"
          },
          {
            "key": "C",
            "text": "TCP/24"
          },
          {
            "key": "D",
            "text": "TCP/27"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "SMTP dùng cổng tiêu chuẩn TCP/25."
      },
      {
        "id": "eduso_75",
        "number": 75,
        "question": "Để phát hiện lỗi trong khi truyền segment ở tầng giao vận, người ta sử dụng kỹ thuật:",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Số thứ tự ghi nhận"
          },
          {
            "key": "B",
            "text": "Checksum"
          },
          {
            "key": "C",
            "text": "Bộ định thời"
          },
          {
            "key": "D",
            "text": "Số thứ tự"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Kỹ thuật tính Checksum (tổng kiểm tra) được dùng ở tầng giao vận để phát hiện sai lỗi bit."
      },
      {
        "id": "eduso_76",
        "number": 76,
        "question": "Thông số nào được nút nguồn lựa chọn ngẫu nhiên trước khi gửi dữ liệu",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "Địa chỉ IP đích."
          },
          {
            "key": "B",
            "text": "Địa chỉ MAC nguồn."
          },
          {
            "key": "C",
            "text": "Cổng nguồn."
          },
          {
            "key": "D",
            "text": "Địa chỉ cổng mặc định."
          }
        ],
        "correct": [
          "C"
        ],
        "explanation": "Cổng nguồn (Source Port) được chọn ngẫu nhiên trong dải Dynamic/Ephemeral ports."
      },
      {
        "id": "eduso_77",
        "number": 77,
        "question": "Trường nào trong tiêu đề TCP được sử dụng để bắt đầu quá trình bắt tay ba bước?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "FIN"
          },
          {
            "key": "B",
            "text": "SYN"
          },
          {
            "key": "C",
            "text": "RST"
          },
          {
            "key": "D",
            "text": "PSH"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Cờ SYN (Synchronize) được bật trong segment đầu tiên để yêu cầu thiết lập kết nối TCP."
      },
      {
        "id": "eduso_78",
        "number": 78,
        "question": "Tầng giao vận sử dụng cổng 53 để mô tả giao thức nào?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "DHCP"
          },
          {
            "key": "B",
            "text": "DNS"
          },
          {
            "key": "C",
            "text": "SMTP"
          },
          {
            "key": "D",
            "text": "SNMP"
          }
        ],
        "correct": [
          "B"
        ],
        "explanation": "Cổng 53 thuộc về giao thức phân giải tên miền DNS."
      },
      {
        "id": "eduso_79",
        "number": 79,
        "question": "Các tầng nào dưới đây nằm trong mô hình TCP/IP? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "Tầng Application"
          },
          {
            "key": "B",
            "text": "Tầng Internet"
          },
          {
            "key": "C",
            "text": "Tầng Session"
          },
          {
            "key": "D",
            "text": "Tầng Datalink"
          },
          {
            "key": "E",
            "text": "Tầng Presentation"
          },
          {
            "key": "F",
            "text": "Tầng Network Access"
          }
        ],
        "correct": [
          "A",
          "B",
          "F"
        ],
        "explanation": "Mô hình TCP/IP chuẩn gồm 4 tầng: Application, Transport, Internet, Network Access. Do đó A, B, F là các tầng thuộc TCP/IP."
      },
      {
        "id": "eduso_80",
        "number": 80,
        "question": "Tầng vận chuyển trong mô hình OSI thực hiện chức năng nào dưới đây. (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "Kiểm soát lỗi"
          },
          {
            "key": "B",
            "text": "Kiểm soát luồng dữ liệu"
          },
          {
            "key": "C",
            "text": "Đồng bộ hoá"
          },
          {
            "key": "D",
            "text": "Định tuyến gói tin"
          },
          {
            "key": "E",
            "text": "Định địa chỉ cổng (Port addressing)"
          },
          {
            "key": "F",
            "text": "Kết nối End-to-End"
          }
        ],
        "correct": [
          "A",
          "B",
          "F"
        ],
        "explanation": "Theo chuẩn đề cương Eduso môn MMT, Tầng vận chuyển thực hiện 3 chức năng chính: Kết nối End-to-End, Kiểm soát lỗi (Error control), và Kiểm soát luồng dữ liệu (Flow control)."
      },
      {
        "id": "eduso_81",
        "number": 81,
        "question": "Những loại nào dưới đây là topology của một mạng LAN? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "Bus"
          },
          {
            "key": "B",
            "text": "Star"
          },
          {
            "key": "C",
            "text": "Tree"
          },
          {
            "key": "D",
            "text": "Ring"
          },
          {
            "key": "E",
            "text": "Mesh"
          },
          {
            "key": "F",
            "text": "Square"
          }
        ],
        "correct": [
          "A",
          "B",
          "D"
        ],
        "explanation": "3 topology cơ bản kinh điển nhất của mạng LAN là Bus, Star và Ring."
      },
      {
        "id": "eduso_82",
        "number": 82,
        "question": "Một miền quảng bá có tính chất như sau (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "Hub phân tách các miền quảng bá"
          },
          {
            "key": "B",
            "text": "Phạm vi truy cập của các gói Broadcast"
          },
          {
            "key": "C",
            "text": "Bộ định tuyến phân tách các miền quảng bá bằng interface"
          },
          {
            "key": "D",
            "text": "Repeater phân tách được các miền quảng bá"
          },
          {
            "key": "E",
            "text": "Các thiết bị trong cùng một miền quảng bá có thể nhận gói quảng bá"
          },
          {
            "key": "F",
            "text": "Bộ định tuyến không phân tách được miền quảng bá"
          }
        ],
        "correct": [
          "B",
          "C",
          "E"
        ],
        "explanation": "Miền quảng bá là phạm vi tiếp cận của gói tin Broadcast (B); mọi thiết bị trong cùng miền đều nhận được gói quảng bá (E); Router phân tách các miền quảng bá bằng các interface của nó (C)."
      },
      {
        "id": "eduso_83",
        "number": 83,
        "question": "Những tổ chức nào sau đây tham gia định nghĩa chức năng của tầng liên kết dữ liệu?",
        "type": "single",
        "points": 2,
        "options": [
          {
            "key": "A",
            "text": "IEEE"
          },
          {
            "key": "B",
            "text": "IETF"
          },
          {
            "key": "C",
            "text": "ITU-L"
          },
          {
            "key": "D",
            "text": "ANSI"
          },
          {
            "key": "E",
            "text": "ISO"
          },
          {
            "key": "F",
            "text": "W3C"
          }
        ],
        "correct": [
          "A"
        ],
        "explanation": "IEEE (Viện Kỹ sư Điện và Điện tử) là tổ chức chủ đạo ban hành các chuẩn định nghĩa tầng Data Link và Physical (như IEEE 802.3, 802.11, 802.1Q...)."
      },
      {
        "id": "eduso_84",
        "number": 84,
        "question": "Dịch vụ nào sau đây mà tầng liên kết dữ liệu phải cung cấp? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "Kiểm soát cách tạo bit"
          },
          {
            "key": "B",
            "text": "Định tuyến gói tin"
          },
          {
            "key": "C",
            "text": "Xác định địa chỉ vật lý"
          },
          {
            "key": "D",
            "text": "Xác định địa chỉ logic"
          },
          {
            "key": "E",
            "text": "Kiểm soát lỗi"
          },
          {
            "key": "F",
            "text": "Tạo khung"
          }
        ],
        "correct": [
          "C",
          "E",
          "F"
        ],
        "explanation": "3 dịch vụ cốt lõi của Tầng liên kết dữ liệu: Framing (Tạo khung), Physical addressing (Xác định địa chỉ MAC vật lý), Error control (Kiểm soát lỗi CRC)."
      },
      {
        "id": "eduso_85",
        "number": 85,
        "question": "Các loại địa chỉ MAC bao gồm? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "MAC multicast"
          },
          {
            "key": "B",
            "text": "MAC anycast"
          },
          {
            "key": "C",
            "text": "MAC multicasts"
          },
          {
            "key": "D",
            "text": "MAC broadcast"
          },
          {
            "key": "E",
            "text": "MAC unicasts"
          },
          {
            "key": "F",
            "text": "MAC unicast"
          }
        ],
        "correct": [
          "A",
          "D",
          "F"
        ],
        "explanation": "3 kiểu địa chỉ MAC là: MAC unicast, MAC multicast, và MAC broadcast."
      },
      {
        "id": "eduso_86",
        "number": 86,
        "question": "Giao thức nào dưới đây không phải là giao thức định tuyến (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "SNMP"
          },
          {
            "key": "B",
            "text": "BGP"
          },
          {
            "key": "C",
            "text": "IPv4"
          },
          {
            "key": "D",
            "text": "RIPng"
          },
          {
            "key": "E",
            "text": "IPv6"
          },
          {
            "key": "F",
            "text": "OSPF"
          }
        ],
        "correct": [
          "A",
          "C",
          "E"
        ],
        "explanation": "SNMP (quản trị mạng), IPv4 và IPv6 (giao thức gói tin) KHÔNG phải giao thức định tuyến. BGP, RIPng, OSPF là giao thức định tuyến."
      },
      {
        "id": "eduso_87",
        "number": 87,
        "question": "Những giao thức nào dưới đây là giao thức định tuyến (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "RIPn"
          },
          {
            "key": "B",
            "text": "SPT"
          },
          {
            "key": "C",
            "text": "IGRP"
          },
          {
            "key": "D",
            "text": "BGP"
          },
          {
            "key": "E",
            "text": "OSPF"
          },
          {
            "key": "F",
            "text": "IGMP"
          }
        ],
        "correct": [
          "C",
          "D",
          "E"
        ],
        "explanation": "IGRP, BGP, và OSPF là 3 giao thức định tuyến chuẩn."
      },
      {
        "id": "eduso_88",
        "number": 88,
        "question": "Ba mục liên quan trực tiếp đến quá trình gửi gói tin từ thiết bị nguồn? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "Định tuyến lại toàn bộ mạng"
          },
          {
            "key": "B",
            "text": "Gửi đến router gần nhất"
          },
          {
            "key": "C",
            "text": "Tra bảng chuyển tiếp"
          },
          {
            "key": "D",
            "text": "Mã hóa gói tin"
          },
          {
            "key": "E",
            "text": "Xem địa chỉ đích IP"
          },
          {
            "key": "F",
            "text": "Chuyển tiếp gói tin"
          }
        ],
        "correct": [
          "B",
          "C",
          "E"
        ],
        "explanation": "Tại máy nguồn khi gửi dữ liệu: 1) Xem địa chỉ đích IP (E) để so sánh với subnet mask; 2) Tra bảng định tuyến/chuyển tiếp cục bộ (C); 3) Gửi gói tin đến Default Gateway / router gần nhất nếu khác mạng (B)."
      },
      {
        "id": "eduso_89",
        "number": 89,
        "question": "Các loại địa chỉ IPv6 là (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "MAC"
          },
          {
            "key": "B",
            "text": "Anycast"
          },
          {
            "key": "C",
            "text": "Broadcast"
          },
          {
            "key": "D",
            "text": "Multicast"
          },
          {
            "key": "E",
            "text": "Unicast"
          },
          {
            "key": "F",
            "text": "Physical address"
          }
        ],
        "correct": [
          "B",
          "D",
          "E"
        ],
        "explanation": "IPv6 gồm 3 kiểu địa chỉ: Unicast (đơn hướng), Multicast (đa hướng), và Anycast (gần nhất). IPv6 không có Broadcast."
      },
      {
        "id": "eduso_90",
        "number": 90,
        "question": "Phát biểu nào dưới đây là đúng khi nói về giao thức UDP (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "Chỉ kiểm soát tốc độ nhận"
          },
          {
            "key": "B",
            "text": "Không kiểm soát tốc độ gửi"
          },
          {
            "key": "C",
            "text": "Duy trì trạng thái kết nối"
          },
          {
            "key": "D",
            "text": "Không duy trì trạng thái kết nối"
          },
          {
            "key": "E",
            "text": "Thiết lập kết nối"
          },
          {
            "key": "F",
            "text": "Không có giai đoạn thiết lập kết nối"
          }
        ],
        "correct": [
          "B",
          "D",
          "F"
        ],
        "explanation": "Đặc điểm đúng của UDP: Không có giai đoạn thiết lập kết nối (F), Không duy trì trạng thái kết nối (D), và Không kiểm soát tốc độ gửi (B)."
      },
      {
        "id": "eduso_91",
        "number": 91,
        "question": "Ba trường nào sau đây có trong tiêu đề TCP? (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "UGR"
          },
          {
            "key": "B",
            "text": "SYN"
          },
          {
            "key": "C",
            "text": "Checksum"
          },
          {
            "key": "D",
            "text": "URG"
          },
          {
            "key": "E",
            "text": "ISN"
          },
          {
            "key": "F",
            "text": "FIN"
          }
        ],
        "correct": [
          "B",
          "D",
          "F"
        ],
        "explanation": "SYN, FIN, và URG là 3 cờ điều khiển (Control Flags) nằm trong Header của gói TCP."
      },
      {
        "id": "eduso_92",
        "number": 92,
        "question": "Các dịch vụ sử dụng giao thức TCP là (Chọn 3)",
        "type": "multiple",
        "points": 3,
        "options": [
          {
            "key": "A",
            "text": "SMTP"
          },
          {
            "key": "B",
            "text": "TFTP"
          },
          {
            "key": "C",
            "text": "FTP"
          },
          {
            "key": "D",
            "text": "HTTP"
          },
          {
            "key": "E",
            "text": "DHCP"
          },
          {
            "key": "F",
            "text": "Streaming"
          }
        ],
        "correct": [
          "A",
          "C",
          "D"
        ],
        "explanation": "SMTP (mail TCP/25), FTP (file TCP/20,21) và HTTP (web TCP/80) sử dụng giao thức TCP."
      },
      {
        "id": "eduso_93",
        "number": 93,
        "question": "Cho địa chỉ IPv4: 182.16.45.200/23. Xác định:\n- Mặt nạ mạng con (dạng chấm thập phân)\n- Địa chỉ mạng",
        "type": "fill",
        "points": 4,
        "correct": [
          "255.255.254.0; 182.16.44.0/23"
        ],
        "explanation": "• Mặt nạ mạng con /23: 23 bit 1 liên tiếp = 11111111.11111111.11111110.00000000 = 255.255.254.0 (bước nhảy ở octet 3 là 256 - 254 = 2).\n• Địa chỉ mạng: Octet 3 là 45. Vì 45 chia 2 được 22 dư 1 => Địa chỉ mạng bắt đầu tại số chẵn 22 * 2 = 44. Do đó Địa chỉ mạng là 182.16.44.0/23 (dải từ 182.16.44.0 đến 182.16.45.255)."
      },
      {
        "id": "eduso_94",
        "number": 94,
        "question": "Cho địa chỉ IPv4: 162.218.71.190/26. Xác định:\n- Địa chỉ host đầu tiên\n- Địa chỉ host thứ hai",
        "type": "fill",
        "points": 4,
        "correct": [
          "162.218.71.129/26; 162.218.71.130/26"
        ],
        "explanation": "• Prefix /26: bước nhảy ở octet 4 là 2^(32-26) = 2^6 = 64. Các mạng con gồm: .0, .64, .128, .192. IP 162.218.71.190 nằm trong dải mạng 162.218.71.128/26 (từ .128 đến .191).\n• Địa chỉ host đầu tiên = Network ID + 1 = 162.218.71.129/26.\n• Địa chỉ host thứ hai = Network ID + 2 = 162.218.71.130/26."
      },
      {
        "id": "eduso_95",
        "number": 95,
        "question": "Cho địa chỉ IPv4: 202.131.89.140/23. Xác định:\n- Địa chỉ host cuối\n- Địa chỉ quảng bá",
        "type": "fill",
        "points": 4,
        "correct": [
          "202.131.89.254/23; 202.131.89.255/23"
        ],
        "explanation": "• Prefix /23: bước nhảy ở octet 3 là 2. Octet 3 là 89 chia 2 = 44 dư 1 => Địa chỉ mạng là 202.131.88.0/23.\n• Dải IP kéo dài từ 202.131.88.0 đến 202.131.89.255.\n• Địa chỉ quảng bá (Broadcast) = 202.131.89.255/23.\n• Địa chỉ host cuối cùng = Broadcast - 1 = 202.131.89.254/23."
      },
      {
        "id": "eduso_96",
        "number": 96,
        "question": "Cho địa chỉ IPv4: 128.192.10.210/23, chia mạng này thành bốn mạng con. Xác định địa chỉ mạng của hai mạng con thứ 2, 3.",
        "type": "fill",
        "points": 4,
        "correct": [
          "Mạng con 2: 128.192.10.128/25; Mạng con 3: 128.192.11.0/25"
        ],
        "explanation": "• Địa chỉ mạng gốc: 128.192.10.0/23.\n• Chia thành 4 mạng con: mượn 2 bit (2^2 = 4) => Prefix mới = 23 + 2 = /25. Bước nhảy ở octet 4 là 128 (mỗi mạng có 128 IP).\n• 4 mạng con lần lượt:\n  1) 128.192.10.0/25\n  2) 128.192.10.128/25 (Mạng thứ 2)\n  3) 128.192.11.0/25 (Mạng thứ 3)\n  4) 128.192.11.128/25."
      },
      {
        "id": "eduso_97",
        "number": 97,
        "question": "Cho địa chỉ IPv4: 210.145.78.200/24, chia mạng này thành ba mạng con. Xác định địa chỉ mạng của mạng con thứ 1, 3.",
        "type": "fill",
        "points": 4,
        "correct": [
          "Mạng con 1: 210.145.78.0/26; Mạng con 3: 210.145.78.128/26"
        ],
        "explanation": "• Mạng gốc: 210.145.78.0/24.\n• Cần tạo 3 mạng con => mượn 2 bit (2^2 = 4 >= 3) => Prefix mới = 24 + 2 = /26. Bước nhảy = 64.\n• Các mạng con lần lượt:\n  - Mạng con thứ 1: 210.145.78.0/26\n  - Mạng con thứ 2: 210.145.78.64/26\n  - Mạng con thứ 3: 210.145.78.128/26\n  - Mạng con thứ 4: 210.145.78.192/26."
      },
      {
        "id": "eduso_98",
        "number": 98,
        "question": "Cho địa chỉ IPv4: 101.202.19.140/22, chia mạng này thành năm mạng con. Xác định địa chỉ mạng của hai mạng con thứ 1, 5.",
        "type": "fill",
        "points": 4,
        "correct": [
          "Mạng con 1: 101.202.16.0/25; Mạng con 5: 101.202.18.0/25"
        ],
        "explanation": "• /22: bước nhảy ở octet 3 là 4. 19 / 4 = 4 dư 3 => Mạng gốc là 101.202.16.0/22.\n• Cần chia 5 mạng con: mượn 3 bit (2^3 = 8 >= 5) => Prefix mới = 22 + 3 = /25. Mỗi mạng con có bước nhảy 128 ở octet 4.\n• Các mạng con lần lượt:\n  - Mạng con thứ 1: 101.202.16.0/25\n  - Mạng con thứ 2: 101.202.16.128/25\n  - Mạng con thứ 3: 101.202.17.0/25\n  - Mạng con thứ 4: 101.202.17.128/25\n  - Mạng con thứ 5: 101.202.18.0/25."
      },
      {
        "id": "eduso_99",
        "number": 99,
        "question": "Cho địa chỉ IPv4: 140.200.205.47/21. Chia mạng này thành các mạng con, đáp ứng nhu cầu cho từng VLAN như sau: “VLAN 1: /27, VLAN 2: /23, VLAN 3: /24, VLAN 4: /26, VLAN 5: /26, VLAN 6: /25”.\nVLAN 3 và 5 được phân vùng địa chỉ nào?",
        "type": "fill",
        "points": 4,
        "correct": [
          "VLAN 3: 140.200.202.0/24; VLAN 5: 140.200.203.192/26"
        ],
        "explanation": "• Địa chỉ mạng gốc: 140.200.200.0/21 (dải từ 140.200.200.0 đến 140.200.207.255).\n• Áp dụng kỹ thuật VLSM phân bổ từ mạng có nhu cầu lớn nhất đến nhỏ nhất:\n  1. VLAN 2: /23 => 140.200.200.0/23 (chiếm 140.200.200.0 - 140.200.201.255)\n  2. VLAN 3: /24 => 140.200.202.0/24 (chiếm 140.200.202.0 - 140.200.202.255)\n  3. VLAN 6: /25 => 140.200.203.0/25 (chiếm 140.200.203.0 - 140.200.203.127)\n  4. VLAN 4: /26 => 140.200.203.128/26 (chiếm 140.200.203.128 - 140.200.203.191)\n  5. VLAN 5: /26 => 140.200.203.192/26 (chiếm 140.200.203.192 - 140.200.203.255)\n  6. VLAN 1: /27 => 140.200.204.0/27 (chiếm 140.200.204.0 - 140.200.204.31)\n=> Kết quả: VLAN 3 nhận 140.200.202.0/24 và VLAN 5 nhận 140.200.203.192/26."
      },
      {
        "id": "eduso_100",
        "number": 100,
        "question": "Cho một dải địa chỉ IPv6: 2005:C2F:3B8::/48. Chia dải địa chỉ này để cấp cho các mạng LAN (/64). Liệt kê ở dạng nén, hai dải IPv6: dải thứ hai và dải cuối cùng",
        "type": "fill",
        "points": 4,
        "correct": [
          "Dải thứ 2: 2005:C2F:3B8:1::/64; Dải cuối: 2005:C2F:3B8:FFFF::/64"
        ],
        "explanation": "• Tiền tố mạng gốc là /48: gồm 3 nhóm 16-bit đầu tiên: 2005:C2F:3B8::/48.\n• Chia thành các mạng LAN /64: mượn 16 bit của nhóm thứ 4 (Subnet ID từ 0000 đến FFFF).\n  - Dải mạng LAN thứ 1 (index 0): 2005:C2F:3B8:0::/64 -> nén là 2005:C2F:3B8::/64\n  - Dải mạng LAN thứ 2 (index 1): 2005:C2F:3B8:1::/64\n  - Dải mạng LAN cuối cùng (index FFFF): 2005:C2F:3B8:FFFF::/64."
      }
    ]
  }
};
