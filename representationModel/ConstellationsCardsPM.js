import { SkyPM } from "./SkyPM.js";

/**
 * @description Constellations (Skies with one constellation) for the player to draw on the Sky (Board).
 */
export class ConstellationsCardsPM {
  /** @type {Array<SkyPM>}
   * @description An array of Skies with a constellation */
  constellationSkies = [];

  constructor(constellations) {
    this.constellationSkies = constellations
      .getAsArray()
      .map((sky) => new SkyPM(sky));
  }
}
