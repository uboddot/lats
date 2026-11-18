import { h } from "../../laf/index.js";

export function ConstellationV(skyPM) {
  return h(
    "svg",
    {
      class: "constellation",
      viewBox: `0 0 ${skyPM.columns} ${skyPM.rows}`,
      preserveAspectRatio: "none",
    },
    () =>
      skyPM.constellations.subscribe().map((constellation) =>
        h(
          "g",
          { color: constellation.color },
          constellation.lines.map(({ from, to }) =>
            h("line", {
              x1: from.pointOfStar().x,
              y1: from.pointOfStar().y,
              x2: to.pointOfStar().x,
              y2: to.pointOfStar().y,
            }),
          ),
        ),
      ),
  );
}
