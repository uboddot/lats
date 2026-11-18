export class Constillation {
  lines = [];

  getLinesAsArray() {
    return this.lines;
  }

  constructor(constilationLines) {
    this.lines = constilationLines.map((line) => {
      return new ConstillationLine(line.fromTile, line.toTile);
    });
  }
}

export class ConstillationLine {
  constructor(fromTile, toTile) {
    this.fromTile = fromTile;
    this.toTile = toTile;
  }
}
