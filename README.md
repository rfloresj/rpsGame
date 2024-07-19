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

## Instructions
### Prerequisites
Ensure you have Node.js installed on your machine. You can download it from nodejs.org.

1. Clone the repository:
```
git clone https://github.com/yourusername/rpsGame.git
cd rpsGame
```
2. Install dependencies
```
npm install console-table-printer
```

### Usage

1. Run the game with at least three unique moves (must be an odd number):
```
node index.js rock paper scissors
```

2. Follow the prompts:
 * You will see an HMAC hash of the computer's move.
 * A list of available moves will be displayed.
 * Enter the number corresponding to your move, 0 to exit, or ? for help.

3. The game will display the outcome (win, lose, or draw) and reveal the computer's move and HMAC key.

Example
```
$ node index.js rock paper scissors lizard spock
HMAC: 3a1f1e63e240a8edb6f3b54a76045a5f1a6478a3a8d3c0db7f07a2c6d8dfb29a
Available moves:
1 - rock
2 - paper
3 - scissors
4 - lizard
5 - spock
0 - exit
? - help
Enter your move: 3
Your move: scissors
Computer move: paper
You win!
HMAC key: 48d4e463e01b4fb0b445bff7e6a907dc
```
### Help Table
Help Table
to display the help table showing possible outcomes for all move combinations, enter ? at the prompt.
