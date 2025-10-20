// EcoMatch VN - Game Logic

// Game State
const gameState = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    score: 0,
    timer: 0,
    timerInterval: null,
    gameStarted: false,
    currentLanguage: 'en' // Default language
};

// Language translations
const translations = {
    en: {
        // Menu Screen
        gameTitle: "🌊 EcoMatch VN ♻️",
        gameSubtitle: "Match cards to learn about plastic pollution in Vietnam",
        playGame: "▶ Play Game",
        causeSorter: "🗂️ Cause Sorter",
        howToPlay: "📖 How to Play",
        about: "ℹ️ About",
        
        // Game Header
        score: "Score:",
        time: "Time:",
        matches: "Matches:",
        resetGame: "🔄 Reset Game",
        mainMenu: "🏠 Main Menu",
        
        // Instructions
        instructionsTitle: "📖 How to Play",
        objective: "Objective:",
        objectiveText: "Match all cause and solution cards to learn about plastic pollution in Vietnam!",
        instruction1: "Click on a card to flip it and reveal the image",
        instruction2: "Click on a second card to find its matching pair",
        instruction3: "Each pair consists of a pollution cause and its solution",
        instruction4: "When you find a match, you'll learn an important environmental fact!",
        instruction5: "Match all 4 pairs as quickly as possible to get a high score",
        instruction6: "Your score increases with each match - faster matches earn bonus points!",
        tip: "💡 Tip:",
        tipText: "Pay attention to the facts - they'll help you understand Vietnam's plastic pollution crisis!",
        backToMenu: "← Back to Menu",
        
        // About
        aboutTitle: "ℹ️ About EcoMatch VN",
        whyMatters: "Why does this matter?",
        whyMattersText: "Vietnam is facing a serious plastic pollution crisis. With over 1.8 million tons of plastic waste generated annually, our beautiful rivers, beaches, and oceans are being choked by plastic debris. This affects marine life, human health, tourism, and our environment.",
        purpose: "The Purpose of This Game:",
        purposeText: "EcoMatch VN is an educational game designed to raise awareness about plastic pollution in Vietnam. Through engaging gameplay, you'll learn about the main causes of plastic pollution and the practical solutions being implemented across the country.",
        whatLearn: "What You'll Learn:",
        learn1: "Real statistics about Vietnam's plastic waste problem",
        learn2: "How pollution affects our environment and economy",
        learn3: "Government initiatives and community solutions",
        learn4: "How you can make a difference in your daily life",
        takeAction: "Take Action:",
        takeActionText: "After playing, consider these actions: use reusable bags, participate in beach cleanups, support recycling programs, and spread awareness about the importance of reducing plastic waste!",
        
        // Results
        congratulations: "🎉 Congratulations!",
        congratsMessage: "You've completed EcoMatch VN!",
        finalScore: "Final Score",
        timeTaken: "Time Taken",
        impactMessage: "🌍 Great job! You've learned 4 important facts about plastic pollution in Vietnam. Now, take action in your daily life to help reduce plastic waste!",
        shareMessage: "💚 Share your achievement and spread awareness!",
        playAgain: "🎮 Play Again",
        
        // Modal
        matchFound: "✓ Match Found!",
        continue: "Continue",
        
        // Sorter
        sorterTitle: "🗂️ Cause Sorter",
        sorterScoreLabel: "Score:",
        sorterProgressLabel: "Sorted:",
        sorterInstruction: "Drag items to the correct category!",
        sorterReset: "🔄 Reset",
        sorterBack: "🏠 Main Menu",
        correct: "✓ Correct!",
        incorrect: "✗ Incorrect",
        wrongCategory: "Wrong category. Correct:",
        completed: "🎉 Completed!",
        completedMessage: "Great job! You've sorted all items correctly. Final score:"
    },
    vi: {
        // Menu Screen
        gameTitle: "🌊 EcoMatch VN ♻️",
        gameSubtitle: "Ghép thẻ để học về ô nhiễm nhựa tại Việt Nam",
        playGame: "▶ Chơi Ngay",
        causeSorter: "🗂️ Phân Loại Nguyên Nhân",
        howToPlay: "📖 Hướng Dẫn",
        about: "ℹ️ Giới Thiệu",
        
        // Game Header
        score: "Điểm:",
        time: "Thời gian:",
        matches: "Cặp ghép:",
        resetGame: "🔄 Chơi Lại",
        mainMenu: "🏠 Về Menu",
        
        // Instructions
        instructionsTitle: "📖 Hướng Dẫn Chơi",
        objective: "Mục tiêu:",
        objectiveText: "Ghép tất cả các cặp thẻ nguyên nhân và giải pháp để học về ô nhiễm nhựa tại Việt Nam!",
        instruction1: "Nhấp vào thẻ để lật và xem hình ảnh",
        instruction2: "Nhấp vào thẻ thứ hai để tìm cặp khớp",
        instruction3: "Mỗi cặp bao gồm một nguyên nhân gây ô nhiễm và giải pháp tương ứng",
        instruction4: "Khi tìm được cặp đúng, bạn sẽ học được một thông tin môi trường quan trọng!",
        instruction5: "Ghép tất cả 4 cặp càng nhanh càng tốt để đạt điểm cao",
        instruction6: "Điểm số tăng với mỗi cặp đúng - ghép nhanh sẽ được điểm thưởng!",
        tip: "💡 Mẹo:",
        tipText: "Chú ý đến các thông tin - chúng giúp bạn hiểu về khủng hoảng ô nhiễm nhựa tại Việt Nam!",
        backToMenu: "← Về Menu",
        
        // About
        aboutTitle: "ℹ️ Giới Thiệu EcoMatch VN",
        whyMatters: "Tại sao điều này quan trọng?",
        whyMattersText: "Việt Nam đang đối mặt với cuộc khủng hoảng ô nhiễm nhựa nghiêm trọng. Với hơn 1.8 triệu tấn rác thải nhựa được tạo ra hàng năm, các dòng sông, bãi biển và đại dương tuyệt đẹp của chúng ta đang bị nhựa làm tắc nghẽn. Điều này ảnh hưởng đến sinh vật biển, sức khỏe con người, du lịch và môi trường.",
        purpose: "Mục đích của trò chơi:",
        purposeText: "EcoMatch VN là trò chơi giáo dục được thiết kế để nâng cao nhận thức về ô nhiễm nhựa tại Việt Nam. Qua gameplay hấp dẫn, bạn sẽ học về các nguyên nhân chính gây ô nhiễm nhựa và các giải pháp thực tế đang được triển khai trên cả nước.",
        whatLearn: "Bạn sẽ học được gì:",
        learn1: "Thống kê thực tế về vấn đề rác thải nhựa của Việt Nam",
        learn2: "Ô nhiễm ảnh hưởng như thế nào đến môi trường và kinh tế",
        learn3: "Các sáng kiến của chính phủ và giải pháp cộng đồng",
        learn4: "Cách bạn có thể tạo ra sự khác biệt trong cuộc sống hàng ngày",
        takeAction: "Hành động ngay:",
        takeActionText: "Sau khi chơi, hãy xem xét các hành động sau: sử dụng túi tái sử dụng, tham gia dọn dẹp bãi biển, hỗ trợ chương trình tái chế và lan tỏa nhận thức về tầm quan trọng của việc giảm rác thải nhựa!",
        
        // Results
        congratulations: "🎉 Chúc Mừng!",
        congratsMessage: "Bạn đã hoàn thành EcoMatch VN!",
        finalScore: "Điểm Cuối",
        timeTaken: "Thời Gian",
        impactMessage: "🌍 Tuyệt vời! Bạn đã học được 4 thông tin quan trọng về ô nhiễm nhựa tại Việt Nam. Bây giờ, hãy hành động trong cuộc sống hàng ngày để giảm rác thải nhựa!",
        shareMessage: "💚 Chia sẻ thành tích và lan tỏa nhận thức!",
        playAgain: "🎮 Chơi Lại",
        
        // Modal
        matchFound: "✓ Tìm Thấy Cặp!",
        continue: "Tiếp Tục",
        
        // Sorter
        sorterTitle: "🗂️ Phân Loại Nguyên Nhân",
        sorterScoreLabel: "Điểm:",
        sorterProgressLabel: "Đã phân loại:",
        sorterInstruction: "Kéo các mục vào đúng danh mục!",
        sorterReset: "🔄 Chơi Lại",
        sorterBack: "🏠 Về Menu",
        correct: "✓ Đúng rồi!",
        incorrect: "✗ Chưa đúng",
        wrongCategory: "Sai danh mục. Đúng:",
        completed: "🎉 Hoàn thành!",
        completedMessage: "Tuyệt vời! Bạn đã phân loại đúng tất cả. Điểm cuối:"
    }
};

// Card pairs (cause-solution matching)
const cardPairs = [
    { id: 1, type: 'cause', image: 'assets/Cause-cards-single-use-plastic.png', match: 5 },      // Single-use plastics -> Reusable bags
    { id: 2, type: 'cause', image: 'assets/Cause-cards-littering.png', match: 6 },      // Littering -> Clean-up campaigns
    { id: 3, type: 'cause', image: 'assets/Cause-cards-fishing-nets.png', match: 7 },      // Ocean pollution -> Recycling
    { id: 4, type: 'cause', image: 'assets/Cause-cards-industrial-waste.png', match: 8 },      // Plastic production -> Government bans
    { id: 5, type: 'solution', image: 'assets/Solution-cards-reusable-bags.png', match: 1 }, // Reusable bags
    { id: 6, type: 'solution', image: 'assets/Solution-cards-clean-up-campaigns.png', match: 2 }, // Clean-up campaigns
    { id: 7, type: 'solution', image: 'assets/Solution-cards-recycling.png', match: 3 }, // Recycling
    { id: 8, type: 'solution', image: 'assets/Solution-cards-government-bans.png', match: 4 }  // Government bans
];

// Educational facts about plastic pollution in Vietnam
const educationalFacts = {
    en: [
        {
            title: "🌊 Plastic Pollution in Vietnam",
            content: "Vietnam generates approximately 1.8 million tons of plastic waste annually, with only 27% being recycled. The majority of remaining plastic waste pollutes the land, water, and ocean environments."
        },
        {
            title: "🛍️ Single-Use Plastic Bags",
            content: "Vietnamese people use an average of 40 billion plastic bags each year. A single plastic bag takes 400-1000 years to fully decompose in the natural environment."
        },
        {
            title: "♻️ Recycling Plastic",
            content: "Recycling 1 ton of plastic can save up to 5,774 kWh of electricity, 685 gallons of oil, 98 million BTU of energy, and 30 cubic meters of landfill space."
        },
        {
            title: "🌍 Impact on Marine Life",
            content: "Over 100,000 marine animals die each year from ingesting or becoming entangled in plastic waste. The South China Sea, where Vietnam has a long coastline, is one of the most severely affected areas."
        }
    ],
    vi: [
        {
            title: "🌊 Ô nhiễm nhựa tại Việt Nam",
            content: "Việt Nam thải ra khoảng 1.8 triệu tấn rác thải nhựa mỗi năm, trong đó chỉ có 27% được tái chế. Phần lớn rác thải nhựa còn lại gây ô nhiễm môi trường đất, nước và biển."
        },
        {
            title: "🛍️ Túi nilon một lần",
            content: "Người Việt Nam sử dụng trung bình 40 tỷ túi nilon mỗi năm. Một túi nilon cần 400-1000 năm mới phân hủy hoàn toàn trong môi trường tự nhiên."
        },
        {
            title: "♻️ Tái chế nhựa",
            content: "Tái chế 1 tấn nhựa có thể tiết kiệm đến 5,774 kWh điện, 685 gallon dầu, 98 triệu BTU năng lượng và 30 m³ không gian chôn lấp rác."
        },
        {
            title: "🌍 Tác động đến sinh vật biển",
            content: "Hơn 100,000 sinh vật biển chết mỗi năm do ăn phải hoặc mắc kẹt trong rác thải nhựa. Biển Đông, nơi Việt Nam có bờ biển dài, là một trong những khu vực bị ảnh hưởng nặng nề nhất."
        }
    ]
};



// Initialize game
function init() {
    // Check if we're on the main index page or a separate page
    const menuScreen = document.getElementById('menu-screen');
    if (menuScreen) {
        // We're on the main index page
        showScreen('menu-screen');
        setupEventListeners();
    }
    // Always update language regardless of which page we're on
    updateLanguage();
}

// Setup event listeners
function setupEventListeners() {
    // Event listeners are handled by onclick in HTML
    // Additional setup can go here if needed
}

// Language Functions
function toggleLanguage() {
    gameState.currentLanguage = gameState.currentLanguage === 'en' ? 'vi' : 'en';
    localStorage.setItem('ecomatch_language', gameState.currentLanguage);
    updateLanguage();
    updateLanguageToggle();
    
    // Reload sorter if on sorter page
    const sorterContainer = document.getElementById('sorter-container');
    if (sorterContainer && sorterContainer.children.length > 0) {
        startSorter();
    }
}

function updateLanguageToggle() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        if (optionLang === gameState.currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function updateLanguage() {
    const lang = gameState.currentLanguage;
    const t = translations[lang];
    
    // Menu Screen
    updateElement('game-title', t.gameTitle);
    updateElement('game-subtitle', t.gameSubtitle);
    updateElement('btn-play', t.playGame);
    updateElement('btn-sorter', t.causeSorter);
    updateElement('btn-instructions', t.howToPlay);
    updateElement('btn-about', t.about);
    
    // Instructions Screen
    updateElement('instructions-title', t.instructionsTitle);
    updateElement('objective-label', t.objective);
    updateElement('objective-text', t.objectiveText);
    updateElement('instruction-1', t.instruction1);
    updateElement('instruction-2', t.instruction2);
    updateElement('instruction-3', t.instruction3);
    updateElement('instruction-4', t.instruction4);
    updateElement('instruction-5', t.instruction5);
    updateElement('instruction-6', t.instruction6);
    updateElement('tip-label', t.tip);
    updateElement('tip-text', t.tipText);
    updateElements('back-to-menu', t.backToMenu);
    
    // About Screen
    updateElement('about-title', t.aboutTitle);
    updateElement('why-matters-label', t.whyMatters);
    updateElement('why-matters-text', t.whyMattersText);
    updateElement('purpose-label', t.purpose);
    updateElement('purpose-text', t.purposeText);
    updateElement('what-learn-label', t.whatLearn);
    updateElement('learn-1', t.learn1);
    updateElement('learn-2', t.learn2);
    updateElement('learn-3', t.learn3);
    updateElement('learn-4', t.learn4);
    updateElement('take-action-label', t.takeAction);
    updateElement('take-action-text', t.takeActionText);
    
    // Game Screen
    updateElement('score-label', t.score);
    updateElement('time-label', t.time);
    updateElement('matches-label', t.matches);
    updateElements('reset-game-btn', t.resetGame);
    updateElements('main-menu-btn', t.mainMenu);
    
    // Results Screen
    updateElement('results-title', t.congratulations);
    updateElement('congrats-message', t.congratsMessage);
    updateElement('final-score-label', t.finalScore);
    updateElement('final-time-label', t.timeTaken);
    updateElement('final-matches-label', t.matches);
    updateElement('impact-message', t.impactMessage);
    updateElement('share-message', t.shareMessage);
    updateElement('play-again-btn', t.playAgain);
    
    // Modal
    updateElement('modal-title', t.matchFound);
    updateElement('modal-continue', t.continue);
    
    // Sorter
    updateElement('sorter-title', t.sorterTitle);
    updateElement('sorter-score-label', t.sorterScoreLabel);
    updateElement('sorter-progress-label', t.sorterProgressLabel);
    updateElement('sorter-instruction-text', t.sorterInstruction);
    updateElement('sorter-reset', t.sorterReset);
    updateElement('sorter-back', t.sorterBack);
}

function updateElement(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

function updateElements(className, text) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(el => {
        el.textContent = text;
    });
}

// Screen management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Reset game if going back to menu from play screen
    if (screenId === 'menu-screen' && gameState.gameStarted) {
        stopTimer();
        gameState.gameStarted = false;
    }
}

// Start game
function startGame() {
    // Stop any existing timer first
    stopTimer();
    
    // Reset game state
    gameState.cards = [];
    gameState.flippedCards = [];
    gameState.matchedPairs = 0;
    gameState.score = 0;
    gameState.timer = 0;
    gameState.gameStarted = false;
    
    updateScore();
    updateMatches();
    updateTimer();
    
    // Only show screen if we're on a single-page app, not on play.html
    const playScreen = document.getElementById('play-screen');
    if (playScreen) {
        showScreen('play-screen');
    }
    
    initializeCards();
    startTimer();
    gameState.gameStarted = true;
}

// Initialize cards
function initializeCards() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    
    // Shuffle cards
    gameState.cards = shuffleArray([...cardPairs]);
    
    // Create card elements
    gameState.cards.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        gameBoard.appendChild(cardElement);
    });
}

// Create card element
function createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.id = card.id;
    cardDiv.dataset.match = card.match;
    cardDiv.dataset.index = index;
    
    cardDiv.innerHTML = `
        <div class="card-face card-back">
            <img src="assets/Card_back.png" alt="Card back">
        </div>
        <div class="card-face card-front">
            <img src="${card.image}" alt="${card.type} card">
        </div>
    `;
    
    cardDiv.addEventListener('click', () => flipCard(cardDiv));
    
    return cardDiv;
}

// Flip card
function flipCard(cardElement) {
    // Prevent flipping if:
    // - Card is already flipped
    // - Two cards are already flipped
    // - Card is already matched
    if (cardElement.classList.contains('flipped') || 
        gameState.flippedCards.length >= 2 ||
        cardElement.classList.contains('matched')) {
        return;
    }
    
    // Flip the card
    cardElement.classList.add('flipped');
    gameState.flippedCards.push(cardElement);
    
    // Check for match if two cards are flipped
    if (gameState.flippedCards.length === 2) {
        // Wait longer to let user see both cards before checking
        setTimeout(checkMatch, 1000);
    }
}

// Check if cards match
function checkMatch() {
    const [card1, card2] = gameState.flippedCards;
    const id1 = parseInt(card1.dataset.id);
    const match1 = parseInt(card1.dataset.match);
    const id2 = parseInt(card2.dataset.id);
    const match2 = parseInt(card2.dataset.match);
    
    // Check if cards match (one's id matches the other's match value)
    if (id1 === match2 && id2 === match1) {
        // Match found!
        handleMatch(card1, card2);
    } else {
        // No match
        handleMismatch(card1, card2);
    }
}

// Handle successful match
function handleMatch(card1, card2) {
    card1.classList.add('matched', 'match-animation');
    card2.classList.add('matched', 'match-animation');
    
    gameState.matchedPairs++;
    gameState.score += 100;
    updateScore();
    
    // Remove animation class after animation completes
    setTimeout(() => {
        card1.classList.remove('match-animation');
        card2.classList.remove('match-animation');
    }, 500);
    
    // Clear flipped cards
    gameState.flippedCards = [];
    
    // Show educational popup
    showEducationalPopup();
    
    // Check if game is complete
    if (gameState.matchedPairs === 4) {
        setTimeout(endGame, 1000);
    }
}

// Handle mismatch
function handleMismatch(card1, card2) {
    card1.classList.add('wrong-animation');
    card2.classList.add('wrong-animation');
    
    // Deduct points for wrong match
    gameState.score = Math.max(0, gameState.score - 10);
    updateScore();
    
    setTimeout(() => {
        card1.classList.remove('flipped', 'wrong-animation');
        card2.classList.remove('flipped', 'wrong-animation');
        gameState.flippedCards = [];
    }, 1000);
}

// Show educational popup
function showEducationalPopup() {
    const lang = gameState.currentLanguage;
    const fact = educationalFacts[lang][gameState.matchedPairs - 1];
    const modal = document.getElementById('fact-modal');
    const factText = document.getElementById('fact-text');
    
    if (fact && modal && factText) {
        factText.innerHTML = `<strong>${fact.title}</strong><br><br>${fact.content}`;
        modal.classList.add('active');
    }
}

// Close popup
function closeFactModal() {
    const modal = document.getElementById('fact-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Timer functions
function startTimer() {
    // Clear any existing timer first to prevent multiple intervals
    stopTimer();
    
    gameState.timer = 0;
    updateTimer();
    gameState.timerInterval = setInterval(() => {
        gameState.timer++;
        updateTimer();
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(gameState.timer / 60);
    const seconds = gameState.timer % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

// Update score
function updateScore() {
    document.getElementById('score').textContent = gameState.score;
}

// Update matches
function updateMatches() {
    const matchesEl = document.getElementById('matches');
    if (matchesEl) {
        matchesEl.textContent = `${gameState.matchedPairs}/4`;
    }
}

// End game
function endGame() {
    stopTimer();
    
    // Calculate time bonus
    const timeBonus = Math.max(0, 500 - gameState.timer * 5);
    gameState.score += timeBonus;
    
    // Save results to localStorage
    const minutes = Math.floor(gameState.timer / 60);
    const seconds = gameState.timer % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    localStorage.setItem('ecomatch_results', JSON.stringify({
        score: gameState.score,
        time: timeString,
        matches: '4/4'
    }));
    
    // Redirect to results page
    setTimeout(() => {
        window.location.href = 'results.html';
    }, 1000);
}

// Play again
function playAgain() {
    window.location.href = 'play.html';
}

// Reset game
function resetGame() {
    stopTimer();
    gameState.cards = [];
    gameState.flippedCards = [];
    gameState.matchedPairs = 0;
    gameState.score = 0;
    gameState.timer = 0;
    gameState.gameStarted = false;
    
    updateScore();
    updateMatches();
    updateTimer();
    
    // Clear and reinitialize the game board
    const gameBoard = document.getElementById('game-board');
    if (gameBoard) {
        gameBoard.innerHTML = '';
        initializeCards();
        startTimer();
        gameState.gameStarted = true;
    }
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// ========== SORTER FUNCTIONS ==========

// Sorter game state
const sorterState = {
    score: 0,
    sortedCount: 0,
    totalItems: 8
};

// Start sorter game
function startSorter() {
    // Static data từ research (không dùng GPT)
    const sorterData = {
        categories: {
            en: ['Daily Use', 'Industrial', 'Poor Management'],
            vi: ['Sinh Hoạt', 'Công Nghiệp', 'Thiếu Quản Lý']
        },
        items: {
            en: [
                {id: 'item1', text: 'Single-use plastic bags', category: 'Daily Use', fact: 'Accounts for 7-8% of daily waste in Hanoi, with 40 billion bags/year from consumer habits (UNDP 2024).'},
                {id: 'item2', text: 'Styrofoam food containers', category: 'Daily Use', fact: 'Throwaway culture from urban population generates 4,000-5,000 tons of waste/day, plastic占a large portion (ResearchGate 2025).'},
                {id: 'item3', text: 'Plastic beverage bottles', category: 'Daily Use', fact: 'Widespread daily use contributes to 1.8 million tons of plastic/year (Vietcetera).'},
                {id: 'item4', text: 'Industrial plastic production', category: 'Industrial', fact: 'Upsurge in production generates 1.8 million tons/year, mainly from factories (UNDP 2024).'},
                {id: 'item5', text: 'Plastic waste imports for recycling', category: 'Industrial', fact: 'Large imports but outdated technology causes high pollution (ResearchGate 2024).'},
                {id: 'item6', text: 'Ineffective recycling', category: 'Industrial', fact: 'Only 11-12% of plastic is recycled, low technology leads to high costs (Trade.gov 2024).'},
                {id: 'item7', text: 'Untreated landfills', category: 'Poor Management', fact: '85% of waste is landfilled without treatment, causing soil and ocean pollution (ICLEI 2022).'},
                {id: 'item8', text: 'Weak regulations', category: 'Poor Management', fact: '90% of ocean waste from land due to poor management, waste will double in 15 years (Trade.gov 2024).'}
            ],
            vi: [
                {id: 'item1', text: 'Túi nylon dùng một lần', category: 'Sinh Hoạt', fact: 'Chiếm 7-8% rác hàng ngày ở Hà Nội, với 40 tỷ túi/năm từ thói quen tiêu dùng (UNDP 2024).'},
                {id: 'item2', text: 'Hộp xốp thực phẩm', category: 'Sinh Hoạt', fact: 'Throwaway culture từ dân đô thị thải 4,000-5,000 tấn rác/ngày, nhựa chiếm lớn (ResearchGate 2025).'},
                {id: 'item3', text: 'Chai nhựa nước uống', category: 'Sinh Hoạt', fact: 'Sử dụng phổ biến hàng ngày góp phần vào 1.8 triệu tấn nhựa/năm (Vietcetera).'},
                {id: 'item4', text: 'Sản xuất nhựa công nghiệp', category: 'Công Nghiệp', fact: 'Sản xuất tăng vọt thải 1.8 triệu tấn/năm, chủ yếu từ nhà máy (UNDP 2024).'},
                {id: 'item5', text: 'Nhập khẩu rác nhựa tái chế', category: 'Công Nghiệp', fact: 'Nhập khẩu lớn nhưng công nghệ lỗi thời gây ô nhiễm cao (ResearchGate 2024).'},
                {id: 'item6', text: 'Thiếu tái chế hiệu quả', category: 'Công Nghiệp', fact: 'Chỉ 11-12% nhựa tái chế, công nghệ thấp dẫn đến chi phí cao (Trade.gov 2024).'},
                {id: 'item7', text: 'Chôn lấp không xử lý', category: 'Thiếu Quản Lý', fact: '85% rác chôn lấp không xử lý, gây ô nhiễm đất và biển (ICLEI 2022).'},
                {id: 'item8', text: 'Quy định yếu kém', category: 'Thiếu Quản Lý', fact: '90% rác biển từ đất liền do quản lý kém, rác thải gấp đôi trong 15 năm (Trade.gov 2024).'}
            ]
        }
    };

    const lang = gameState.currentLanguage;
    const categories = sorterData.categories[lang];
    const items = sorterData.items[lang];
    
    // Clear container
    const sorterContainer = document.getElementById('sorter-container');
    sorterContainer.innerHTML = '';
    
    // Create drop zones container
    const zonesContainer = document.createElement('div');
    zonesContainer.classList.add('drop-zones');
    
    // Create drop zones
    categories.forEach(cat => {
        const zone = document.createElement('div');
        zone.id = cat.replace(/\s+/g, '-').toLowerCase(); // ID dạng 'daily-use'
        zone.classList.add('drop-zone');
        zone.innerHTML = `<h3>${cat}</h3>`;
        zone.ondrop = dropItem;
        zone.ondragover = allowDrop;
        zone.ondragleave = dragLeave;
        zone.ondragenter = dragEnter;
        zonesContainer.appendChild(zone);
    });
    
    sorterContainer.appendChild(zonesContainer);
    
    // Create draggable items container
    const itemsDiv = document.createElement('div');
    itemsDiv.id = 'items-list';
    
    // Shuffle items
    const shuffledItems = shuffleArray([...items]);
    
    shuffledItems.forEach(item => {
        const el = document.createElement('div');
        el.id = item.id;
        el.draggable = true;
        el.textContent = item.text;
        el.classList.add('draggable-item');
        el.dataset.category = item.category;
        el.dataset.categoryId = item.category.replace(/\s+/g, '-').toLowerCase();
        el.dataset.fact = item.fact;
        el.ondragstart = dragItem;
        el.ondragend = dragEnd;
        itemsDiv.appendChild(el);
    });
    
    sorterContainer.appendChild(itemsDiv);
    
    // Reset score
    sorterState.score = 0;
    sorterState.sortedCount = 0;
    updateSorterScore();
}

function allowDrop(ev) { 
    ev.preventDefault(); 
}

function dragEnter(ev) {
    if (ev.target.classList.contains('drop-zone')) {
        ev.target.classList.add('drag-over');
    }
}

function dragLeave(ev) {
    if (ev.target.classList.contains('drop-zone')) {
        ev.target.classList.remove('drag-over');
    }
}

function dragItem(ev) { 
    ev.dataTransfer.setData('text', ev.target.id);
    ev.target.classList.add('dragging');
}

function dragEnd(ev) {
    ev.target.classList.remove('dragging');
    // Remove drag-over from all zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.classList.remove('drag-over');
    });
}

function dropItem(ev) {
    ev.preventDefault();
    const itemId = ev.dataTransfer.getData('text');
    const item = document.getElementById(itemId);
    
    if (!item) return;
    
    // Remove drag-over class
    ev.target.classList.remove('drag-over');
    
    // Get the drop zone (handle if dropped on child element)
    let dropZone = ev.target;
    if (!dropZone.classList.contains('drop-zone')) {
        dropZone = dropZone.closest('.drop-zone');
    }
    
    if (!dropZone) return;
    
    // Check if correct
    const isCorrect = dropZone.id === item.dataset.categoryId;
    
    const lang = gameState.currentLanguage;
    const t = translations[lang];
    
    if (isCorrect) {
        // Correct placement
        sorterState.score += 20;
        sorterState.sortedCount++;
        updateSorterScore();
        
        // Move item to zone
        dropZone.appendChild(item);
        item.classList.add('placed');
        item.draggable = false; // Prevent further dragging
        
        showSorterModal(t.correct, item.dataset.fact, true);
        
        // Check if all items are sorted
        if (sorterState.sortedCount === sorterState.totalItems) {
            setTimeout(() => {
                const completeMsg = `${t.completedMessage} ${sorterState.score}`;
                showSorterModal(t.completed, completeMsg, true);
            }, 1500);
        }
    } else {
        // Wrong placement - return to items list
        const itemsList = document.getElementById('items-list');
        if (itemsList) {
            itemsList.appendChild(item);
        }
        
        const message = `${t.wrongCategory} ${item.dataset.category}. ${item.dataset.fact}`;
        showSorterModal(t.incorrect, message, false);
    }
}

function showSorterModal(title, message, isCorrect) {
    const modal = document.getElementById('resultModal');
    const titleEl = document.getElementById('modal-title');
    const messageEl = document.getElementById('modal-message');
    const continueBtn = document.getElementById('modal-continue');
    
    titleEl.textContent = title;
    titleEl.style.color = isCorrect ? '#4caf50' : '#f44336';
    messageEl.textContent = message;
    
    // Update continue button text
    const lang = gameState.currentLanguage;
    const t = translations[lang];
    continueBtn.textContent = t.continue;
    
    // Show modal without backdrop
    modal.classList.add('show');
    modal.style.display = 'block';
    modal.removeAttribute('aria-hidden');
    document.body.classList.add('modal-open');
    
    // Focus on the continue button
    setTimeout(() => {
        continueBtn.focus();
    }, 100);
}

function closeSorterModal() {
    const modal = document.getElementById('resultModal');
    const bsModal = bootstrap.Modal.getInstance(modal);
    if (bsModal) {
        bsModal.hide();
    }
}

function updateSorterScore() {
    const scoreEl = document.getElementById('sorter-score');
    const countEl = document.getElementById('sorted-count');
    
    if (scoreEl) {
        scoreEl.textContent = sorterState.score;
    }
    if (countEl) {
        countEl.textContent = `${sorterState.sortedCount}/${sorterState.totalItems}`;
    }
}

function resetSorter() {
    startSorter();
}
