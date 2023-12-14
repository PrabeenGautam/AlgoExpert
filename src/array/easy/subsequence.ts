/* const input = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10]; */

const input = "ahbgdc";
const sequence = "abc";

/* function validateSubsequence(array: string, sequence: string) {
  let parentPtr = 0,
    seqPtr = 0;

  while (parentPtr < array.length && seqPtr < sequence.length) {
    const parentNum = array[parentPtr];
    const childNum = sequence[seqPtr];

    if (parentNum === childNum) {
      seqPtr++;
    }

    parentPtr++;
  }

  return seqPtr === sequence.length;
}
 */

function validateSubsequence(s: string, t: string) {
  let sequencePtr = 0;

  if (t.length < 1 && s.length < 1) return true;

  for (let element of t) {
    if (s[sequencePtr] === element) sequencePtr++;
    if (sequencePtr === s.length) return true;
  }

  return false;
}

console.log(validateSubsequence(sequence, input));
