import { h, State } from "../../../laf/index.js";
import { linkCSS } from "../util.js";

linkCSS("./star.css", import.meta.url);

export function StarV(starPM) {
  return h(
    "div",
    {
      class: () =>
        [
          "star",
          starPM.showAsNb.subscribe() && "nb",
          starPM.hovered.subscribe() && "hovered",
          starPM.isSelected.subscribe() && "selected",
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
