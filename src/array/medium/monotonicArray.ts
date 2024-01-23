const inputs = [-1, -5, -10, -1100, -1101, -1102, -9001];
const inputs1 = [1, 1, 1, 2];

function monotonicArray(inputs: number[]) {
  let pointer = 1;
  let flag = null;

  while (pointer < inputs.length) {
    const firstNumber = inputs[pointer - 1];
    const secondNumber = inputs[pointer];

    const difference = secondNumber - firstNumber;

    if (!flag) {
      if (difference > 0) flag = "inc";
      if (difference < 0) flag = "dec";
    }

    if (flag === "inc" && difference < 0) return false;
    if (flag === "dec" && difference > 0) return false;

    pointer++;
  }

  return true;
}

console.log(monotonicArray(inputs));
