// with helper method
const collectOddValues1 = (arr) => {
  let result = [];

  const helper = (helperArr) => {
    if (helperArr.length === 0) {
      return;
    }

    if (helperArr[0] % 2 !== 0) {
      result.push(helperArr[0]);
    }

    helper(helperArr.slice(1));
  };

  helper(arr);

  return result;
};

// console.log(collectOddValues1([1, 2, 3, 4, 5]));

// pure recursion
const collectOddValues2 = (arr) => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues2(arr.slice(1)));
  return newArr;
};

console.log(collectOddValues2([1, 2, 3, 4, 5]));

// the easiest way
const collectOddValues3 = (arr, result = []) => {
  if (!arr.length) return result;

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  return collectOddValues3(arr.slice(1), result);
};

console.log(collectOddValues3([1, 2, 3, 4, 5]));
