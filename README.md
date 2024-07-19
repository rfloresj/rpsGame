# rpsGame
A generalized rock-paper-scissors CLI game with arbitrary number of moves and confirmation of the computer's move impartiality.

Project Structure

```
rpsGame/
│
├── index.js
├── utils/
│   ├── KeyGenerator.js
│   ├── HMACGenerator.js
│   └── validateArgs.js
├── models/
│   ├── Game.js
│   └── HelpTable.js
└── controllers/
    └── gameController.js

```

## Overview
The **rpsGame** project is a command-line generalized implementation of the classic "Rock, Paper, Scissors" game, extended to support any odd number of moves.
The game allows users to play against the computer, which selects its move randomly.
The outcome (win, lose, or draw) is determined based on a predefined set of rules.
The game also includes a help feature that displays a table showing the possible outcomes of all move combinations.

## Features
Command-line interface for user interaction.
Secure random key generation using HMAC for move validation.
Modular design with separate components for key generation, HMAC generation, game logic, and user prompts.
Help table displaying possible outcomes for all move combinations.

## Technologies Used
* Node.js for server-side JavaScript execution.
* crypto module for secure random key and HMAC generation.
* readline module for handling command-line input.
* console-table-printer for displaying the help table in a formatted way.
