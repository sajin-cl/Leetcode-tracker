//Leetcode problem --3541. Find Most Frequent Vowel and Consonant::

/*Example 1:
Input: s = "successes"
Output: 6

Explanation:
The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.

Example 2:
Input: s = "aeiaeia"      Output: 3
*/

var maxFreqSum = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowFreq = {};
  const consFreq = {};

  for (let ch of s) {
    if (vowels.includes(ch)) {
      vowFreq[ch] = (vowFreq[ch] || 0) + 1;
    }
    else {
      consFreq[ch] = (consFreq[ch] || 0) + 1;
    }
  };

  let maxVowel = 0, maxCons = 0;

  for (let v in vowFreq) {
    maxVowel = Math.max(maxVowel, vowFreq[v]);
  };

  for (let c in consFreq) {
    maxCons = Math.max(maxCons, consFreq[c]);
  };

  return maxVowel + maxCons;

};

console.log(maxFreqSum(s = "successes"));
console.log(maxFreqSum(s = "aeiaeia"));