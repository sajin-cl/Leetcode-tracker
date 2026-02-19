//2341. Maximum Number of Pairs in Array
/*
Example 1:
Input: nums = [1,3,2,1,3,2,2]
Output: [3,1]

Example 2:
Input: nums = [1,1]
Output: [1,0] 

Input: nums = [0]
Output: [0,1]*/

var numberOfPairs = function (nums) {

  const freq = {};

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let pairs = 0;

  for (let key in freq) {
    pairs += Math.floor(freq[key] / 2)
  }

  return [pairs, nums.length - pairs * 2]
};

console.log(numberOfPairs(nums = [1, 3, 2, 1, 3, 2, 2]));
console.log(numberOfPairs(nums = [1, 1]));
console.log(numberOfPairs(nums = [0]));