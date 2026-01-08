//507. Perfect Number
/*Example 1:
Input: num = 28              Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.

Example 2:
Input: num = 7                Output: false */

var checkPerfectNumber = function (num) {

  if (num <= 1) return false;

  let sum = 1;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
};

console.log(checkPerfectNumber(28)); // true
console.log(checkPerfectNumber(7));  // false
