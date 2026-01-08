//Leetcode problem --2824. Count Pairs Whose Sum is Less than Target:
/*Example 1:
Input: nums = [-1,1,2,3,1], target = 2
Output: 3

Example 2:
Input: nums = [-6,2,5,-2,-7,-1,3], target = -2
Output: 10*/

var countPairs = function (nums, target) {

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        count++
      }
    }
  }
  return count;
};

console.log(countPairs(nums = [-1, 1, 2, 3, 1], target = 2));//Output: 3
console.log(countPairs(nums = [-6, 2, 5, -2, -7, -1, 3], target = -2));//Output: 10