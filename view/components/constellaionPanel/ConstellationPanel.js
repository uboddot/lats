import { h } from "../../../laf/index.js";
import { linkCSS } from "../util.js";
import { ConstellationPanelEntry } from "./ConstellationPanelEntry.js";

linkCSS("./constellationPanel.css", import.meta.url);

export function ConstellationPanel(skyPM) {
  return h("div", { class: "constellation-panel" }, () =>
    skyPM.constellations
      .subscribe()
      .map((constellation) => ConstellationPanelEntry(constellation)),
  );
}
