{
  const input = [4, 73, 67, 38, 33];
  function intRound(num: number): number {
    // student has failed so no rounding should occur
    if (num < 38) {
      return num;
    }

    const roundedNum = Math.ceil(num / 5) * 5;

    if (roundedNum - num >= 3) {
      return num;
    }
    return roundedNum;
  }

  function gradingStudents(grades: number[]): number[] {
    const roundedGrades = grades.map((num) => intRound(num));
    console.log(roundedGrades);

    return roundedGrades;
  }
  gradingStudents(input);
}

// if number is below 38 no rounding should occur and be returned
// if number is < 3 > to the next number no rounding should occur
// skip first number as it isn't important to result
//
