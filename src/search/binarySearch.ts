function binarySearch(value: number) {
  const input = [1, 2, 3, 4, 5, 6, 7, 8];
  let left = 0,
    right = input.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const currentValue = input[middle];

    if (value === currentValue) return middle;
    if (value < currentValue) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch(8));
