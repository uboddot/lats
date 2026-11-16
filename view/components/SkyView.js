import { h } from "../../laf/index.js";
import { TileV } from "./TileV.js";
import { linkCSS } from "./util.js";

linkCSS("./sky.css");

export function SkyV(skyPM) {
  return h(
    "div",
    { class: "sky", style: `--cols: ${skyPM.columns}; --rows: ${skyPM.rows};` },
    skyPM.tiles.map((t) => TileV(t)),
  );
}
