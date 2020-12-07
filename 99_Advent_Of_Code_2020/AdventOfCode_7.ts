let a: { [key: string]: ((string | number)[] | null)[] } = {};

export const getRules = (input: string) => {
  input
    .trim()
    .split('\n')
    .forEach(
      (r) =>
        (a[r.split(' contain ')[0].split(' bag')[0]] = r
          .split(' contain ')[1]
          .split(', ')
          .map((c) => (c == 'no other bags.' ? null : [parseInt(c.substr(0, 1)), c.substr(2).split(' bag')[0]]))),
    );
};

export const countBags1 = (input: string) => {
  getRules(input);

  let c = (b: any): any =>
    b === 'shiny gold' ? true : a[b][0] ? a[b].reduce((r, d: any) => r || c(d[1]), false) : false;

  return Object.keys(a).filter(c).length - 1;
};

export const countBags2 = (input: string) => {
  getRules(input);

  let c2 = (b: any): any => (a[b][0] ? 1 + a[b].reduce((r, d: any) => r + d[0] * c2(d[1]), 0) : 1);
  return c2('shiny gold') - 1;
};
