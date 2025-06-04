export const extractNumbers = (value: string): string => {
  if (typeof value === 'undefined' || value === null) return '';

  const regex = /[\u06F0-\u06F90-9.]+/g;
  const matches = value.match(regex);

  if (matches) {
    const numbersWithDecimals = matches.join('');

    return convertPersianToEnglishDigits(numbersWithDecimals);
  }

  return '';
};

export const formatCardNumber = (value: string): string => {
  if (!value) return '';
  // const digits = value.replace(/\D/g, '');

  const digits = extractNumbers(value);

  return digits.match(/.{1,4}/g)?.join('-') || '';
};

/**
 * Converts a string containing Persian digits to English digits.
 *
 * @param input - The string containing Persian digits.
 * @returns The string with Persian digits converted to English.
 */
export const convertPersianToEnglishDigits = (value: string) => {
  if (typeof value === 'undefined' || value === null) return '';

  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const englishDigits = '0123456789';

  return value
    .split('')
    .map(char => {
      const index = persianDigits.indexOf(char);
      return index !== -1 ? englishDigits[index] : char;
    })
    .join('');
};

export const capitalizer = (value: string) => value.toUpperCase();

export const numberSeparator = (value: string | number) => value.toLocaleString();

const truncateMiddle = (text: string, maxLength = 15) => {
  if (!text?.length) return text;

  if (text.length <= maxLength) return text;

  const partLength = Math.floor((maxLength - 3) / 2);
  return text.slice(0, partLength) + '...' + text.slice(-partLength);
};

export default truncateMiddle;
