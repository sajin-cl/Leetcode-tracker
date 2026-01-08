//3099. Harshad Number

/* Example 1:
Input: x = 18
Output: 9
Explanation:
The sum of digits of x is 9. 18 is divisible by 9. So 18 is a Harshad number and the answer is 9.

Example 2:
Input: x = 23
Output: -1
Explanation:
The sum of digits of x is 5. 23 is not divisible by 5. So 23 is not a Harshad number and the answer is -1. */

const x = 18;
const splitedX = x.toString().split('');
let sum = 0

splitedX.forEach((num) => {
  sum += Number(num);
});
if (x % sum == 0) {
  console.log(sum)
}
else {
  console.log('-1')
}
