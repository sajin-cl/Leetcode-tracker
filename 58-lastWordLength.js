//leetcode problem :58 Length of last word
/*
Example 1:
Input: s = "Hello World"                           Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "           Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

var lengthOfLastWord = function (s) {
  const word = s.split(' ');
  let lastWord;

  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] !== '') {
      lastWord = word[i];
      break;
    };
  };
  return lastWord.length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));



