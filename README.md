🪨 📄 ✂️ Ro Cham Bo

Ro Cham Bo is a simple, interactive Rock–Paper–Scissors web game built with HTML, CSS, and JavaScript. It allows a user to play against an automated opponent (“RO-Bot”) with real-time score tracking and visual feedback.

This project is designed as a lightweight browser game and as a demonstration of clean DOM manipulation, event handling, and basic game logic in vanilla JavaScript.

🎮 Features

Play Rock, Paper, or Scissors against an AI opponent

Randomized computer move selection

Live score tracking:

Wins

Losses

Ties

Persistent score storage using localStorage

Visual move display with icons

Reset score functionality

Responsive, minimalist UI

🧠 How It Works

The player selects a move by clicking a button.

RO-Bot randomly selects a move.

The game logic determines the outcome:

Win

Loss

Tie

Scores update immediately and are saved locally in the browser.

The selected moves are displayed using icons for visual clarity.

🛠️ Tech Stack

HTML5 – Structure

CSS3 – Styling and layout

Vanilla JavaScript (ES6) – Game logic, DOM manipulation, and state management

LocalStorage API – Persistent score tracking

📂 Project Structure
ro-cham-bo/
│
├── index.html
├── styles/
│   └── 12-rock-paper-scissors.css
├── scripts/
│   └── 12-rock-paper-scissors.js
└── images/
    ├── rock-emoji.png
    ├── paper-emoji.png
    └── scissors-emoji.png

🚀 Running the App
Option 1: Open Locally

Simply open index.html in any modern browser.

Option 2: Live Server (Recommended)

If using VS Code:

Install Live Server

Right-click index.html

Select Open with Live Server

🔄 Resetting the Game

Click the Reset Score button to clear all stored results and start fresh.
This removes saved data from localStorage.

📌 Future Improvements (Optional Ideas)

Keyboard controls

Sound effects and animations

Difficulty modes (predictive AI)

Match history log

Mobile-first UI refinements

👤 Author

Mario Alexander Jones
Portfolio: Mario Online

This project is part of a growing collection of interactive demos showcasing frontend fundamentals, UI logic, and creative experimentation.
