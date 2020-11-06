// Write a function called averagePair Given a sorted array of
// integers and a target average, determine if there is a pair of
// values in the array where the average of the pair equals the target
// average. There may be more than one pair that matches the average
// ts-check

export const averagePair = <T extends number, Y extends number>(arr: T[], b: Y) => {
  if (arr.length === 0) {
    return false;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const avg = (arr[start] + arr[end]) / 2;
    if (avg < b) {
      start++;
    } else if (avg > b) {
      end--;
    } else {
      return true;
    }
  }
  return false;
};
