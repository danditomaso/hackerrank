{
  // const arr = [7, 69, 2, 221, 8974];
  const arr = [3, 2, 1, 3];

  function birthdayCakeCandles(arr: number[]): number {
    let counts: Record<string, number> = {};
    let max = 0;

    for (const num of arr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (const val in counts) {
      if (max < counts[val]) {
        max = counts[val];
      }
    }

    return max;
  }
  console.log(birthdayCakeCandles(arr));
}
