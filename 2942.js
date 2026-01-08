//Leetcode problem ---2942. Find Words Containing Character::
/*Example 1:
Input: words = ["leet","code"], x = "e"
Output: [0,1] 

Example 2:
Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]

Example 3:
Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
Output: []*/

var findWordsContaining = function (words, x) {
  const indicesArr = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.includes(x)) {
      indicesArr.push(i)
    }

  };
  return indicesArr;
};

console.log(findWordsContaining(words = ["leet", "code"], x = "e")); Output: [0, 1]
console.log(findWordsContaining(words = ["abc", "bcd", "aaaa", "cbc"], x = "a")); Output: [0, 2]
console.log(findWordsContaining(words = ["abc", "bcd", "aaaa", "cbc"], x = "z")); Output: []