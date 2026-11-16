export class TilePM {
  constructor(tile) {
    this.tile = tile;
    const { col, row } = tile.getPosition();
    this.gridColumn = col + 1;
    this.gridRow = row + 1;
  }
}
