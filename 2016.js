//2016. Maximum Difference Between Increasing Elements
/*Example 1:
Input: nums = [7,1,5,4]                            Output: 4

Example 2:
Input: nums = [9,4,3,2]                            Output: -1

Example 3:
Input: nums = [1,5,2,10]                          Output: 9*/

var maximumDifference = function (nums) {

  const maxDiff = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        const val = nums[j] - nums[i];
        maxDiff.push(val)
      }
    }
  }
  if (maxDiff.length === 0) return -1
  else return Math.max(...maxDiff);
};

console.log(maximumDifference(nums = [7, 1, 5, 4])); Output: 4
console.log(maximumDifference(nums = [9, 4, 3, 2])); Output: -1
console.log(maximumDifference(nums = [1, 5, 2, 10])); Output: 9