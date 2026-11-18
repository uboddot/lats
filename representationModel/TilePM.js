import { StarPM } from "./StarPM.js";

export class TilePM {
  neighbours = [];
  constructor(tile, sky) {
    this.tile = tile;
    const { col, row } = tile.getPosition();
    this.gridColumn = col + 1;
    this.gridRow = row + 1;
    this.star = new StarPM(tile);
    this.sky = sky;
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

  pointOfStar() {
    return {
      x: this.gridColumn - 1 + this.star.leftOffset / 100,
      y: this.gridRow - 1 + this.star.topOffset / 100,
    };
  }

  select() {
    this.sky.selectTile(this);
  }

  showAsSelected(bool) {
    this.star.showAsSelected(bool);
  }
}
