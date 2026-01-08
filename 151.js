//151. Reverse Words in a String
/*Example 1:
Input: s = "the sky is blue"           Output: "blue is sky the"

Example 2:
Input: s = "  hello world  "           Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
Input: s = "a good   example"          Output: "example good a" */

var reverseWords = function (s) {

  let wordArr = s.split(' ');
  let reversedArr = []

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] !== '') {
      reversedArr.unshift(wordArr[i])

    }
  }
  return reversedArr.join(' ');

};

console.log(reverseWords(s = "the sky is blue")); Output: "blue is sky the"
console.log(reverseWords(s = "  hello world  ")); Output: "world hello"
console.log(reverseWords(s = "a good   example")); Output: "example good a"