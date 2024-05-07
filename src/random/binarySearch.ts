function search(input: number[], item: number) {
  let left = 0;
  let right = input.length;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    const element = input[middle];
    if (element === item) return middle;
    if (item < element) {
      right = middle;
    }

    if (item > element) {
      left = middle + 1;
    }
  }

  return -1;
  +1;
}

console.log(search([1, 2, 3, 4, 5, 6], 3));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
