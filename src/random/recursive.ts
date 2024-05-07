// 5 4 3 2 1
function factorial(num: number) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// 0 1 1 2 3 5 8 13
function fibonacci(term: number) {
  if (term < 2) {
    return term;
  } else {
    return fibonacci(term - 1) + fibonacci(term - 2);
  }
}

for (let i = 0; i < 7; i++) {
  console.log(fibonacci(i));
}
