import { Sky } from "./Sky.js";
import { Constellations } from "./Constellations.js";

/**
 * @description The Game holding the Sky (Board), Constellations (to draw) and later scoring.
 */
export class Game {
  constructor() {
    this.sky = new Sky(5, 5);
    this.constellations = new Constellations();
  }
}
