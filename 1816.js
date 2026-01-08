//Leetcode problem --1816. Truncate Sentence::
/*Example 1:
Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].

Example 2:
Input: s = "What is the solution to this problem", k = 4
Output: "What is the solution"

Example 3:
Input: s = "chopper is not a tanuki", k = 5
Output: "chopper is not a tanuki"*/

var truncateSentence = function (s, k) {
  const word = s.split(' ');
  let newWord = [];

  for (let i = 0; i < k; i++) {
    newWord.push(word[i]);
  }

  return newWord.join(' ');
};

console.log(truncateSentence(s = "Hello how are you Contestant", k = 4));
console.log(truncateSentence(s = "What is the solution to this problem", k = 4));
console.log(truncateSentence(s = "chopper is not a tanuki", k = 5));


//var truncateSentence = (s, k) => s.split(' ').slice(0, k).join(' ');