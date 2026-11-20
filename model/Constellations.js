import { Sky } from "./Sky.js";

/**
 * @description Holds a Set of Constellations and manages them.
 */
export class Constellations {
  constellationSkies = [];
  constructor() {
    this.constellationSkies.push(new Sky(2, 2));
  }

  getAsArray() {
    return this.constellationSkies;
  }
}
