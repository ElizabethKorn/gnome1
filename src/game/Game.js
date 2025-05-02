import Gnome from './Gnome.js';

export default class Game {
  constructor(rows, cols, gnomeImage) {
    this.rows = rows;
    this.cols = cols;
    this.gnomeImage = gnomeImage;
    this.board = null;
    this.gnome = null;
    this.intervalId = null;
    this.moveInterval = 1000;
  }

  init() {
    this.createBoard();
    this.gnome = new Gnome(this.gnomeImage, this.rows, this.cols);
    this.placeGnomeRandomly();
    this.startMoving();
  }

  createBoard() {
    this.board = document.getElementById('gameBoard');
    this.board.innerHTML = '';

    for (let i = 0; i < this.rows * this.cols; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i;
      this.board.appendChild(cell);
    }
  }

  placeGnomeRandomly() {
    const cells = document.querySelectorAll('.cell');
    const randomIndex = Math.floor(Math.random() * cells.length);
    this.currentPosition = randomIndex;
    cells[randomIndex].appendChild(this.gnome.element);
  }

  moveGnome() {
    const cells = document.querySelectorAll('.cell');
    let newPosition;

    do {
      newPosition = Math.floor(Math.random() * cells.length);
    } while (newPosition === this.currentPosition);

    cells[newPosition].appendChild(this.gnome.element);
    this.currentPosition = newPosition;
  }

  startMoving() {
    this.intervalId = setInterval(() => {
      this.moveGnome();
    }, this.moveInterval);
  }

  stopMoving() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
