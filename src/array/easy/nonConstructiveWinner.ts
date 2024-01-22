// const score = [5, 7, 1, 1, 2, 3, 2, 2];
const score = [1, 2, 5];
// output = 20, 4

function nonConstructiveWinner(inputs: number[]) {
  inputs.sort((a, b) => a - b);

  let currentChange = 0;

  for (const value of inputs) {
    if (value > currentChange + 1) {
      return currentChange + 1;
    }

    currentChange += value;
  }

  return currentChange + 1;
}

console.log(nonConstructiveWinner(score));
