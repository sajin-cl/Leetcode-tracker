//Leetcode problem:3168 Minimum Number of Chairs in a Waiting Room::
/*
Example 1:
Input: s = "EEEEEEE"                Output: 7

Example 2:
Input: s = "ELELEEL"                Output: 2

Example 3:
Input: s = "ELEELEELLL"             Output: 3
*/

var minimumChairs = function (s) {
  let count = 0;
  let maxChairs = 0;

  for (let char of s) {
    if (char === 'E') {
      count++;
      maxChairs = Math.max(maxChairs, count)
    }
    else {
      count--;
    }
  }
  return maxChairs;
};

console.log(minimumChairs(s = "EEEEEEE"));
console.log(minimumChairs(s = "ELELEEL"));
console.log(minimumChairs(s = "ELEELEELLL"));