const inputs = [2, 1, 5, 2, 3, 3, 4];

// output 2

function firstDuplicateValue(array: number[]) {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const hasElement = map.has(element);
    if (hasElement) return element;

    map.set(element, i);
  }

  return -1;
}

console.log(firstDuplicateValue(inputs));
