export const countDown = (num: number): void => {
  if (num <= 0) {
    return console.log('finish');
  }
  console.log(num);
  num--;
  return countDown(num);
};
