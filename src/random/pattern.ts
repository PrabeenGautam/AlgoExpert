/*
  123
  456
  789
  */
function pattern1() {
  let count = 1;
  for (let i = 1; i <= 3; i++) {
    let string = "";
    for (let j = 1; j <= 3; j++) {
      string = string + count + " ";
      count++;
    }

    console.log(string);
  }
}

function trianglePattern() {
  for (let i = 0; i < 4; i++) {
    let string = "";
    for (let j = 0; j < i + 1; j++) {
      string = string + "* ";
    }

    console.log(string);
  }
}

function numberPattern(n = 5) {
  let row = 1;
  while (row <= n) {
    let data = [];
    let col = 1;

    while (col <= row) {
      data.push(row + col - 1);
      col++;
    }

    console.log(...data);
    row++;
  }
}

function pattern2(n = 4) {
  for (let row = 1; row <= n; row++) {
    let data = [];

    for (let col = 1; col <= row; col++) {
      data.push(row - col + 1);
    }
    console.log(...data);
  }
}

pattern2(4);
