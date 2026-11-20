import { h } from "../../laf/index.js";
import { linkCSS } from "./util.js";

linkCSS("./skyControlls.css", import.meta.url);

export function SkyControlls(skyPM) {
  return h(
    "div",
    { class: "sky-controlls" },
    // constellation save
    h(
      "button",
      {
        class: "constellation-save",
        onclick: () => skyPM.saveConstellation(),
      },
      "save constellation",
    ),
  );
}
