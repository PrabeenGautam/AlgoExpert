const input = 121;

function isPalindrome(x: number): boolean {
  const string = String(x);
  let i = 0,
    j = string.length - 1;

  while (i <= j) {
    if (string[i] !== string[j]) return false;
    i++;
    j--;
  }

  return true;
}
console.log(isPalindrome(input));
