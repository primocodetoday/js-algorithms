/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */

// UNDERSTAND THE PROBLEM
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
// 5. How should I label the important pieces of data that are a part of the problem?

// EXPLORE EXAMPLES
// 1. Start with Simple Examples
// charCount('aaaa'); // {a:4}
// charCount('hello'); // {h:1, e:1, l:2, o:1}
// // 2. Progress to More Complex Examples
// charCount('Hello and hi');
// charCount('Hi there. My phone number is 1324234');
// // 3. Explore Examples with Empty Inputs
// charCount('');
// // 4. Explore Examples with Invalid Inputs
// charCount(34);
// charCount({ key: value });

// BREAK IT DOWN
// Explicitly write out the steps you need to take.

// This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

// Write a function which takes in a string and return counts od each character in the string.

// function charCount(str) {
// make object to return at end
// loop over string, for each character
// -- if the char is a key exist - add one
// -- if not, add te key and set to 1
// -- if something else (space, etc) do nothing
// return object at end
// }

// SOLVE/SIMPLIFY;
// Find the core difficulty in what you're trying to do
// Temporarily ignore that difficulty
// Write a simplified solution
// Then incorporate that difficulty back in

function charCount(str) {
  const result = {}; // make object to return at end
  for (let i = 0; i < str.length; i += 1) {
    // loop over string, for each character
    const char = str[i].toLowerCase();
    if (result[char] > 0) {
      // -- if the char is a key exist - add one
      result[char] += 1;
    } else {
      // -- if not, add te key and set to 1
      result[char] = 1;
    }
    // -- if something else (space, etc) do nothing
  }
  // return object at end
  return result;
}
