// O(n2) , O(1))
// function bubbleSort(nums: number[]) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] > nums[j + 1]) {
//         const temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//     }
//   }

//   return nums;
// }

function bubbleSort(nums: number[]) {
  let noSwaps = false;
  for (let i = nums.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return nums;
}

console.log(bubbleSort([1, 2, 3, 9, 8, 12, 18]));
