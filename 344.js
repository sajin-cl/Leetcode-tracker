//344. Reverse String-- Leetcode problem
/*Example 1:
Input: s = ["h","e","l","l","o"]           Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]       Output: ["h","a","n","n","a","H"] */

var reverseString = function (s) {
  const reverseStr = s.reverse();

  return reverseStr;
};

console.log(reverseString(s = ["h", "e", "l", "l", "o"])); Output: ["o", "l", "l", "e", "h"]
console.log(reverseString(s = ["H", "a", "n", "n", "a", "h"])); Output: ["h", "a", "n", "n", "a", "H"]