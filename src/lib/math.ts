export const add = (...numbers: number[]): number =>
  numbers.reduce((sum, n) => sum + n, 0);

/**
 * Returns a number whose value is limited to the given range.
 * @param value
 * @param min
 * @param max
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);
