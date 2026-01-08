//Leetcode 1662. Check If Two String Arrays are Equivalent::
/* Example 1:
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]                Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Example 2:
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]                Output: false

Example 3:
Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]     Output: true*/
var arrayStringsAreEqual = function (word1, word2) {
  const firstWord = word1.join('');
  const secondWord = word2.join('');

  if (firstWord !== secondWord) {
    return false;
  }
  else {
    return true;
  }

};
console.log(arrayStringsAreEqual(word1 = ["ab", "c"], word2 = ["a", "bc"]));  //Output: true
console.log(arrayStringsAreEqual(word1 = ["a", "cb"], word2 = ["ab", "c"]));   // Output: false
console.log(arrayStringsAreEqual(word1 = ["abc", "d", "defg"], word2 = ["abcddefg"])); //Output: true