//Leetcode problems --1920. Build Array from Permutation::
/*
Example 1:
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3] 

Example 2:
Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]*/

var buildArray = function (nums) {
  const newArr = [];
  let numsIndex = nums.indexOf(nums)
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];


     console.log(num);

    }
    return numsIndex
};

console.info(buildArray(nums = [0, 2, 1, 5, 3, 4]));
console.info(buildArray(nums = [5, 0, 1, 2, 3, 4]));