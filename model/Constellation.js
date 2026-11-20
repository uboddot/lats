/**
 * @description One Constellation
 */
export class Constellation {
  /** @typedef ConstellationLine[] */
  lines = [];

  /**
   * @returns {Iterable} An Iterable of ConstellationLines
   */
  getLinesAsArray() {
    return this.lines;
  }

  /**
   * @param {Iterable<ConstellationLine>} constilationLines
   */
  constructor(constilationLines) {
    this.lines = constilationLines.map((line) => {
      return new ConstellationLine(line.fromTile, line.toTile);
    });
  }
}

/**
 * @description A single Line of a Constellation, defined by the two tiles it connects.
 */
export class ConstellationLine {
  /**
   * @param {Tile} fromTile
   * @param {Tile} toTile
   */
  constructor(fromTile, toTile) {
    this.fromTile = fromTile;
    this.toTile = toTile;
  }
}
