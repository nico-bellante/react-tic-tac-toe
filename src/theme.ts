import randomColor from "randomcolor";

const allHueSeeds = [
  ["red", "blue"],
  ["green", "purple"],
  ["yellow", "blue"],
  ["orange", "blue"],
  ["green", "blue"],
  ["blue", "red"],
];

export function getColors() {
  const [hue1Seed, hue2Seed] = allHueSeeds[
    Math.floor(Math.random() * allHueSeeds.length)
  ];
  const hue1 = randomColor({ hue: hue1Seed });
  const hue2 = randomColor({ hue: hue2Seed });

  return {
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
}
