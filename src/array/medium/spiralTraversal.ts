const matrix = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function spiralTraversal(inputs: number[][]) {
  const result = new Array<number>();

  // Row Stats
  let startRow = 0,
    endRow = inputs.length - 1;

  // Column Stats
  let startCol = 0,
    endCol = inputs[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startRow; col <= endCol; col++) {
      const element = inputs[startRow][col];
      result.push(element);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      const element = inputs[row][endCol];
      result.push(element);
    }

    for (let col = endCol - 1; col > startCol; col--) {
      const element = inputs[endRow][col];
      result.push(element);
    }

    for (let row = endCol; row > startRow; row--) {
      const element = inputs[row][startCol];
      result.push(element);
    }

    startRow++;
    endRow--;

    startCol++;
    endCol--;
  }

  return result;
}

console.log(spiralTraversal(matrix));
