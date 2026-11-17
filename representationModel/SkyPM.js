import { TilePM } from "./TilePM.js";
import { State } from "../laf/reactive.js";

export class SkyPM {
  selectedTiles = [];
  constructor(sky) {
    this.rows = sky.getHeight();
    this.columns = sky.getWidth();
    this.tiles = sky.tiles.flat().map((t) => new TilePM(t, this));
    const pmByTile = new Map(this.tiles.map((pm) => [pm.tile, pm]));
    this.tiles.forEach((pm) => {
      pm.neighbours = pm.tile.getNeighbours().map((nb) => pmByTile.get(nb));
    });
    this.lines = new State([]);
  }

  selectTile(selectedTile) {
    if (this.selectedTiles.length === 0) {
      this.selectedTiles.push(selectedTile);
      return;
    } else {
      this.lines.update([
        ...this.lines.peek(),
        {
          from: this.selectedTiles.pop().pointOfStar(),
          to: selectedTile.pointOfStar(),
        },
      ]);
      console.log(this.lines);
    }
  }
}
