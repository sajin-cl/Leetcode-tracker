//3340. Check Balanced String
/*Explanation:
The sum of digits at even indices is 1 + 3 == 4, and the sum of digits at odd indices is 2 + 4 == 6.
Since 4 is not equal to 6, num is not balanced.

Example 1:
Input: num = "1234"               Output: false

Example 2:
Input: num = "24123"             Output: true*/

var isBalanced = function (num) {

  let oddDigitSum = 0;
  let evenDigitSum = 0;

  for (let i = 0; i < num.length; i++) {
    if (i % 2 == 0) {
      oddDigitSum += Number(num[i]);
    }
    else {
      evenDigitSum += Number(num[i]);
    }
  }
  return oddDigitSum === evenDigitSum;

};

console.log(isBalanced(num = "1234")); Output: false
console.log(isBalanced(num = "24123")); Output: true