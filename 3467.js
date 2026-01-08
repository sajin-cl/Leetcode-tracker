//Leetcode problem --3467. Transform Array by Parity::
/*
Example 1:
Input: nums = [4,3,2,1]
Output: [0,0,1,1] 

Example 2:
Input: nums = [1,5,1,4,2]
Output: [0,0,1,1,1]*/

var transformArray = function (nums) {
  const transArr = [];

  for (let i = 0; i < nums.length; i++) {
    transArr.push(nums[i] % 2);
  };

  return transArr.sort();
};

console.log(transformArray(nums = [4, 3, 2, 1]));Output: [0,0,1,1] 
console.log(transformArray(nums = [1, 5, 1, 4, 2]));Output: [0,0,1,1,1]