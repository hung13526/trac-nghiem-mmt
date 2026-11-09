# -*- coding: utf-8 -*-
import json
from data_ch1 import ch1_questions
from data_ch2 import ch2_questions
from data_ch3 import ch3_questions
from data_ch4 import ch4_questions
from data_eduso import eduso_questions

quiz_data = {
    "ch1": {
        "id": "ch1",
        "title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "subtitle": "Mô hình OSI, TCP/IP, Tầng Vật lý & Môi trường truyền dẫn",
        "docName": "MMT - 02 - Ch01 - Trắc nghiệm chương 1 và đáp án.pdf",
        "badge": "Chương 1",
        "icon": "globe",
        "questions": ch1_questions
    },
    "ch2": {
        "id": "ch2",
        "title": "Chương 2: Chuyển mạch Ethernet & VLAN",
        "subtitle": "Tầng Data Link, Giao thức CSMA/CD, Switch, VLAN & Trunking",
        "docName": "MMT - 07 - Ch02 - Trắc nghiệm chương 2 và đáp án.pdf",
        "badge": "Chương 2",
        "icon": "layers",
        "questions": ch2_questions
    },
    "ch3": {
        "id": "ch3",
        "title": "Chương 3: Tầng Mạng & Định tuyến",
        "subtitle": "Giao thức IP (IPv4, IPv6), Giao thức định tuyến OSPF/BGP/RIP & Chia subnet",
        "docName": "MMT - 09 - Ch03 - Trắc nghiệm chương 3 và đáp án.pdf",
        "badge": "Chương 3",
        "icon": "git-commit",
        "questions": ch3_questions
    },
    "ch4": {
        "id": "ch4",
        "title": "Chương 4: Tầng Giao vận (Transport Layer)",
        "subtitle": "Giao thức TCP, UDP, Socket, Cổng (Port), Bắt tay 3 bước & Kiểm soát luồng",
        "docName": "MMT - 13 - Ch04 - Trắc nghiệm chương 4 và đáp án.pdf",
        "badge": "Chương 4",
        "icon": "cpu",
        "questions": ch4_questions
    },
    "eduso": {
        "id": "eduso",
        "title": "Đề thi Eduso: 45 phút - 100 câu - 200 điểm",
        "subtitle": "Mẫu đề thi trắc nghiệm UTC kèm đáp án và lời giải chi tiết chuẩn xác",
        "docName": "MMT - 18 - BT08 - Trắc nghiệm Eduso - Mẫu đề 45p 100c 200đ.pdf",
        "badge": "Đề thi 100 câu",
        "icon": "award",
        "timeLimit": 45 * 60, # 45 minutes in seconds
        "totalScore": 200,
        "questions": eduso_questions
    }
}

json_str = json.dumps(quiz_data, ensure_ascii=False, indent=2)
js_content = f"// Dữ liệu ngân hàng câu hỏi trắc nghiệm Mạng máy tính UTC\nconst QUIZ_DATA = {json_str};\n"

with open("quiz_data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated quiz_data.js successfully!")
print(f"- Chương 1: {len(ch1_questions)} câu")
print(f"- Chương 2: {len(ch2_questions)} câu")
print(f"- Chương 3: {len(ch3_questions)} câu")
print(f"- Chương 4: {len(ch4_questions)} câu")
print(f"- Đề Eduso: {len(eduso_questions)} câu")
print(f"Tổng cộng: {len(ch1_questions) + len(ch2_questions) + len(ch3_questions) + len(ch4_questions) + len(eduso_questions)} câu hỏi!")

