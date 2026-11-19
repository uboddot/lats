import { h, mount, Provider, State } from "./laf/index.js";
import { SkyV } from "./view/components/SkyV.js";
import { SkyPM } from "./representationModel/SkyPM.js";
import { Sky } from "./model/Sky.js";

const sky = new Sky(5, 5);
const skyPM = new SkyPM(sky);

function App() {
  return h("div", { id: "app-layout" }, SkyV(skyPM));
}

mount(h(App), document.getElementById("app"));
