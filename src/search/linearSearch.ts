function linearSearch(value: number) {
  const input = [1, 2, 3, 4, 5, 6, 7, 8];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === value) return i;
  }

  return -1;
}

console.log(linearSearch(0));
