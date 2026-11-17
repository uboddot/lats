import { h, State } from "../../laf/index.js";
import { linkCSS } from "./util.js";

linkCSS("./star.css");

export function StarV(starPM) {
  return h(
    "div",
    {
      class: () =>
        [
          "star",
          starPM.showAsNb.subscribe() && "nb",
          starPM.hovered.subscribe() && "hovered",
        ]
          .filter(Boolean)
          .join(" "),
      style: `
        --x: ${starPM.leftOffset}%; 
        --y: ${starPM.topOffset}%; 
        --speed: ${starPM.twinkleSpeed.subscribe()}s; 
        --delay: ${starPM.delay}s;`,
    },
    "",
  );
}
