//Leetcode 2544. Alternating Digit Sum::
/*Example 1:
Input: n = 521            Output: 4
Explanation: (+5) + (-2) + (+1) = 4.

Example 2:
Input: n = 111            Output: 1
Explanation: (+1) + (-1) + (+1) = 1.

Example 3:
Input: n = 886996         Output: 0 */

var alternateDigitSum = function (n) {

  const numbers = n.toString().split('').map(Number);

  const sum = numbers.reduce((sum, digit, index) => {
    if (index % 2 === 0) {
      return sum + digit;
    }
    else {
      return sum - digit
    }
  });
  return sum;
  
};
console.log(alternateDigitSum(n = 521)); //4
console.log(alternateDigitSum(n = 111)); //1
console.log(alternateDigitSum(n = 886996));//0