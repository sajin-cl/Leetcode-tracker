//2529. Maximum Count of Positive Integer and Negative Integer
/*Example 1:
Input: nums = [-2,-1,-1,1,2,3]                          Output: 3

Example 2:
Input: nums = [-3,-2,-1,0,0,1,2]                        Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

Example 3:
Input: nums = [5,20,66,1314]                            Output: 4*/

var maximumCount = function (nums) {
  
  let negCount = 0;
  let posCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negCount++;
    }
    else if (nums[i] > 0) {
      posCount++;
    }
  };

  return maxCount = Math.max(negCount, posCount);

};
console.log(maximumCount(nums = [-2, -1, -1, 1, 2, 3])); Output: 3
console.log(maximumCount(nums = [-3, -2, -1, 0, 0, 1, 2])); Output: 3
console.log(maximumCount(nums = [5, 20, 66, 1314])); Output: 4