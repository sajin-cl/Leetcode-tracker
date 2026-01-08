//leetcode problem: 1967 Number of Strings That Appear as Substrings in Word::
/*
EX:01
Input: patterns = ["a","abc","bc","d"], word = "abc"
Output: 3

EX:02
Input: patterns = ["a","b","c"], word = "aaaaabbbbb"
Output: 2
*/
var numOfStrings = function (patterns, word) {
  let stringCount = 0;
  for (let p of patterns) {

    if (word.includes(p)) {
      stringCount++;
    }
  }
  return stringCount;
};

console.log(numOfStrings(patterns = ["a", "abc", "bc", "d"], word = "abc"));
console.log(numOfStrings(patterns = ["a", "b", "c"], word = "aaaaabbbbb"));
console.log(numOfStrings(patterns = ["a", "a", "a"], word = "ab"));