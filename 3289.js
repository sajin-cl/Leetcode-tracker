//Leetcode problem --3289. The Two Sneaky Numbers of Digitville::
/*
Explanation:
The numbers 0 and 1 each appear twice in the array.

Example 1:
Input: nums = [0,1,1,0]                      Output: [0,1]

Example 2:
Input: nums = [0,3,2,1,3,2]                  Output: [2,3]

Example 3:
Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2]      Output: [4,5]
 */
var getSneakyNumbers = function (nums) {

  let pairArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        pairArr.push(nums[i]);
      }
    }
  };
  return pairArr.sort();
};

console.log(getSneakyNumbers(nums = [0, 1, 1, 0])); output: [0, 1]
console.log(getSneakyNumbers(nums = [0, 3, 2, 1, 3, 2])); output: [2, 3]
console.log(getSneakyNumbers(nums = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2])); Output: [4, 5]