/*
e^x = 1 + x /1 + x2 / 2!
*/
function factorial(n: number) {
  if (n == 1 || n == 0) return 1;
  return n * factorial(n - 1);
}

function power(n: number, count: number) {
  if (count === 0) return 1;
  if (count % 2 == 0) return power(n * n, count / 2);
  return n * power(n * n, (count - 1) / 2);
}

function taylorSeries(x: number, n: number) {
  if (n == 0) return 1;
  return power(x, n) / factorial(n) + taylorSeries(x, n - 1);
}

console.log(taylorSeries(3, 10));
