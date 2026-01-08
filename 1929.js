//1929. Concatenation of Array
/*Example 1:
Input: nums = [1,2,1]                      Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Example 2:
Input: nums = [1,3,2,1]                    Output: [1,3,2,1,1,3,2,1]*/

var getConcatenation = function (nums) {

   return nums.concat(...nums)
};

console.log(getConcatenation(nums = [1, 2, 1])); Output: [1, 2, 1, 1, 2, 1]
console.log(getConcatenation(nums = [1, 3, 2, 1])); Output: [1, 3, 2, 1, 1, 3, 2, 1]