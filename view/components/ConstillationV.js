import { h } from "../../laf/index.js";
import { linkCSS } from "./util.js";

linkCSS("./constillation.css");

export function ConstillationV(skyPM) {
  return h(
    "svg",
    {
      class: "constillation",
      viewBox: `0 0 ${skyPM.columns} ${skyPM.rows}`,
      preserveAspectRatio: "none",
    },
    () =>
      skyPM.lines
        .subscribe()
        .map(({ from, to }) =>
          h("line", { x1: from.x, y1: from.y, x2: to.x, y2: to.y }),
        ),
    () => {
      const sel = skyPM.toCursorLine.subscribe();
      const p = sel && skyPM.cursor.point.subscribe();
      console.log(p);
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
