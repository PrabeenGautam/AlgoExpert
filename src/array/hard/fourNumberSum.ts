const inputs = [7, 6, 4, -1, 1, 2];
const inputs1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const inputs = [-1, 1, 2, 4, 6, 7];
// output [7,6,4,-1], 7,6,1,2

/* function fourNumberSum(array: number[], target = 16) {
  const result = [];

  array.sort((a, b) => a - b);

  let idxStart = 0,
    idxEnd = array.length - 1;

  while (idxStart < idxEnd) {
    const firstNumber = array[idxStart];
    const secondNumber = array[idxEnd];

    let thirdIndex = idxStart + 1;
    let fourthIndex = idxEnd - 1;

    while (thirdIndex < fourthIndex) {
      const thirdNumber = array[thirdIndex];
      const fourthNumber = array[fourthIndex];

      const expectedFourthNumber = target - (firstNumber + secondNumber + thirdNumber);

      if (expectedFourthNumber === fourthNumber) {
        result.push([firstNumber, secondNumber, thirdNumber, fourthNumber]);
        thirdIndex++;
        fourthIndex--;
        continue;
      }

      if (expectedFourthNumber > fourthNumber) {
        thirdIndex++;
        continue;
      }

      fourthIndex--;
    }

    idxStart++;
  }

  return result;
} */

function fourNumberSum(array: number[], target = 16) {
  const result = [];
  const visitedMap: Map<number, number[][]> = new Map();
}

console.log(fourNumberSum(inputs));
