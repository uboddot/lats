import { h, State } from "../../laf/index.js";
import { linkCSS } from "./util.js";

linkCSS("./star.css");

export function StarV() {
  const random_animation_delay = Math.random() * 10;
  const twinkle_speed_state = new State((Math.random() + 5) * 2);

  setInterval(
    () => {
      twinkle_speed_state.update((Math.random() + 5) * 2);
    },
    Math.random() + 1 * 1000,
  );

  return h(
    "div",
    {
      class: "star",
      style: `--speed: ${twinkle_speed_state.subscribe()}s; --delay: ${random_animation_delay}s`,
    },
    "",
  );
}
