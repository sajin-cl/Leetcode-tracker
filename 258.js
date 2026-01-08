//Leetcode problem --258. Add Digits::
/*Example 1:
Input: num = 38        Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0       Output: 0 */
var addDigits = function (num) {

  while (num >= 10) {
    let sum = 0;

    let number = num.toString().split('');

    for (let n of number) {
      sum += Number(n)
    }
    num = sum;
  }
  return num;

};

console.log(addDigits(num = 38)); //2
console.log(addDigits(num = 0));  //0
