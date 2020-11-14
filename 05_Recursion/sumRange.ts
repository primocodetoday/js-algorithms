export const sumRange = (num: number): number => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};
