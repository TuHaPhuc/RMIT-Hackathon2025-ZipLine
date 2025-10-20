# 🌊 EcoMatch VN - Plastic Pollution Memory Game

![EcoMatch VN](game_app/assets/Background.png)

## 📖 Giới thiệu / Overview

**EcoMatch VN** là một trò chơi lật thẻ giáo dục tập trung vào vấn đề ô nhiễm nhựa tại Việt Nam. Người chơi sẽ ghép cặp các nguyên nhân gây ô nhiễm nhựa với các giải pháp tương ứng, đồng thời học hỏi các sự thật quan trọng về tác động của rác thải nhựa đối với môi trường Việt Nam.

**EcoMatch VN** is an educational memory card game focused on plastic pollution in Vietnam. Players match causes of plastic pollution with their corresponding solutions while learning important facts about the impact of plastic waste on Vietnam's environment.

## 🎮 Gameplay

### Collection of Mini-Games / Bộ sưu tập mini-games

EcoMatch VN hiện bao gồm 2 mini-games tương tác:

1. **🎮 Card Matching** - Trò chơi lật thẻ ghép cặp nguyên nhân-giải pháp
2. **️ Cause Sorter** - Phân loại nguyên nhân bằng kéo-thả (drag-drop)

### Cách chơi / How to Play

#### Card Matching (Ghép Thẻ)
1. **Bắt đầu trò chơi** - Nhấn nút "🎮 Card Matching" từ menu chính
2. **Lật thẻ** - Click vào 2 thẻ để lật và xem hình ảnh
3. **Ghép cặp** - Ghép các nguyên nhân (Cause) với giải pháp (Solution) phù hợp:
   - 🛍️ Single-use plastics ➡️ ♻️ Reusable bags
   - 🗑️ Littering ➡️ 🧹 Clean-up campaigns
   - 🌊 Ocean pollution ➡️ ♻️ Recycling
   - 🏭 Plastic production ➡️ 📜 Government bans
4. **Học hỏi** - Sau mỗi cặp đúng, đọc thông tin giáo dục về ô nhiễm nhựa tại VN
5. **Hoàn thành** - Ghép đủ 4 cặp để thắng game!

#### Cause Sorter (Phân Loại Nguyên Nhân)
1. **Bắt đầu** - Nhấn "🗂️ Cause Sorter"
2. **Kéo thả** - Kéo 8 mục vào 3 danh mục:
   - 🏠 **Sinh Hoạt** (Daily Life) - Túi nilon, chai nước, ống hút
   - 🏭 **Công Nghiệp** (Industrial) - Bao bì công nghiệp, phế liệu nhà máy
   - 📋 **Thiếu Quản Lý** (Poor Management) - Rác không phân loại, thiếu thu gom
3. **Phân loại** - Thả đúng vị trí để ghi điểm (+20/mục)
4. **Hoàn thành** - Phân loại đủ 8 mục

### Tính điểm / Scoring

- **Card Matching**: ✅ +100 điểm/cặp đúng | ❌ -10 điểm/cặp sai | ⏱️ Time bonus
- **Cause Sorter**: ✅ +20 điểm/mục đúng (tối đa 160 điểm)
- 💾 **Shared scoring** - Điểm số được lưu trong localStorage và cộng dồn qua các mini-games

## 🎯 Mục tiêu giáo dục / Educational Goals

Trò chơi này nhằm:
- 🌍 Nâng cao nhận thức về ô nhiễm nhựa tại Việt Nam
- 📚 Giáo dục về nguyên nhân và giải pháp
- 💡 Khuyến khích hành động bảo vệ môi trường
- 🎓 Cung cấp thông tin thống kê thực tế về tình hình rác thải nhựa

## 🛠️ Công nghệ / Technology Stack

### Frontend
- **HTML5** - 7-page architecture (index, play, quiz, sorter, instructions, about, results)
- **CSS3** - Advanced styling với animations, responsive design, backdrop filters, drag-drop UI
- **JavaScript (Vanilla)** - 850+ lines: game logic, localStorage management
- **Bootstrap 5.3.2** - Responsive grid system và utilities

### Features
- 🌐 **Bilingual Support** - EN/VI language toggle với localStorage persistence
- 🎨 **Modern UI/UX** - Gradient backgrounds, glass-morphism effects, smooth animations
- 📱 **Fully Responsive** - Mobile-first design (320px+), tablet, desktop optimized
- 🎮 **Interactive Elements** - Pill-style language toggle, card flip, drag-drop, modal popups
- 🗂️ **HTML5 Drag API** - Native drag-and-drop mechanics for Cause Sorter
- 💾 **Persistent Storage** - Game progress và scores saved via localStorage
- 🔒 **No Backend Required** - 100% client-side, runs in any browser

### Assets
- **Custom illustrations** - AI-generated với Gemini Nano/Banana
- **Background image** - Custom ocean/nature theme với gradient overlay
- **Card designs** - 8 unique cards (4 causes + 4 solutions)

### Không cần cài đặt / No Installation Required
Trò chơi chạy hoàn toàn trên trình duyệt web, không cần backend hay database.

## 🚀 Cách chạy game / How to Run

### Phương pháp 1: Mở trực tiếp (Recommended)

1. Download hoặc clone repository này
2. Mở file `game_app/index.html` bằng trình duyệt web (Chrome, Firefox, Safari, Edge)
3. Bắt đầu chơi ngay!

```bash
# Clone repository
git clone https://github.com/TuHaPhuc/RMIT-Hackathon2025-ZipLine.git

# Mở folder
cd RMIT-Hackathon2025-ZipLine/game_submission/game_app

# Mở index.html bằng trình duyệt
# Windows: start index.html
# Mac: open index.html
# Linux: xdg-open index.html
```

### Phương pháp 2: Sử dụng Local Server

```bash
# How to run 
start index.html 
```

## 📁 Cấu trúc Project / Project Structure

```
game_submission/
├── game_app/
│   ├── index.html              # Main menu page
│   ├── play.html               # Card matching game
│   ├── sorter.html             # Cause sorter drag-drop game
│   ├── instructions.html       # How to play page
│   ├── about.html              # About the game page
│   ├── results.html            # Game results page
│   ├── style.css               # Complete styling (1100+ lines)
│   ├── script.js               # Game logic (850+ lines)
│   └── assets/                 # Game assets (10 images)
│       ├── Background.png      # Ocean/nature background
│       ├── Card_back.png       # Card back design
│       ├── Cause-cards-single-use-plastic.png
│       ├── Cause-cards-littering.png
│       ├── Cause-cards-fishing-nets.png
│       ├── Cause-cards-industrial-waste.png
│       ├── Solution-cards-reusable-bags.png
│       ├── Solution-cards-clean-up-campaigns.png
│       ├── Solution-cards-recycling.png
│       └── Solution-cards-government-bans.png
├── prompts/
│   ├── concept_prompts.txt                # Game concept & ideation (Grok)
│   ├── asset_generation_prompts.txt       # Image generation (Gemini Nano/Banana)
│   ├── code_generation_prompts.txt        # Code implementation (ChatGPT-4)
│   └── refinement_prompts.txt             # Bug fixes & improvements (Claude)
├── screenshots/
│   ├── menu_screen.png         # Main menu screenshot
│   ├── play_screen1.png        # Card matching gameplay
│   ├── play_screen2.png        # Match found modal
│   ├── play_screen3.png        # Sorter drag-drop
│   └── results_screen.png      # Game completion
├── README.md                   # This file
├── project_report.md           # Detailed project report (Markdown)
├── project_report.pdf          # PDF version of report
└── youtube_link.txt            # Link to demo video
```

## 🎨 Game Features

### ✨ Animations & Visual Effects
- 🔄 Smooth 3D card flip animations (transform: rotateY)
- ✅ Match success animations with green glow
- ❌ Mismatch shake animations
- 🎯 Responsive design cho mobile, tablet & desktop
- 🎨 Color scheme xanh lá (green) theme - biểu tượng của môi trường
- 🌊 Background image với gradient overlay
- ✨ Glass-morphism effects (backdrop-filter: blur)
- 💫 Hover effects và transitions

### 🌐 Multi-Language Support
- 🇬🇧 English / 🇻🇳 Tiếng Việt
- 🎛️ Modern pill-style language toggle (green gradient)
- 💾 Language preference saved in localStorage
- 📝 Full translations cho tất cả UI elements và educational content

### 📱 Responsive Design
- 📱 Mobile (320px+): 2-column card grid
- � Tablet (768px+): 4-column card grid
- 💻 Desktop (1024px+): Optimized layout với max-width 900px
- 🎮 Touch và mouse support
- 📐 Flexible card sizing (max 160px on desktop, responsive on mobile)

### 🎯 Game Mechanics
- ⏱️ Live timer tracking thời gian chơi
- 📊 Dynamic scoring system (+100 match, -10 wrong)
- 🎓 Educational modal popups sau mỗi match
- 🔄 Reset button để chơi lại (fully functional)
- � Results saved to localStorage
- 🎮 Visual feedback cho mọi action

## 📊 Educational Content

Game cung cấp 4 thông tin quan trọng về ô nhiễm nhựa tại Việt Nam:

1. **Thống kê rác thải**: 1.8 triệu tấn/năm, chỉ 27% được tái chế
2. **Túi nilon**: 40 tỷ túi/năm, phân hủy mất 400-1000 năm
3. **Lợi ích tái chế**: Tiết kiệm năng lượng và tài nguyên
4. **Tác động sinh vật biển**: 100,000 sinh vật chết/năm

## 🎥 Demo & Screenshots

- 📺 Video demo: [Link trong youtube_link.txt]
- 🖼️ Screenshots: Xem folder `screenshots/`

## 👨‍💻 Development Process

Game được phát triển qua các bước:

1. **Concept Development** - Brainstorm ý tưởng về plastic pollution
2. **Asset Generation** - Tạo hình ảnh với AI tools
3. **Code Implementation** - Xây dựng game logic
4. **Testing & Refinement** - Test và tối ưu hóa
5. **Documentation** - Viết docs và report

## 🌟 Key Learning Outcomes

Sau khi chơi game, người chơi sẽ:
- ✅ Hiểu rõ hơn về tình trạng ô nhiễm nhựa tại Việt Nam
- ✅ Nhận biết được các nguyên nhân chính
- ✅ Biết các giải pháp thực tế có thể áp dụng
- ✅ Có động lực thay đổi hành vi tiêu dùng nhựa

## 🤝 Contributing

Đây là project cho RMIT Hackathon 2025. Nếu bạn muốn đóng góp:
- 🐛 Report bugs qua GitHub Issues
- 💡 Suggest features hoặc improvements
- 🎨 Contribute assets hoặc educational content

## 📝 License

Project này được tạo cho mục đích giáo dục trong RMIT Hackathon 2025.

## 📧 Contact

- **GitHub**: [TuHaPhuc](https://github.com/TuHaPhuc)
- **Repository**: [RMIT-Hackathon2025-ZipLine](https://github.com/TuHaPhuc/RMIT-Hackathon2025-ZipLine)

## 🙏 Acknowledgments

- RMIT University Vietnam - Hackathon 2025
- AI Tools: ChatGPT, Gemini Banana, Claude (cho asset generation và code assistance)
- Plastic pollution data sources: Vietnam Environment Administration, UN Environment Programme

---

**🌱 Hãy cùng nhau bảo vệ môi trường! Let's protect our environment together!**
