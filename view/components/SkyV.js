import { h } from "../../laf/index.js";
import { TileV } from "./TileV.js";
import { linkCSS } from "./util.js";
import { ConstillationV } from "./ConstillationV.js";

linkCSS("./sky.css");

export function SkyV(skyPM) {
  return h(
    null,
    {},
    h(
      "div",
      {
        class: "sky",
        style: `--cols: ${skyPM.columns}; --rows: ${skyPM.rows};`,
        onmousemove: (e) => {
          const r = e.currentTarget.getBoundingClientRect();
          skyPM.cursor.moveTo(
            ((e.clientX - r.left) / r.width) * skyPM.columns,
            ((e.clientY - r.top) / r.height) * skyPM.rows,
          );
        },
        onmouseleave: () => skyPM.cursor.leave(),
      },
      skyPM.tiles.map((t) => TileV(t)),
      ConstillationV(skyPM),
    ),
  );
}
