const readFile = require('fs').readFileSync;

const res = readFile('./inputs/2.input', 'utf-8')
  .split('\n')
  .filter((s: any) => s.trim())
  .filter((line: any) => {
    const [rule, password] = line.split(': ');
    let [, min, max, letter] = rule.match(/(\d+)\-(\d+) (\w)/);
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    const count = password.split('').filter((l: any) => l === letter).length;

    return count >= min && count <= max;
  });

const res2 = readFile('./2.input', 'utf-8')
  .split('\n')
  .filter((s: any) => s.trim())
  .filter((line: any) => {
    const [rule, password] = line.split(': ');
    let [, min, max, letter] = rule.match(/(\d+)\-(\d+) (\w)/);
    min = parseInt(min, 10) - 1;
    max = parseInt(max, 10) - 1;

    const split = password.split('');

    if (split[min] === letter) {
      if (split[max] !== letter) {
        return true;
      }
    }
    if (split[max] === letter) {
      if (split[min] !== letter) {
        return true;
      }
    }
  });

console.log(res2.length);
