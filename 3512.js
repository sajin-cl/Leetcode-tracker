//Leetcode 3512. Minimum Operations to Make Array Sum Divisible by K::
/*Example 1:
Input: nums = [3,9,7], k = 5                  Output: 4

Example 2:
Input: nums = [4,1,3], k = 4                 Output: 0

Example 3:
Input: nums = [3,2], k = 6                   Output: 5
*/
var minOperations = function (nums, k) {
  const numbers = nums.reduce((accumulator, num) => {
    return accumulator + num
  })
  console.log(numbers)
  return numbers % k;
};
console.log(minOperations(nums = [3, 9, 7], k = 5)); //4
console.log(minOperations(nums = [4, 1, 3], k = 4));//0
console.log(minOperations(nums = [3, 2], k = 6));//5