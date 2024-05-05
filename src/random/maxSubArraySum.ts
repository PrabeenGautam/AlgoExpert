/**
 * 
 Consective element should have large sum
 */

function maxSubarraySum(input: number[], range: number) {
  if (input.length < range) return null;
  let maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < range; i++) maxSum += input[i];
  tempSum = maxSum;

  for (let i = range; i < input.length; i++) {
    tempSum = tempSum + input[i] - input[i - range];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
