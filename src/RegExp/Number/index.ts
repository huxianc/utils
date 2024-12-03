/**
 * @description 数字三位匹配
 * */ 
export const THOUSAND_SEPARATOR_REGEX = /\B(?=(\d{3})+(?!\d))/;

/**
 * @description 国内手机号码匹配
 * */ 
export const CHINA_MOBILE_PHONE_REGEX = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
