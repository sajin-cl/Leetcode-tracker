//Leetcode problems --268. Missing Number::
/*Example 1:
Input: nums = [3,0,1]
Output: 2

Example 2:
Input: nums = [0,1]
Output: 2 */
var missingNumber = function (nums) {

  const sortNum = nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length; i++) {
    if (sortNum[i] !== i) {
      return i;
    }
  };
};

console.info(missingNumber(nums = [3, 0, 1]));
console.info(missingNumber(nums = [0, 1]));
console.info(missingNumber(nums = [0, 1, 2, 4, 3, 6]));