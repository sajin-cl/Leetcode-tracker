//Leetcode problem --1323. Maximum 69 Number::
/*Example 1:
Input: num = 9669            Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.

Example 2:
Input: num = 9996             Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.

Example 3:
Input: num = 9999             Output: 9999
Explanation: It is better not to apply any change. */

var maximum69Number = function (num) {

  const stringNum = num.toString().split('')
  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] == 6) {
      stringNum[i] = 9
      break;
    }
  };

  const maxNumber =Number(stringNum.join(''));
  
  return maxNumber;
};

console.log(maximum69Number(num = 9669)); //Output: 9969
console.log(maximum69Number(num = 9996)); //Output: 9999
console.log(maximum69Number(num = 9999)); //Output: 9999