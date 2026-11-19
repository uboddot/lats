import { h } from "../../laf/index.js";
import { linkCSS } from "./util.js";

linkCSS("./constellationPanel.css");

export function ConstellationPanel(skyPM) {
  return h("div", { class: "constellation-panel" }, () =>
    skyPM.constellations.subscribe().map((constellation) => h("div", {}, "hi")),
  );
}
