import { h } from "../../laf/index.js";
import { SkyV } from "./SkyV.js";

import { linkCSS } from "./util.js";

linkCSS("./constellationInstruction.css");

export function ConstellationInstruction(constellationsCardsPM) {
  return h(
    "div",
    { class: "constellation-instruction" },
    // "here goes instruction Card",
    () =>
      constellationsCardsPM.constellationSkies.map((constellation) =>
        SkyV(constellation),
      ),
  );
}
