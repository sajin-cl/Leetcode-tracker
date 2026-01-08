//leetcode 345 :Reverse vowels string::
/*
Input: s = "IceCreAm"    Output: "AceCreIm"

Input: s = "leetcode"     Output: "leotcede"
*/

var reverseVowels = function (s) {
  const vowels = 'aAeEiIoOuU';
  const words = s.split('');
  const selectedVowels = [];

  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i])) {
      selectedVowels.push(words[i]);
    }
  }
  selectedVowels.reverse();

  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i])) {
      words[i] = selectedVowels.shift();
    }
  }

  return words.join('');
};

console.log(reverseVowels(s = "IceCreAm"));
console.log(reverseVowels(s = "leetcode"));