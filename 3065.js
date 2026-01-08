//Leetcode problem --3065. Minimum Operations to Exceed Threshold Value I::
/*Example 1:
Input: nums = [2,11,10,1,3], k = 10
Output: 3

Example 2:
Input: nums = [1,1,2,4,9], k = 1
Output: 0

Example 3:
Input: nums = [1,1,2,4,9], k = 9
Output: 4*/
var minOperations = function (nums, k) {

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      count++;
    }
  }
  return count;
};

console.log(minOperations(nums = [2, 11, 10, 1, 3], k = 10)); Output: 3
console.log(minOperations(nums = [1, 1, 2, 4, 9], k = 1)); Output: 0
console.log(minOperations(nums = [1, 1, 2, 4, 9], k = 9)); output: 4  