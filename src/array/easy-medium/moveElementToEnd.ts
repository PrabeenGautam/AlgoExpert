const inputs = [2, 1, 2, 2, 2, 3, 4, 2];

// nlogn
/* function moveElementToEnd(inputs: number[], target = 2) {
  inputs.sort((a, b) => a - b);

  let ltr = 0;
  let inputLength = inputs.length - 1;

  for (const _ of inputs) {
    const current = inputs[ltr];

    if (current !== target) ltr++;

    // Swap Values
    if (current === target) {
      const lastNum = inputs[inputLength];

      if (lastNum !== target) {
        const temp = inputs[ltr];
        inputs[inputLength] = temp;
        inputs[ltr] = lastNum;
      }

      if (lastNum === target) {
        inputLength--;
      }
    }
  }

  return inputs;
} */

function moveElementToEnd(inputs: number[], target = 2) {
  let ltr = 0,
    rtl = inputs.length - 1;

  while (ltr < rtl) {
    const firstNumber = inputs[ltr];
    const lastNumner = inputs[rtl];

    console.log({ firstNumber, lastNumner });

    if (firstNumber !== target) ltr++;

    if (firstNumber === target) {
      if (lastNumner === target) rtl--;

      if (lastNumner !== target) {
        inputs[ltr] = lastNumner;
        inputs[rtl] = firstNumber;
      }
    }
  }

  return inputs;
}

console.log(moveElementToEnd(inputs));
