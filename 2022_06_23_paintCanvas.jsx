class Canvas {
  constructor(board) {
    this.test = 'a';
    this.paints = [];
    this.paintI = 0;
    this.dim = {
      height: board ? board.length : 0,
      width: board[0] ? board[0].length : 0
    }
    this.board = board;
  }

  paint(x, y, color) {
    const derp = this.test;

    if (0 <= x && x < this.dim.width && 0 <= y && y < this.dim.height) {
      this.paints.push(
        {
          X: x,
          Y: y,
          newCol: color,
          oldCol: this.board[y][x]
        }
      )
      this.paintI ++;

      for (let i = this.paintI; i < this.paints.length; i++) {
        this.paints.pop();
      }

      this.board[y][x] = color;

    }
    else {
      console.log("coordinates out of bounds");
    }
  }

  undo() {
    let len = this.paints.length - 1;
    // lastPaint = this.paints.at(-1);
    // lastPaint = this.paints.pop();

    // this.paints.at(-1)
    if (len >= 0) {
      let x = this.paints[len].X;
      let y = this.paints[len].Y;
      let color = this.paints[len].oldCol;

      this.board[y][x] = color;
    }
    else {
      console.log("Nothing in past paints")
    }
  }

  redo() {

  }
}

const board = [
  ['r', 'r', 'r'],
  ['g', 'g', 'g'],
  ['b', 'b', 'b']
];

/*
const board = [
  ['r', 'r', 'r'],
  ['g', 'g', 'g'],
  ['b', 'b', 'b']
];

const board = [
  [],
  [],
  []
];

const board = []
*/

let bob = new Canvas(board);

bob.paint(1, 1, "marty");

bob.undo();

console.log(bob.board);

console.log(bob.paints);

//console.log("board height: ", bob.dim.height);
//console.log("board width: ", bob.dim.width);