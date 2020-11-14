export const removeFromEnd1 = (input: string): string => {
  if (input.endsWith('!')) {
    return removeFromEnd1(input.slice(0, -1));
  }
  return input;
};

export const removeFromEnd2 = (input: string) => {
  return input.replace(/!+$/, '');
};
