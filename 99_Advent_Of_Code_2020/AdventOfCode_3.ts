export const counterTrees = (data: string) => {
  let result = data
    .split('\n')
    .slice(0, -1)
    .filter((r, i) => r[(i * 3) % r.length] == '#');

  return result.length;
};

export const counterSlopes = (data: string) => {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  const rows = data.split('\n');
  const width = rows[0].length;
  const height = rows.length;

  let counter = 1;

  slopes.forEach(([dx, dy]) => {
    let x = 0;
    let y = 0;
    let trees = 0;
    while (y < height) {
      if (rows[y][x] === '#') {
        trees = trees + 1;
      }
      y = y + dy;
      x = (x + dx) % width;
    }
    counter = counter * trees;
  });
  return counter;
};
