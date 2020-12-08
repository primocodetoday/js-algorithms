export enum Operation {
  nop = 'nop',
  jmp = 'jmp',
  acc = 'acc',
}

export const assembler = (input: string) => {
  const code = input
    .trim()
    .split('\n')
    .map((line) => {
      const [o, a] = line.split(' ');
      return { op: o, arg: parseInt(a, 10) };
    });

  let acc = 0;
  const executed = new Set();

  for (let i = 0; i < code.length; ) {
    const inst = code[i];

    if (executed.has(i)) {
      break;
    } else {
      executed.add(i);
    }

    switch (inst.op) {
      case Operation.jmp:
        i += inst.arg;
        break;
      case Operation.acc:
        acc += inst.arg;
        i++;
        break;
      default:
      case Operation.nop:
        i++;
        break;
    }
  }

  return acc;
};
