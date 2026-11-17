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
  );
}
