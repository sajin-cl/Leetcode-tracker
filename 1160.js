//leetcode problem :1160 Find Words That Can Be Formed by Characters::
/* 
Example 1:
Input: words = ["cat","bt","hat","tree"], chars = "atach"                            Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"                Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
*/

var countCharacters = function (words, chars) {

  let count = 0;

  const charFreq = {};
  for (let c of chars) {
    charFreq[c] = (charFreq[c] || 0) + 1;
  }

  words.forEach((word) => {
    
    const wordFreq = {};
    for (let c of word) {
      wordFreq[c] = (wordFreq[c] || 0) + 1;
    }

    let canForm = true;

    for (let c of word) {
      if (!charFreq[c] || wordFreq[c] > charFreq[c]) {
        canForm = false;
        break;
      };
    };
    if (canForm) {
      count += word.length;
    }
    console.log(wordFreq)
  });
  return count;
};

console.log(countCharacters(words = ["cat", "bt", "hat", "tree"], chars = "atach"));
console.log(countCharacters(words = ["hello", "world", "leetcode"], chars = "welldonehoneyr"));