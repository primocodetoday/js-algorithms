// with helper method
export const collectOddValues1 = <T extends number>(arr: T[]) => {
  const result: T[] = [];

  const helper = (helperArr: T[]) => {
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

// pure recursion
export const collectOddValues2 = <T extends number>(arr: T[]) => {
  let newArr: T[] = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues2(arr.slice(1)));
  return newArr;
};

// // the easiest way
export const collectOddValues3 = <T extends number>(arr: T[], result: T[] = []): T[] => {
  if (!arr.length) return result;

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  return collectOddValues3(arr.slice(1), result);
};
