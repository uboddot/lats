import { h } from "../../laf/index.js";
import { linkCSS } from "./util.js";

linkCSS("./tile.css");

export function TileV(t) {
  return h(
    "div",
    {
      class: "tile",
      style: `--col: ${t.gridColumn}; --row: ${t.gridRow};`,
    },
    h("div", {}, "tile"),
  );
}
