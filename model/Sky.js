import { Tile } from "./Tile.js";

export class Sky {
  tiles = [];

  constructor(width, height) {
    this.#setTiles(width, height);
  }

  #setTiles = (width, height) => {
    // make basic array structure
    this.tiles = Array.from({ length: width }, (_, col) =>
      Array.from({ length: height }, (_, row) => new Tile(col, row)),
    );

    this.tiles.flat().forEach((t) => this.#setNeighbours(t));
  };

  #tileAt(col, row) {
    return this.tiles[col]?.[row];
  }

  #setNeighbours(tile) {
    const { col, row } = tile.getPosition();
    tile.setUpNb(this.#tileAt(col, row - 1));
    tile.setDownNb(this.#tileAt(col, row + 1));
    tile.setRightNb(this.#tileAt(col + 1, row));
    tile.setLeftNb(this.#tileAt(col - 1, row));
  }

  getWidth() {
    return this.tiles.length;
  }
  getHeight() {
    return this.tiles[0]?.length ?? 0;
  }
}
