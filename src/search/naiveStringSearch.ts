// const text = "Prabin Gautam will be a famous game developer one day. Mark my word.";
const text = "waomggaomg";

function naviveStringSearch(pattern: string) {
  let found = 0;
  let leftPointer = 0;
  for (const char of text) {
    if (char === pattern[leftPointer]) {
      leftPointer++;
      if (leftPointer === pattern.length) {
        found++;
        leftPointer = 0; // Reset pointer after a match
      }
    } else {
      leftPointer = 0; // Reset pointer if characters don't match
    }
  }

  return found;
}

console.log(naviveStringSearch("omg"));
