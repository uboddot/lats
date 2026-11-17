import { StarPM } from "./StarPM.js";

export class TilePM {
  neighbours = [];
  constructor(tile) {
    this.tile = tile;
    const { col, row } = tile.getPosition();
    this.gridColumn = col + 1;
    this.gridRow = row + 1;
    this.star = new StarPM(tile);
  }
  hover() {
    this.#setHover(true);
  }
  unhover() {
    this.#setHover(false);
  }
  #setHover(on) {
    this.star.hovered.update(on);
    this.neighbours.forEach((nb) => nb.star.showAsNb.update(on));
  }
}
