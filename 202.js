//leetcode 202 Happy customer::
/* Example 1:
Input: n = 19         Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:
Input: n = 2          Output: false */

var isHappy = function (n) {
  
  

  while (num !== 1) {
    let numbers = n.toString().split('');
    let num = []
    for (let number of numbers) {
      num.push(number * number)
    }
    console.log(num)
  }
  return num;

};
console.log(isHappy(n = 19));
//console.log(isHappy(n = 2));