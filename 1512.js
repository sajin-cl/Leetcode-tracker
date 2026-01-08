//1512. Number of Good Pairs--leetcode problem
/*Example 1:
Input: nums = [1,2,3,1,1,3]             Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]                 Output: 6

Example 3:
Input: nums = [1,2,3]                   Output: 0 */

var numIdenticalPairs = function (nums) {
  let numPairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        numPairs++;
      }
    }
  }
  return numPairs;
};

console.log(numIdenticalPairs(nums = [1, 2, 3, 1, 1, 3])); Output: 4
console.log(numIdenticalPairs(nums = [1, 1, 1, 1])); Output: 6
console.log(numIdenticalPairs(nums = [1, 2, 3])); Output: 0