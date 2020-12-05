export const numberOfValidPasswords1 = (data: string) => {
  let result = data
    .split('\n')
    .map((s) => s.trim())
    .filter((line: any) => {
      const [rule, password] = line.split(': ');
      let [, min, max, letter] = rule.match(/(\d+)\-(\d+) (\w)/);
      min = parseInt(min, 10);
      max = parseInt(max, 10);

      const count = password.split('').filter((l: any) => l === letter).length;
      return count >= min && count <= max;
    });
  return result.length;
};

export const numberOfValidPasswords2 = (data: string) => {
  let result = data
    .split('\n')
    .map((s) => s.trim())
    .filter((line: any) => {
      const [rule, password] = line.split(': ');
      let [, min, max, letter] = rule.match(/(\d+)\-(\d+) (\w)/);
      min = parseInt(min, 10) - 1;
      max = parseInt(max, 10) - 1;

      const split = password.split('');

      if (split[min] === letter && split[max] !== letter) return true;
      if (split[max] === letter && split[min] !== letter) return true;
    });
  return result.length;
};
