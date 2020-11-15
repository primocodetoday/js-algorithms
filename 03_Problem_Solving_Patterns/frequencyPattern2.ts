/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

// Frequency Pattern 2
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

export const validAnagram1 = <T extends string>(str1: T, str2: T) => {
  if (str1.length !== str2.length) {
    return false;
  }

  type Frequency = {
    [key: string]: number;
  };

  const frequencyCounter1: Frequency = {};
  const frequencyCounter2: Frequency = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // is it already in object - if yes (add + 1) , if no = 0
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

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

// method with 2 loops, 1 obj and destroying data when checking
export const validAnagram2 = <T extends string>(first: T, second: T) => {
  if (first.length !== second.length) {
    return false;
  }

  type Frequency = {
    [key: string]: number;
  };

  const lookup: Frequency = {};
  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    const letter = second[i];
    // can't find letter or letter is zero then it's not an anagram {a:0} is falsy
    if (!lookup[letter]) {
      return false;
    }
    lookup[letter] -= 1;
  }
  return true;
};
