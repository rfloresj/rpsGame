const { Table } = require('console-table-printer');

class HelpTable {
  constructor(moves) {
    this.moves = moves;
  }

  generateTable() {
    const table = new Table();
    const header = ['PC\\User >', ...this.moves];
    table.addRow(header, { color: 'cyan' });

    this.moves.forEach((move, index) => {
      const row = [move];
      this.moves.forEach((_, innerIndex) => {
        row.push(this.getResult(index, innerIndex));
      });
      table.addRow(row);
    });

    table.printTable();
  }

  getResult(pcIndex, userIndex) {
    const half = Math.floor(this.moves.length / 2);
    if (pcIndex === userIndex) {
      return 'Draw';
    } else if ((pcIndex - userIndex + this.moves.length) % this.moves.length <= half) {
      return 'Win';
    } else {
      return 'Lose';
    }
  }
}

module.exports = { HelpTable };
