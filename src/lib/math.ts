export const sum = (...numbers: number[]) =>
  numbers.reduce((sum, n) => sum + n, 0);
