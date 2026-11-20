import { h, mount } from "./laf/index.js";
import { SkyBoard } from "./view/components/SkyV.js";
import { SkyPM } from "./representationModel/SkyPM.js";
import { ConstellationsCardsPM } from "./representationModel/ConstellationsCardsPM.js";
import { Game } from "./model/Game.js";
import { ConstellationPanel } from "./view/components/ConstellationPanel.js";
import { ConstellationInstruction } from "./view/components/ConstellationInstruction.js";
import { SkyControlls } from "./view/components/SkyControlls.js";

const game = new Game();
const sky = game.sky;
const skyPM = new SkyPM(sky);
const constellationsCardsPM = new ConstellationsCardsPM(game.constellations);

function App() {
  return h(
    "div",
    { id: "app-layout" },
    ConstellationInstruction(constellationsCardsPM),
    SkyBoard(skyPM),
    ConstellationPanel(skyPM),
    SkyControlls(skyPM),
  );
}

mount(h(App), document.getElementById("app"));
