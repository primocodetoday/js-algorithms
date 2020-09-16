// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// Time Complexity O(N)
function search1(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Time Complexity - Log(N) - Binary Search!
function search2(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2); // cut array to half
    console.log(middle);

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

search2([1, 2, 3, 4, 5, 6], 4); // 3
console.log('--------------');
search2([1, 2, 3, 4, 5, 6], 6); // 5
