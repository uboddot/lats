import { h } from "../../../laf/index.js";
import { linkCSS } from "../util.js";

linkCSS("./constellation.css", import.meta.url);

export function DrawingConstellationV(skyPM) {
  return h(
    "svg",
    {
      class: "constellation",
      viewBox: `0 0 ${skyPM.columns} ${skyPM.rows}`,
      preserveAspectRatio: "none",
    },
    () =>
      skyPM.lines.subscribe().map(({ from, to }) =>
        h("line", {
          x1: from.pointOfStar().x,
          y1: from.pointOfStar().y,
          x2: to.pointOfStar().x,
          y2: to.pointOfStar().y,
        }),
      ),
    () => {
      const sel = skyPM.toCursorLine.subscribe();
      const p = sel && skyPM.cursor.point.subscribe();
      if (!p) return null;
      return h("line", {
        x1: sel.from.x,
        y1: sel.from.y,
        x2: p.x,
        y2: p.y,
      });
    },
  );
}
