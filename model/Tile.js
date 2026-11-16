export class Tile {
  col;
  row;
  leftNb;
  rightNb;
  uppNb;
  downNb;
  constructor(width, height) {
    this.col = width;
    this.row = height;
  }

  getPosition() {
    return { col: this.col, row: this.row };
  }

  setUpNb(nb) {
    this.uppNb = nb;
  }
  setDownNb(nb) {
    this.downNb = nb;
  }
  setRightNb(nb) {
    this.rightNb = nb;
  }
  setLeftNb(nb) {
    this.leftNb = nb;
  }
}
