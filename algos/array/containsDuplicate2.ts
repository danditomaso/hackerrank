// {
//   let input = [1, 2, 3, 1];

//   function containsNearbyDuplicate(nums: number[], k: number): boolean {
//     let map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//       if (!map.has(map[nums[i]])) map.set(nums[i], i);
//       else {
//         if (Math.abs(map.get([nums[i]]) - i) <= k) {
//           return true;
//         }
//         map.set(map.get(nums[i]), i);
//       }
//     }

//     return false;
//   }

//   console.log(containsNearbyDuplicate(input, 3));
// }

{
  const input = [1, 2, 3, 1];

  function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      let next = Math.abs(nums[i + k]);
      if (curr === next <= k) {
        return true;
      }
    }

    return false;
  }
}
