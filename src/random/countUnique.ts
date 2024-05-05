const input1 = [1, 1, 1, 1, 1, 2];
const input2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
const input3 = [];
const input4 = [-2, -1, -1, 0, 1];

function countUnique(input: number[]) {
  if (input.length < 2) return input.length;
  let left = 0,
    right = 1,
    count = 1;

  while (right < input.length) {
    const isSameElement = input[left] === input[right];

    if (!isSameElement) {
      count++;
      left = right;
    }

    right++;
  }

  return count;
}

console.log(countUnique(input1));
console.log(countUnique(input2));
console.log(countUnique(input3));
console.log(countUnique(input4));
