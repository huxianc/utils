
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
  if (!hex.startsWith("#") || ![4, 7].includes(hex.length)) {
    throw new Error("Invalid hex length");
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
