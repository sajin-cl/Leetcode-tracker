//Leetcode problem --2114. Maximum Number of Words Found in Sentences::
/*Example 1:
Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6

Example 2:
Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
*/
var mostWordsFound = function (sentences) {

  let wordCount = [];

  for (let ch of sentences) {
    wordCount.push(ch.split(' ').length)
  }

  return Math.max(...wordCount);
};

console.log(mostWordsFound(sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
console.log(mostWordsFound(sentences = ["please wait", "continue to fight", "continue to win"]));