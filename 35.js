//leetcode 3512 ::Search Insert Position::
/* Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4 */

var searchInsert = function (nums, target) {
  const numbers = [...nums];
  let result = 0;
  if (nums.includes(target)) {
    result = nums.indexOf(target)
  }
  else {
    numbers.push(target);
    numbers.sort();
    result = numbers.indexOf(target);
  }
  return result;
};

console.log(searchInsert(nums = [1, 3, 5, 6], target = 5));//2
console.log(searchInsert(nums = [1, 3, 5, 6], target = 2));//1
console.log(searchInsert(nums = [1, 3, 5, 6], target = 7));//4