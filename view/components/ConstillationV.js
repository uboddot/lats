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
    h("line", { x1: 2, y1: 1, x2: 100, y2: 200, color: "#fff" }),
  );
}
