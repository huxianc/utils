import {
  hex2rgba,
  hex2RGB,
  colorIsDark,
  luminanace,
  contrast,
  darken,
  lighten,
} from "./src";

console.log(hex2rgba("#Abc")); //
console.log(hex2RGB("#abc")); // 1,234,567.89
console.log(colorIsDark("#889")); // false
console.log(luminanace(1, 1, 1)); // false
console.log(contrast(["1", "2", "3"], [255, 255, 255])); // false
console.log(darken("888888", 50)); // false
console.log(lighten("#000000", 110)); // false
