{
  const input = [1, 2, 3];

  function reverseArray(a: number[]): number[] {
    // Write your code here

    let tmpArray: number[] = [];
    for (let i = a.length - 1; i >= 0; i--) {
      const valueAtIndex = a[i];
      tmpArray.push(valueAtIndex);
    }
    return tmpArray;
  }

  console.log(reverseArray(input));
  // output [3,2,1]
}
