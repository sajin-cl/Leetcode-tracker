//Leetcode 217. Contains Duplicate ::
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/*Example 1:  
Input: nums = [1,2,3,1]                Output: true

Example 2:
Input: nums = [1,2,3,4]                Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]    Output: true*/

var containsDuplicate = function (nums) {

  const numFreq = {};
  for (let n of nums) {
    numFreq[n] = (numFreq[n] || 0) + 1;
  }

  for (let key in numFreq) {
    if (numFreq[key] > 1) {
      return true;
    }

  }
  return false;

};
console.log(containsDuplicate(nums = [1, 2, 3, 1]));                     //Output: true
console.log(containsDuplicate(nums = [1, 2, 3, 4]));                     //Output: false
console.log(containsDuplicate(nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));   //Output: true