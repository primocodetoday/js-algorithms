console.log('------ native start ------');

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i += 1) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2); // returns first element fit to pattern or -1
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1); // delete fit index from arr2
  }
  return true;
}

const time1 = performance.now();
same([1, 2, 3, 2, 5, 9], [9, 1, 4, 4, 25, 81]);
const time2 = performance.now();

console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);

console.log('------ native end ------');
