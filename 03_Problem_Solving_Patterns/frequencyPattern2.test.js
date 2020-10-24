import { validAnagram1, validAnagram2 } from './frequencyPattern2';

describe('Anagram functions works properly', () => {
  const testStr1 = 'anagram';
  const testStr2 = 'naargma';
  const testStr3 = 'naargm';
  const testStr4 = 'naargmb';

  it('validAnagram1 works properly', () => {
    expect(validAnagram1(testStr1, testStr2)).toBeTruthy();
    expect(validAnagram1(testStr1, testStr3)).toBeFalsy();
    expect(validAnagram1(testStr1, testStr4)).toBeFalsy();
  });

  it('validAnagram2 works properly', () => {
    // expect(validAnagram2(testStr1, testStr2)).toBeTruthy();
    expect(validAnagram2(testStr1, testStr3)).toBeFalsy();
    expect(validAnagram2(testStr1, testStr4)).toBeFalsy();
  });
});
