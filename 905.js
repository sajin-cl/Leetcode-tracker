//905. Sort Array By Parity
/*Example 1:
Input: nums = [3,1,2,4]                      Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
Input: nums = [0]                            Output: [0] */

var sortArrayByParity = function (nums) {

  const evenArr = [];
  const oddArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      evenArr.push(nums[i])
    }
    else {
      oddArr.push(nums[i]);
    }
  };
  return evenArr.concat(oddArr);
};

console.info(sortArrayByParity(nums = [3, 1, 2, 4])); Output: [2, 4, 3, 1];
console.info(sortArrayByParity(nums = [0])); Output: [0];