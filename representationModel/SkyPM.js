import { TilePM } from "./TilePM.js";
import { State } from "../laf/reactive.js";

export class SkyPM {
  constructor(sky) {
    this.rows = sky.getHeight();
    this.columns = sky.getWidth();
    this.tiles = sky.tiles.flat().map((t) => new TilePM(t));
    const pmByTile = new Map(this.tiles.map((pm) => [pm.tile, pm]));
    this.tiles.forEach((pm) => {
      pm.neighbours = pm.tile.getNeighbours().map((nb) => pmByTile.get(nb));
    });
    this.lines = new State([
      { from: this.tiles[0].pointOfStar(), to: this.tiles[1].pointOfStar() },
    ]);
  }
}
