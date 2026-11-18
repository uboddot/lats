export class Constellation {
  lines = [];

  getLinesAsArray() {
    return this.lines;
  }

  constructor(constilationLines) {
    this.lines = constilationLines.map((line) => {
      return new ConstellationLine(line.fromTile, line.toTile);
    });
  }
}

export class ConstellationLine {
  constructor(fromTile, toTile) {
    this.fromTile = fromTile;
    this.toTile = toTile;
  }
}
