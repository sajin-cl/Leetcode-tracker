//Leetcode Problem---1295. Find Numbers with Even Number of Digits::
/*
Example 1:
Input: nums = [12,345,2,6,7896]      Output: 2 

Example 2:
Input: nums = [555,901,482,1771]     Output: 1 */
var findNumbers = function (nums) {
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    let digit = nums[i].toString().split('');
    if (digit.length % 2 == 0) {
      count++;
    }
  };
  return count;

};
console.log(findNumbers(nums = [12, 345, 2, 6, 7896])); //2
console.log(findNumbers(nums = [555, 901, 482, 1771])); //1