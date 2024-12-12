import { HEX_REGEX } from "../RegExp/Color";

/**
 * @description Check if a string is a valid hex color
 * @param {string} color - The color to check
 * @returns {boolean} The result
 * */
export function isHexColor(color: string) {
  const reg = HEX_REGEX;
  return reg.test(color);
}

/**
 * @description Convert a hex color to rgba
 * @param {string} hex - The hex color to convert
 * @param {number} [alpha=1] - The alpha value
 * @returns {string} The rgba color
 * @example
 * hex2rgba("#f00"); // "rgba(255, 0, 0, 1)"
 * hex2rgba("#f00", 0.5); // "rgba(255, 0, 0, 0.5)"
 * hex2rgba("#ff0000"); // "rgba(255, 0, 0, 1)"
 * hex2rgba("#ff0000", 0.5); // "rgba(255, 0, 0, 0.5)"
 * */
export function hex2rgba(hex: string, alpha: number = 1): string {
  if (!isHexColor(hex)) {
    throw new Error("Invalid hex format");
  }
  if (hex.length === 4) {
    // #f00 -> #ff0000
    hex =
      hex.slice(0, 1) +
      hex
        .slice(1)
        .split("")
        .map((x) => x + x)
        .join("");
  }
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Transform a HEX color to its RGB representation
 * @param {string} hex The color to transform
 * @returns The RGB representation of the passed color
 */
export function hex2RGB(hex: string) {
  let sHex = hex.toLowerCase();
  if (isHexColor(hex)) {
    if (sHex.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sHex.slice(i, i + 1).concat(sHex.slice(i, i + 1));
      }
      sHex = sColorNew;
    }
    const sColorChange: number[] = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sHex.slice(i, i + 2)));
    }
    return "RGB(" + sColorChange.join(", ") + ")";
  }
  return sHex;
}
