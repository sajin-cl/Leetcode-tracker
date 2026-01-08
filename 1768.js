//leetcode problem :1768 Merge Strings Alternately::
/*
Example 1:
Input: word1 = "abc", word2 = "pqr"           Output: "apbqcr"

Example 2:
Input: word1 = "ab", word2 = "pqrs"           Output: "apbqrs"

Example 3:
Input: word1 = "abcd", word2 = "pq"           Output: "apbqcd"
*/
var mergeAlternately = function (word1, word2) {
  const firstWord = word1.split('')
  const secondWord = word2.split('')
  const arrayCount = word1.length + word2.length;
  let arr = [];

  for (let i = 0; i < arrayCount; i++) {
    if (firstWord[i]) {
      arr.push(firstWord[i]);
    }
    if (secondWord[i]) {
      arr.push(secondWord[i]);
    }
  }
  return arr.join('');
};

console.log(mergeAlternately(word1 = "abc", word2 = "pqr"))
console.log(mergeAlternately(word1 = "ab", word2 = "pqrs"))
console.log(mergeAlternately(word1 = "abcd", word2 = "pq"))