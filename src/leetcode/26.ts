const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums: number[]): number {
  let left = 0,
    right = 1;

  const length = nums.length;

  if (length === 0 || length === 1) return length;

  // It ensures there are minimum 2 numbers
  while (right < length) {
    const isDuplicate = nums[left] === nums[right];
    if (!isDuplicate) {
      left += 1;

      // Put value
      nums[left] = nums[right];
    }

    right++;
  }

  const count = left + 1;
  for (let i = count; i < nums.length; i++) {
    nums[i] = "_" as any;
  }

  return count;
}

const count = removeDuplicates(input);
console.log(count, input);
