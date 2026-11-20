import { h } from "../../../laf/index.js";

export function ConstellationPanelEntry(constellation) {
  return h(
    "div",
    {
      class: "constellation-panel-entry",
      style: `background-color: ${constellation.color}`,
    },
    "hi",
  );
}
