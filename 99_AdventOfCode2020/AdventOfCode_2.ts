export const numberOfValidPasswords1 = (data: string) => {
  let array = data.split('\n');
  let valid = 0;

  for (const line of array) {
    let [range, letter, password] = line.split(' ');
    letter = letter.replace(/.$/, '');
    let notLetter = new RegExp(`[^${letter}]`, 'g');
    // remove letters that are not required
    password = password.replace(notLetter, '');
    // check remaining characters
    let checkLength = new RegExp(`^.{${range.replace('-', ',')}}$`, 'g');
    // remove letters that are not required
    if (password.match(checkLength)) {
      valid++;
    }
  }
  return valid;
};

export const numberOfValidPasswords2 = (data: string) => {
  let array = data.split('\n');
  let valid = 0;

  for (const line of array) {
    let [range, letter, password] = line.split(' ');
    letter = letter.replace(/.$/, '');
    let [start, end] = range.split('-');
    let startN = parseInt(start, 10);
    let endN = parseInt(end, 10);
    // check pattern
    if ((password[startN - 1] == letter) !== (password[endN - 1] == letter)) {
      valid++;
    }
  }
  return valid;
};
