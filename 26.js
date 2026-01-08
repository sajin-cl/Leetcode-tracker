//26. Remove Duplicates from Sorted Array
/*Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]*/

var removeDuplicates = function (nums) {

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j--;
      }
    }
  }
  return nums.length;
};

console.info(removeDuplicates(nums = [1, 1, 2])); Output: 2
console.info(removeDuplicates(nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); Output: 5