export const validPasswords1 = (input: string) => {
  const result = input
    .trim()
    .split('\n\n')
    .map((line) => line.split(/[ \n]+/))
    .filter((el) => el.length === 8 || (el.length === 7 && !el.some((e) => /cid.*/.test(e))));

  return result.length;
};

type Passport = {
  byr: number;
  iyr: number;
  eyr: number;
  hgt: string;
  hcl: string;
  ecl: string;
  pid: number;
};

export const validPasswords2 = (input: string) => {
  const result: Passport[] = input
    .trim()
    .split('\n\n')
    .map((line) => line.split(/[ \n]+/))
    .filter((passport) => passport.length === 8 || (passport.length === 7 && !passport.some((e) => /cid.*/.test(e))))
    .map((passport) =>
      // Making object
      Object.assign(
        {},
        ...passport.map((e) => {
          return { [e.split(':')[0]]: e.split(':')[1] };
        }),
      ),
    )
    // byr (Birth Year) - four digits; at least 1920 and at most 2002.
    .filter((passport: Passport) => passport.byr >= 1920 && passport.byr <= 2002)
    // (Issue Year) - four digits; at least 2010 and at most 2020.
    .filter((passport: Passport) => passport.iyr >= 2010 && passport.iyr <= 2020)
    // (Expiration Year) - four digits; at least 2020 and at most 2030.
    .filter((passport: Passport) => passport.eyr >= 2020 && passport.eyr <= 2030)
    // (Height) - a number followed by either cm or in:
    .filter((passport: Passport) => {
      // If cm, the number must be at least 150 and at most 193.
      if (passport.hgt.includes('cm')) {
        return +passport.hgt.split('cm')[0] >= 150 && +passport.hgt.split('cm')[0] <= 193;
      }
      // If in, the number must be at least 59 and at most 76.
      if (passport.hgt.includes('in')) {
        return +passport.hgt.split('in')[0] >= 59 && +passport.hgt.split('in')[0] <= 76;
      }
      return false;
    })
    // (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    .filter((passport: Passport) => /#[a-f0-9]{6}$/.test(passport.hcl))
    // (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    .filter((passport: Passport) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport.ecl))
    // (Passport ID) - a nine-digit number, including leading zeroes.
    .filter((passport: Passport) => passport.pid.toString().length === 9);

  return result.length;
};
