const input = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

function twoNumberSum(nums: Array<number>, target: number) {
  const hashedMap = new Map();

  for (let value of nums) {
    const secondNum = target - value;
    if (hashedMap.has(secondNum)) {
      return [value, secondNum];
    }

    hashedMap.set(value, true);
  }
}

console.log(twoNumberSum(input, target));
