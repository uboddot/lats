import { h } from "../../laf/index.js";
import { StarV } from "./StarV.js";
import { linkCSS } from "./util.js";

linkCSS("./tile.css");

export function TileV(t) {
  return h(
    "div",
    {
      class: "tile",
      onmouseenter: () => t.hover(),
      onmouseleave: () => t.unhover(),
      onclick: () => t.select(),
      style: `--col: ${t.gridColumn}; --row: ${t.gridRow};`,
    },
    StarV(t.star),
  );
}
