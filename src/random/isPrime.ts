function isPrime(num: number) {
  if (num < 2) {
    return false;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    const isRemainder0 = num % i === 0;
    if (isRemainder0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(11));
console.log(isPrime(1));
