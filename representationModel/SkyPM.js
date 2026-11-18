import { TilePM } from "./TilePM.js";
import { State } from "../laf/reactive.js";
import { CursorPM } from "./CursorPM.js";

export class SkyPM {
  selectedTiles = [];
  cursor = new CursorPM();
  lines = new State([]);
  toCursorLine = new State(null);

  constructor(sky) {
    this.sky = sky;
    this.rows = sky.getHeight();
    this.columns = sky.getWidth();
    this.tiles = sky.tiles.flat().map((t) => new TilePM(t, this));
    const pmByTile = new Map(this.tiles.map((pm) => [pm.tile, pm]));
    this.tiles.forEach((pm) => {
      pm.neighbours = pm.tile.getNeighbours().map((nb) => pmByTile.get(nb));
    });
    sky.constillations.map((constillation) =>
      this.#instanciateLines(constillation.getLinesAsArray(), pmByTile),
    );
  }

  selectTile(selectedTile) {
    if (this.selectedTiles.length === 0) {
      this.selectedTiles.push(selectedTile);
      selectedTile.showAsSelected(true);
      this.toCursorLine.update({
        from: selectedTile.pointOfStar(),
      });
      return;
    } else {
      if (this.selectedTiles.includes(selectedTile)) {
        this.selectedTiles.pop().showAsSelected(false);
        this.toCursorLine.update(null);
        return;
      }
      let fromStar = this.selectedTiles.pop();
      this.lines.update([
        ...this.lines.peek(),
        {
          from: fromStar,
          to: selectedTile,
        },
      ]);
      fromStar.showAsSelected(false);
      this.toCursorLine.update(null);
    }
  }

  safeConstillationToModel() {
    let modelLines = this.lines.peek().map((line) => {
      {
        return { fromTile: line.from.tile, toTile: line.to.tile };
      }
    });
    this.sky.addConstillation(modelLines);
  }

  #instanciateLines(arrayOfLines, pmByTile) {
    arrayOfLines.forEach((line) => {
      this.lines.update(
        arrayOfLines.map((line) => ({
          from: pmByTile.get(line.fromTile),
          to: pmByTile.get(line.toTile),
        })),
      );
    });
  }
}
