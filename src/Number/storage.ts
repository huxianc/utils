export const UNITS = ["B", "K", "M", "G", "T", "P", "E", "Z", "Y"];

export interface FormatBytesReturns {
  numStr: string;
  unit: string;
  raw: number;
}

/**
 * @description 格式化计算机存储单位
 * @param {number} bytes - 字节数
 * @param {string[]} units - 单位数组，默认为["B", "K", "M", "G", "T"]
 * @param {number} fractionDigits - 保留小数位数，默认为2
 * @returns {string} 格式化后的存储单位
 *
 * @example
 * formatBytes(1024); // 1.00K
 * formatBytes(3.6 * 1024 * 1024, UNITS.map((item) => `${item}B`); // 3.60MB
 * formatBytes(7.56 * 1024 * 1024 * 1024, undefined, 4); // 7.5600G
 * formatBytes(6.15 * 1024 * 1024 * 1024 * 1024, undefined, 4, true); // { numStr: '6.1500', unit: 'T', raw: 6.15 }
 * */
export function formatBytes(
  bytes: number,
  units = UNITS,
  fractionDigits = 2,
  returnRaw = false
): string | FormatBytesReturns {
  let unitIndex = 0;

  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024;
    unitIndex++;
  }

  const numStr = bytes.toFixed(fractionDigits);
  const unit = units[unitIndex];

  return !returnRaw ? numStr + unit : { numStr, unit, raw: bytes };
}
