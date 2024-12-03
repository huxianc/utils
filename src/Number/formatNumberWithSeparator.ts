import { THOUSAND_SEPARATOR_REGEX } from "../RegExp/Number";

interface FormatNumberWithSeparatorOptions {
  separator?: string;
  fractionDigits?: number;
}

/**
 * @description 格式化数字，添加千位分隔符
 * @param num {number | string} 需要格式化的数字
 * @param options {FormatNumberWithSeparatorOptions} 格式化选项
 * @returns {string} 格式化后的字符串
 * @example formatNumberWithSeparator(1234567.89) => "1,234,567.89"
 * @example formatNumberWithSeparator(1234567.89, { separator: "." }) => "1.234.567.89"
 * @example formatNumberWithSeparator(1234567.89, { fractionDigits: 0 }) => "1,234,568"
 * */
export function formatNumberWithSeparator(
  num: number | string,
  options: FormatNumberWithSeparatorOptions = {}
): string {
  if (typeof num === "string") {
    num = parseFloat(num);
  }

  if (isNaN(num)) {
    throw new TypeError(
      "The parameter must be a number or a string that can be converted to a number"
    );
  }

  const defaultOptions: FormatNumberWithSeparatorOptions = {
    separator: ",",
    fractionDigits: 2,
  };

  options = { ...defaultOptions, ...options };

  const { separator, fractionDigits } = options;
  num = num.toFixed(fractionDigits);
  const regExp = new RegExp(THOUSAND_SEPARATOR_REGEX.source, "g");
  return num.toString().replace(regExp, separator);
}
