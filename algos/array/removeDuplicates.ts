{
  const input = [1, 2, 2, 4, 5, 6, 7, 7];

  function removeDuplicates(nums: number[]): number {
    let numOfDups = 0;

    for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      let next = nums[i + 1];
      if (curr === next) {
        const beforeSlice = nums.slice(0, curr - 1);
        const afterSlice = nums.slice(next);

        nums = [...beforeSlice, ...afterSlice];
        console.log(nums);
      }

      // console.log(nums);
    }
    return numOfDups;
  }

  removeDuplicates(input);
}
