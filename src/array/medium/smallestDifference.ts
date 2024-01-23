const input1 = [-1, 5, 9, 20, 28, 13];
const input2 = [26, 134, 135, 15, 17];

// O(n2)
/* function smallestDifference(input1: number[], input2: number[]) {
  input1.sort((a, b) => a - b);
  input2.sort((a, b) => a - b);

  const map = new Map();

  for (let i = 0; i < input1.length; i++) {
    const firstNumber = input1[i];

    for (let j = 0; j < input2.length; j++) {
      const secondNumber = input2[j];

      const difference = Math.abs(firstNumber - secondNumber);
      if (map.has(difference)) {
        const prevNumbers = map.get(difference);

        map.set(difference, [...prevNumbers, [firstNumber, secondNumber]]);
      } else {
        map.set(difference, [[firstNumber, secondNumber]]);
      }
    }
  }

  const array = Array.from(map.keys());
  const smallestDifference = Math.min(...array);

  const value = map.get(smallestDifference);
  return value;
} */

function smallestDifference(input1: number[], input2: number[]) {
  input1.sort((a, b) => a - b);
  input2.sort((a, b) => a - b);

  let smallestDifference = Number.POSITIVE_INFINITY;
  let currentDifference = Number.POSITIVE_INFINITY;
  let smallestPair = null;

  let idx1 = 0,
    idx2 = 0;

  while (idx1 < input1.length && idx2 < input2.length) {
    const firstNumber = input1[idx1];
    const secondNumber = input2[idx2];

    const difference = firstNumber - secondNumber;

    if (difference === 0) {
      smallestPair = [firstNumber, secondNumber];
      break;
    }

    if (difference < 0) idx1++;
    if (difference > 0) idx2++;

    currentDifference = Math.abs(difference);

    if (currentDifference <= smallestDifference) {
      smallestDifference = currentDifference;
      smallestPair = [firstNumber, secondNumber];
    }
  }

  return smallestPair;
}

console.log(smallestDifference(input1, input2));
