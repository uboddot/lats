import { h } from "../../laf/index.js";
import { linkCSS } from "./util.js";

linkCSS("./constellationInstruction.css");

export function ConstellationInstruction(skyPM) {
  return h(
    "div",
    { class: "constellation-instruction" },
    "here goes instruction Card",
  );
}
