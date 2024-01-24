// const inputs = [5, 1, 4, 2];

// output [8, 40, 10, 20]

// brute force approach n2
/* function arrayOfProducts(array: number[]) {
  const result = Array.from({ length: array.length }).fill(1) as number[];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        result[i] *= array[j];
      }
    }
  }

  return result;
} */

const inputs = [5, 1, 4, 2];

// optimal solutions
// output [8, 40, 10, 20]
function arrayOfProducts(array: number[]) {
  const length = array.length;
  const result = Array.from({ length }).fill(1) as number[];

  // calculate left products
  let leftProduct = 1;
  for (const [i, number] of array.entries()) {
    result[i] = leftProduct;
    leftProduct = leftProduct * number;
  }

  // calculate right products
  let rightProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct = rightProduct * array[i];
  }

  return result;
}

console.log(arrayOfProducts(inputs));
