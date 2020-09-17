const countDown = (num) => {
  if (num <= 0) {
    return console.log('finish');
  }
  console.log(num);
  num--;
  return countDown(num);
};

countDown(99);
