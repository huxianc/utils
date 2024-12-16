import { formatBytes, UNITS } from "./src";

console.log(formatBytes(1024));
console.log(
  formatBytes(
    3.6 * 1024 * 1024,
    UNITS.map((item) => `${item}B`)
  )
);

console.log(formatBytes(7.56 * 1024 * 1024 * 1024, undefined, 4));

console.log(formatBytes(6.15 * 1024 * 1024 * 1024 * 1024, undefined, 4, true));

console.log(formatBytes(6.15 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024));
