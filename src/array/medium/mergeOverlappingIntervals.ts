/* 
  Given numbers are intervals.
  [3, 5] => 3, 4, 5
  [4, 7] => 4, 5, 6, 7

* Both above intervals, contains 4, 5 overlapping. So merge these intervals together. final intervals will be [3, 7]
*/

const inputs = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];

// output [[1,2], [3, 8], [9, 10]]
// my solutions
function mergeOverlappingIntervals(array: number[][]) {
  array.sort((a, b) => a[0] - b[0]);

  let highestInterval = 0;
  let mergeIndex = -1;

  const result = [];

  for (let i = 0; i < array.length; i++) {
    const [firstInterval, secondInterval] = array[i];

    const isNotOverLapping = firstInterval > highestInterval;

    if (isNotOverLapping) {
      result.push([firstInterval, secondInterval]);
      mergeIndex = i;
      highestInterval = secondInterval;
      continue;
    }

    const [first] = array[mergeIndex];
    result[mergeIndex] = [first, secondInterval];

    highestInterval = secondInterval;
  }

  return result;
}

function mergeOverlappingInterval(array: number[][]) {
  array.sort((a, b) => a[0] - b[0]);
  // your code here

  let result = [];
  let currentInterval = array[0];
  let index = -1;

  result.push(currentInterval);

  for (let i = 1; i < array.length; i++) {
    const nextInterval = array[i];
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;
    const [_, currentIntervalEnd] = currentInterval;

    // NOT OVERLAPPING
    if (currentIntervalEnd < nextIntervalStart) {
      currentInterval = nextInterval;
      result.push(nextInterval);
      continue;
    }

    // OVERLAPPING
    currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
  }

  return result;
}

console.log("My Solutions \n");
console.log(mergeOverlappingIntervals(inputs));

console.log("\n\nAlgo Solutions \n");
console.log(mergeOverlappingInterval(inputs));
