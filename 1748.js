//Leetcode 1748. Sum of Unique Elements::
/*Example 1:
Input: nums = [1,2,3,2]           Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:
Input: nums = [1,1,1,1,1]         Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:
Input: nums = [1,2,3,4,5]         Output: 15 */
var sumOfUnique = function (nums) {
  let sum = 0;
  const numfreq = {};
  for (let n of nums) {
    numfreq[n] = (numfreq[n] || 0) + 1
  }

  for (let key in numfreq) {
    console.log(`key:${numfreq[key]}`)
    if (numfreq[key] === 1) {
      sum += Number(key)
    }
  }
  return sum;
};
console.log(sumOfUnique(nums = [1, 2, 3, 2]));       // 4 
console.log(sumOfUnique(nums = [1,1,1,1,1]));   // 0
console.log(sumOfUnique(nums = [1,2,3,4,5]));   // 15