//-->leetcode 242 : Given two strings s and t, return true if t is an anagram of s, and false otherwise.
/* 
Example 1:
Input: s = "anagram", t = "nagaram"    Output: true

Example 2:
Input: s = "rat", t = "car"            Output: false
*/

//will upload on leetcode 19-09-2025

var isAnagram = function (s, t) {
  var s = s.split('').sort().join('');
  var t = t.split('').sort().join('');

  if (s === t) {
    return true
  }
  else {
    return false
  }
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('car', 'rat'));