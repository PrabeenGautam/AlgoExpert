const input = [1, 2, 3, 5, 6, 8, 9];
// const input = [-6, -2, 0, 4, 5, 6];

function sortedSquares(nums: number[]) {
  const total = nums.length;
  const sortedArray = Array.from({ length: total }, () => 0);

  let start = 0,
    end = total - 1;

  while (start <= end) {
    const endSquared = nums[end] ** 2;
    const startSquared = nums[start] ** 2;

    const step = end - start;
    const isStartLower = startSquared <= endSquared;

    sortedArray[step] = isStartLower ? endSquared : startSquared;
    isStartLower ? end-- : start++;
  }

  return sortedArray;
}

console.log(sortedSquares(input));
