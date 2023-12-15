function mergeTwoLists(list1: number[], list2: number[]) {
  let i = 0,
    j = 0;

  const length = list1.length + list2.length;
  const sortedArray = Array.from({ length }, () => 0);

  while (i < list1.length || j < list2.length) {
    const firstNum = list1[i];
    const secondNum = list2[j];

    if (firstNum <= secondNum) {
      sortedArray[i + j] = firstNum;
      i++;
    } else {
      sortedArray[i + j] = secondNum;
      j++;
    }
  }

  return sortedArray;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
