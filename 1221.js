//Leetcode 1221  Split a String in Balanced Strings::
/*Example 1:
Input: s = "RLRRLLRLRL"           Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLRRRLLRLL"           Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

Example 3:
Input: s = "LLLLRRRR"             Output: 1
Explanation: s can be split into "LLLLRRRR".
*/
var balancedStringSplit = function (s) {
  let count = 0;
  let balancedString = 0;
  const string = [...s];

  for (let s of string) {
    s === 'R' ? count++ : count--;
    if (count === 0) {
      balancedString++;
    };
  };

  return balancedString;

};

console.log(balancedStringSplit(s = "RLRRLLRLRL"));//4
console.log(balancedStringSplit(s = "RLRRRLLRLL"));//2
console.log(balancedStringSplit(s = "LLLLRRRR"));//1