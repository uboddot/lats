export const CONSTELLATION_COLORS = [
  "#a8c8ff", // sky blue
  "#9ee8ff", // cyan
  "#9dffd2", // aqua mint
  "#c8ff9e", // lime
  "#fff59e", // lemon
  "#ffd09e", // apricot
  "#ffa8a8", // coral
  "#ffa3d9", // pink
  "#dba8ff", // lilac
  "#b3b3ff", // periwinkle
];

export class ConstellationPM {
  lines = [];
  color = "green";

  constructor(lines = []) {
    this.lines = lines;
    this.color = CONSTELLATION_COLORS.at(
      Math.random() * CONSTELLATION_COLORS.length,
    );
  }

  static fromModel(constellation, pmByTile) {
    return new ConstellationPM(
      constellation.getLinesAsArray().map((line) => {
        return {
          from: pmByTile.get(line.fromTile),
          to: pmByTile.get(line.toTile),
        };
      }),
    );
  }
}
