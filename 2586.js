//2586. Count the Number of Vowel Strings in Range
/*Example 1:
Input: words = ["are","amy","u"], left = 0, right = 2
Output: 2

Example 2:
Input: words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4
Output: 3*/

var vowelStrings = function (words, left, right) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  for (let i = left; i <= right; i++) {
    const word = words[i];

    const firstChar = word[0];
    const lastChar = word[word.length-1];

    if(vowels.includes(firstChar) && vowels.includes(lastChar)){
      vowelCount++;
    }
  };
  return vowelCount;
};

console.log(vowelStrings(words = ["are", "amy", "u"], left = 0, right = 2)); Output: 2
console.log(vowelStrings(words = ["hey", "aeo", "mu", "ooo", "artro"], left = 1, right = 4)); Output: 3