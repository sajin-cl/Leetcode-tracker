//Leetcode problem --1822. Sign of the Product of an Array::
/*
1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.

Example 1:
Input: nums = [-1,-2,-3,-4,3,2,1]             Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1

Example 2:
Input: nums = [1,5,0,2,-3]                    Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0

Example 3:
Input: nums = [-1,1,-1,1,-1]                  Output: -1 */

var arraySign = function (nums) {
  let signCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      signCount++;
    }
    else if (nums[i] === 0) {
      return 0;
    }
  };

  return signCount % 2 === 0 ? 1 : -1;

};

console.log(arraySign(nums = [-1, -2, -3, -4, 3, 2, 1])); // 1
console.log(arraySign(nums = [1, 5, 0, 2, -3]));         //  0
console.log(arraySign(nums = [-1, 1, -1, 1, -1]));      //  -1