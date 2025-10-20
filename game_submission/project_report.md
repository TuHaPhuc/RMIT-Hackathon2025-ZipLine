# EcoMatch VN - Project Report

## 1. Introduction

**EcoMatch VN** is an educational memory card game designed to raise awareness about plastic pollution in Vietnam. The game combines entertainment with education, challenging players to match causes of plastic pollution with their corresponding solutions while learning critical facts about environmental impact.

### Project Overview
- **Game Type**: Educational Memory Card Game
- **Target Audience**: Students, young adults, and environmentally conscious individuals
- **Platform**: Web-based (HTML5/CSS3/JavaScript)
- **Social Issue**: Plastic Pollution in Vietnam

## 2. Theme Justification: Why Plastic Pollution in Vietnam?

### 2.1 The Scale of the Problem

Vietnam faces a significant plastic pollution crisis:
- **1.8 million tons** of plastic waste generated annually
- Only **27%** recycling rate, leaving 73% to pollute the environment
- **40 billion** plastic bags used per year
- One of the top contributors to ocean plastic waste in Southeast Asia

### 2.2 Environmental Impact

The consequences are severe:
- Marine life: Over 100,000 marine animals die annually from plastic waste globally, with Vietnam's coastal waters heavily affected
- Ecosystem damage: Plastic takes 400-1,000 years to decompose
- Health concerns: Microplastics entering the food chain
- Economic cost: Damage to tourism and fishing industries

### 2.3 Why This Theme Matters

1. **Local Relevance**: Focuses specifically on Vietnam's context
2. **Urgent Action Needed**: Growing problem requiring immediate awareness
3. **Youth Engagement**: Young people are key to driving change
4. **Actionable Solutions**: Game presents practical steps individuals can take

## 3. Game Design & Mechanics

### 3.1 Gameplay Mechanics

**Core Concept**: Memory matching game with educational twist
- 8 cards total: 4 causes + 4 solutions
- Players flip two cards at a time
- Match causes with appropriate solutions
- Educational popup appears after each correct match

### 3.2 Cause-Solution Pairs

1. **Single-use plastics** → **Reusable bags**
2. **Littering** → **Clean-up campaigns**
3. **Ocean pollution** → **Recycling programs**
4. **Plastic production** → **Government bans**

### 3.3 Scoring System

- **+100 points** for each correct match
- **-10 points** for each incorrect match
- **Time bonus** for faster completion
- Encourages efficiency and learning

### 3.4 Educational Integration

After each successful match, players receive facts about:
- Plastic waste statistics in Vietnam
- Environmental impact data
- Benefits of recycling and reduction
- Real-world consequences

## 4. Technical Implementation

### 4.1 Technology Stack

**Frontend Technologies:**
- **HTML5**: Semantic structure, accessibility features
- **CSS3**: Modern styling with animations
  - CSS Grid for responsive card layout
  - CSS Animations for card flips and feedback
  - Media queries for mobile responsiveness
- **JavaScript (Vanilla)**: Pure JavaScript for game logic
  - No frameworks - lightweight and fast
  - Event-driven architecture
  - State management

### 4.2 Key Features

**Visual Design:**
- Green and blue color scheme (environmental theme)
- Smooth card flip animations (3D transforms)
- Responsive design (mobile, tablet, desktop)
- Intuitive user interface

**Game Features:**
- Timer to track playing time
- Score tracking with bonuses
- Educational popups with Vietnamese facts
- Multiple screens (Menu, Game, Instructions, About)
- Game over summary with statistics

### 4.3 Code Architecture

```
Game State Management
├── Card matching logic
├── Score calculation
├── Timer management
└── Educational content delivery

User Interface
├── Menu system
├── Game board with grid layout
├── Popup modals
└── Responsive components

Animations
├── Card flip effects
├── Match success animations
├── Mismatch feedback
└── Screen transitions
```

## 5. Asset Creation Process

### 5.1 AI-Generated Assets

All visual assets were created using AI image generation tools:

**Tools Used:**
- DALL-E 3
- Midjourney
- Leonardo.ai
- Stable Diffusion

**Asset Categories:**
1. **Background**: Vietnamese coastal scene with ocean and plastic waste
2. **Card Back**: Eco-friendly design with recycling symbols
3. **Cause Cards**: Visual representations of pollution causes
4. **Solution Cards**: Positive imagery of environmental solutions

### 5.2 Design Principles

- **Cultural Relevance**: Vietnamese context and imagery
- **Visual Clarity**: Easy to understand at a glance
- **Emotional Impact**: Convey urgency without being overwhelming
- **Color Psychology**: Green (hope/nature), Blue (ocean), contrasted with pollution imagery

## 6. Educational Impact

### 6.1 Learning Objectives

Players will be able to:
1. Identify major causes of plastic pollution in Vietnam
2. Match problems with appropriate solutions
3. Recall key statistics about plastic waste
4. Understand environmental consequences
5. Recognize actionable steps they can take

### 6.2 Knowledge Retention

The game promotes learning through:
- **Active Engagement**: Interactive matching vs. passive reading
- **Repetition**: Multiple attempts reinforce learning
- **Immediate Feedback**: Educational popups after correct matches
- **Gamification**: Scoring encourages completion and mastery

### 6.3 Behavior Change Potential

By connecting causes to solutions, players:
- See the direct relationship between actions and consequences
- Learn practical alternatives to harmful behaviors
- Feel empowered to make environmental choices
- Share knowledge with others

## 7. Development Process

### 7.1 Phase 1: Concept Development

- Research on plastic pollution in Vietnam
- Brainstorming game mechanics
- Identifying educational objectives
- Defining target audience

### 7.2 Phase 2: Design & Assets

- Creating prompt engineering for AI art generation
- Generating and refining visual assets
- Designing user interface mockups
- Planning user experience flow

### 7.3 Phase 3: Implementation

- Building HTML structure
- Developing CSS animations and responsive design
- Implementing game logic in JavaScript
- Integrating educational content

### 7.4 Phase 4: Testing & Refinement

- Testing gameplay mechanics
- Ensuring cross-browser compatibility
- Optimizing performance
- Gathering feedback and iterating

## 8. Challenges & Solutions

### 8.1 Challenges Faced

1. **Asset Consistency**: Getting AI to generate consistent visual style
   - **Solution**: Refined prompts, multiple iterations
   
2. **Responsive Design**: Making game playable on all devices
   - **Solution**: CSS Grid with media queries, tested on multiple screen sizes
   
3. **Educational Balance**: Informative without being preachy
   - **Solution**: Short, impactful facts with Vietnamese context

4. **Performance**: Smooth animations without lag
   - **Solution**: CSS transforms instead of JavaScript animations

### 8.2 Technical Decisions

- **Why Vanilla JavaScript?**: Lightweight, no dependencies, faster loading
- **Why No Backend?**: Simplicity, no server needed, easy to deploy
- **Why Card Matching?**: Familiar mechanic, clear cause-solution relationship

## 9. Future Improvements

### 9.1 Potential Enhancements

1. **Multiple Difficulty Levels**: More cards, harder matches
2. **Multiplayer Mode**: Compete with friends
3. **Leaderboard**: Track high scores
4. **More Languages**: English, Vietnamese full translations
5. **Sound Effects**: Audio feedback for actions
6. **More Topics**: Expand to other environmental issues
7. **Social Sharing**: Share scores and facts on social media

### 9.2 Scalability

The modular code structure allows for:
- Easy addition of new card pairs
- Simple content updates
- Quick theme modifications
- Framework integration if needed

## 10. Reflection & Learning

### 10.1 Personal Growth

This project enhanced skills in:
- **AI Prompt Engineering**: Creating effective prompts for image generation
- **Game Design**: Understanding player engagement and education
- **Front-end Development**: Modern CSS and JavaScript techniques
- **Environmental Awareness**: Deep dive into plastic pollution issue

### 10.2 Impact Assessment

The game successfully:
- ✅ Addresses a serious social issue (plastic pollution)
- ✅ Makes learning interactive and engaging
- ✅ Provides actionable solutions
- ✅ Targets Vietnamese context specifically
- ✅ Works on any device with a browser

### 10.3 Key Takeaways

1. **Education Through Play**: Games can be powerful educational tools
2. **Local Context Matters**: Generic solutions don't resonate as well
3. **AI as Creative Tool**: AI can accelerate creative processes
4. **Simplicity Works**: Simple mechanics can convey complex messages

## 11. Conclusion

**EcoMatch VN** demonstrates how game-based learning can address serious environmental challenges. By combining engaging gameplay with factual education about plastic pollution in Vietnam, the game aims to raise awareness and inspire action among players.

The project showcases:
- Technical proficiency in web development
- Creative use of AI tools for asset generation
- Understanding of educational game design
- Commitment to addressing social issues

Most importantly, it contributes to the critical conversation about environmental protection in Vietnam, empowering individuals to recognize their role in solving the plastic pollution crisis.

---

## 12. References & Data Sources

- Vietnam Environment Administration (VEA)
- UN Environment Programme - Vietnam
- World Bank - Vietnam Plastic Waste Management Report
- Ocean Conservancy - Marine Debris Research
- Vietnamese Ministry of Natural Resources and Environment

---

**Project Created For**: RMIT Hackathon 2025 - Challenge 3
**Developer**: Tu Ha Phuc
**Date**: October 2025
**Repository**: https://github.com/TuHaPhuc/RMIT-Hackathon2025-ZipLine
