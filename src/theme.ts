import randomColor from "randomcolor";

const hue1 = randomColor();
const hue2 = randomColor();

export const COLORS = {
  color1: {
    bright: randomColor({ hue: hue1, luminosity: "bright" }),
    light: randomColor({ hue: hue1, luminosity: "light", alpha: 0.5 }),
    dark: randomColor({ hue: hue1, luminosity: "light" }),
  },
  color2: {
    bright: randomColor({ hue: hue2, luminosity: "bright" }),
    light: randomColor({ hue: hue2, luminosity: "light" }),
    dark: randomColor({ hue: hue2, luminosity: "dark" }),
  },
};
