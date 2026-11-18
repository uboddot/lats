import { State } from "../laf/index.js";

export class CursorPM {
  point = new State(null);
  moveTo(x, y) {
    this.point.update({ x: x, y: y });
  }
  leave() {
    this.point.update(null);
  }
}
