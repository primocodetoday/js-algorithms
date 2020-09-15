/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

// Frequency Pattern

const validAnagram1 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // is it already in object - if yes (add + 1) , if no = 0
  }
  for (const val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  // lets now compare the objects

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
      // check is the corresponding key in obj2
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
      // check if the same key has the same value
    }
  }
  return true;
};

console.log(validAnagram1('anagram', 'naargma'));

// method with 2 loops, 1 obj and destroying data when checking
function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }
  console.log(lookup);
  for (let i = 0; i < second.length; i++) {
    const letter = second[i];
    // can't find letter or letter is zero then it's not an anagram {a:0} is falsy
    if (!lookup[letter]) {
      return false;
    }
    lookup[letter] -= 1;
  }
  return true;
}

console.log(validAnagram2('anagram', 'naargma'));
