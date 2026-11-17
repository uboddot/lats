import { TilePM } from "./TilePM.js";

export class SkyPM {
  constructor(sky) {
    this.tiles = sky.tiles.flat().map((t) => new TilePM(t));
    this.columns = sky.getWidth();
    this.rows = sky.getHeight();
  }
}
