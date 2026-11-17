import { State } from "../laf/index.js";

export class StarPM {
  constructor() {
    this.delay = Math.random() * 10;
    this.twinkleSpeed = new State((Math.random() + 5) * 2);
    this.leftOffset = 30 + Math.random() * 40;
    this.topOffset = 30 + Math.random() * 40;
  }
}
