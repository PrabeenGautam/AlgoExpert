const inputs = [12, 3, 1, 2, -6, 5, -8, 6];
const target = 0;

function threeNumberSum(inputs: number[], target: number) {
  inputs.sort((a, b) => a - b);

  const answers = new Array();

  for (let i = 0; i < inputs.length; i++) {
    const currentNums = inputs[i];

    let ltr = i + 1,
      rtl = inputs.length - 1;

    while (ltr < rtl) {
      const secondNums = inputs[ltr];
      const thirdNums = inputs[rtl];

      const estimatedThird = target - currentNums - secondNums;

      if (estimatedThird === thirdNums) {
        answers.push([currentNums, secondNums, thirdNums]);
        ltr++;
        rtl--;
      }

      if (estimatedThird > thirdNums) {
        ltr++;
      }

      if (estimatedThird < thirdNums) {
        rtl--;
      }
    }
  }

  return answers;
}

console.log(threeNumberSum(inputs, target));
