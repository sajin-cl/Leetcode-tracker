//Leetcode 645. Set Mismatch::
/*Example 1:
Input: nums = [1,2,2,4]          Output: [2,3]

Example 2:
Input: nums = [1,1]              Output: [1,2]*/

var findErrorNums = function (nums) {
  
  let duplicateValue,missingValue;

  const numFreq = {};
  for (let n of nums) {
    numFreq[n] = (numFreq[n] || 0) + 1
  };

  for (let i = 1; i <= nums.length; i++) {

    if (numFreq[i] > 1) {
      duplicateValue = i
    }
    if (!numFreq[i]) {
      missingValue = i
    }
  }

  return [duplicateValue, missingValue];

};
console.log(findErrorNums(nums = [1, 2, 2, 4]));  // Output: [2,3]
console.log(findErrorNums(nums = [1, 1]));        // Output: [1,2]