export const countAnswers1 = (input: string) => {
  let answers = 0;

  const result = input
    .trim()
    .split('\n\n')
    .map((line) => line.split(/[ \n]+/))
    .map((line) => line.join(''))
    .map((line) => line.split(''))
    .map((line) => {
      const set = new Set(line);
      const str = [...set].join('');
      return str;
    });

  result.map((group) => (answers += group.length));
  return answers;
};

export const countAnswers2 = (input: string) => {
  let answers = 0;

  const groups = input.trim().split('\n\n');

  function countSameAnswers(string: string) {
    let array = string.split('\n');
    const answer = new Set(string.replace(/[^a-z]/g, ''));
    const inCommon = Array.from(answer).filter((q) => array.every((answer) => answer.includes(q)));
    return inCommon.length;
  }

  for (const group of groups) {
    answers += countSameAnswers(group);
  }

  return answers;
};
