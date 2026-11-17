import { h, State } from "../../laf/index.js";
import { linkCSS } from "./util.js";

linkCSS("./star.css");

export function StarV(starPM) {
  return h(
    "div",
    {
      class: "star",
      style: `--x: ${starPM.leftOffset}%; --y: ${starPM.leftOffset}%; --speed: ${starPM.twinkleSpeed.subscribe()}s; --delay: ${starPM.delay}s`,
    },
    "",
  );
}
