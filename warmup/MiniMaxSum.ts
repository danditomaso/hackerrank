{
  // const arr = [7, 69, 2, 221, 8974];
  const arr = [5, 5, 5, 5, 5];

  function miniMaxSum(arr: number[]): void {
    let total = 0;

    function quickSort(arr: number[]): number[] {
      if (arr.length <= 1) {
        return arr;
      }

      let pivot = arr[0];
      let leftArr = [];
      let rightArr = [];

      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
          leftArr.push(arr[i]);
        } else {
          rightArr.push(arr[i]);
        }
      }

      return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    }

    const sortedArr = quickSort(arr);
    for (let i = 0; i < sortedArr.length; i++) {
      total += arr[i];
    }
    let maxTotal = total - sortedArr[0];
    let minTotal = total - sortedArr[sortedArr.length - 1];
    console.log(minTotal, maxTotal);
  }
  miniMaxSum(arr);
}

// Min sum = sum all numbers except last num
// Max sum = sum all numbers except first num
