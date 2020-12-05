export const findHighestPlace = (input: string) => {
  const result = input
    .trim()
    .split('\n')
    // making binary and parse
    .map((row) => parseInt(row.replace(/B|R/g, '1').replace(/F|L/g, '0'), 2))
    // finding max
    .reduce((a, b) => (a > b ? a : b));

  return result;
};

export const findMyPlace = (input: string) => {
  const result =
    input
      .trim()
      .split('\n')
      .map((row) => parseInt(row.replace(/B|R/g, '1').replace(/F|L/g, '0'), 2))
      .sort((a, b) => (a > b ? 1 : -1))
      // finding empty place
      .filter((v, i, a) => v != a[i - 1] + 1)[1] - 1;

  return result;
};
