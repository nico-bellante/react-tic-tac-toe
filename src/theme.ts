import randomColor from "randomcolor";

const allHueSeeds = [
  ["red", "blue"],
  ["green", "purple"],
  ["yellow", "blue"],
  ["orange", "blue"],
  ["green", "blue"],
  ["blue", "red"],
];

const [hue1Seed, hue2Seed] = allHueSeeds[Math.floor(Math.random() * allHueSeeds.length)];
console.log({ hue1Seed, hue2Seed });
const hue1 = hue1Seed; //randomColor({ hue: hue1Seed });
const hue2 = hue2Seed; // randomColor({ hue: hue2Seed });

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
