{
  const valid_numbers = "0123456789";
  const valid_lower_case = "abcdefghijklmnopqrstuvwxyz";
  const valid_upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const valid_special_characters = "!@#$%^&*()-+";
  const valid_length = 6;

  function checkForValidChars(s: string, validList: string) {
    if (s === "") return false;

    for (let i = 0; i < validList.length; i++) {
      return validList.includes(s[i]);
    }
  }

  function minimumNumber(n: number, password: string): number {
    let numCharsToAdd = 0;
    if (n <= valid_length) {
      numCharsToAdd = n - valid_length;
    }

    [checkForValidChars(password, valid_numbers)].some((check) =>
      console.log(check)
    );

    return Math.abs(numCharsToAdd);
  }

  console.log(minimumNumber(4, "321"));
}
