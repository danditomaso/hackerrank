{
  const string = "saveChangesInTheEditor";

  function isUppercase(s: string): boolean {
    const letter = s.charAt(0);
    const uppercaseLetter = letter.toUpperCase();
    if (letter === uppercaseLetter) {
      return true;
    }
    return false;
  }

  function camelcase(s: string): number {
    // Write your code here
    // need a way to count num words
    let count = 0;

    // loop over string

    for (let i = 0; i < s.length; i++) {
      if (isUppercase(s[i]) === true) {
        count++;
      }
    }
    return count;
  }

  console.log(camelcase(string));
}
