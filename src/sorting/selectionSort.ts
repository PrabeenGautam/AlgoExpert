function selectionSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    const min = nums[i],
      minIndex = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        nums[minIndex] = nums[j];
        nums[j] = min;
      }
    }
  }

  return nums;
}

console.log(selectionSort([1, 2, 3, 9, 8, 12, 18]));
