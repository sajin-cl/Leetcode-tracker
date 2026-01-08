//3190. Find Minimum Operations to Make All Elements Divisible by Three
/*Example 1:
Input: nums = [1,2,3,4]           Output: 3

Example 2:
Input: nums = [3,6,9]             Output: 0 */

var minimumOperations = function (nums) {
  let minNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 !== 0) {
      minNumber++;
    }
  }
  return minNumber;
};

console.info(minimumOperations(nums = [1, 2, 3, 4])); output: 3
console.info(minimumOperations(nums = [3, 6, 9])); output: 0