﻿const searchString = (str, pattern) => {
  if (str.length < pattern.length) {
    return -1;
  }
  let next = pattern.length;
  let counter = 0;

  for (let i = 0; next < str.length; i++) {
    if (str.slice(i, next) === pattern) {
      counter++;
      next++;
    } else next++;
  }
  return counter;
};

console.time('slidingWindow');
console.log(
  searchString(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus",
    'dummy',
  ),
);
console.timeEnd('slidingWindow');
