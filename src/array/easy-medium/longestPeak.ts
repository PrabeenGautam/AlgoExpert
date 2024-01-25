const input = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

// output === 6
// function longestPeak(inputs: number[]) {
//   let peakValue = 0,
//     peakIndex = 0;

//   let i = 1;

//   while (i < inputs.length - 1) {
//     const number = inputs[i];

//     const isLeftSmall = inputs[i - 1] < number;
//     const isRightSmall = inputs[i + 1] < number;

//     const isPeak = isLeftSmall && isRightSmall;

//     if (isPeak) {
//       peakIndex = peakValue < number ? i : peakIndex;
//       peakValue = peakValue < number ? number : peakValue;
//     }

//     i++;
//   }

//   return peakIndex;
// }

function longestPeak(inputs: number[]) {
  let longestPeakLength = 0;
  let i = 1;

  while (i < inputs.length - 1) {
    const number = inputs[i];
    const isPeak = inputs[i - 1] < number && inputs[i + 1] < number;
    if (!isPeak) {
      i++;
      continue;
    }

    let leftIndex = i - 2;
    while (leftIndex >= 0 && inputs[leftIndex] < inputs[leftIndex + 1]) {
      leftIndex--;
    }

    let rightIndex = i + 2;
    while (rightIndex < inputs.length && inputs[rightIndex] < inputs[rightIndex - 1]) {
      rightIndex++;
    }

    const currentPeakLength = rightIndex - leftIndex - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    i = rightIndex;
  }

  return longestPeakLength;
}

console.log(longestPeak(input));
