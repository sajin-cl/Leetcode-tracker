//Leetcode problem -- 125. Valid Palindrome::
/*Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: s = "race a car"
Output: falseṭṭ
Explanation: "raceacar" is not a palindrome.
Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome. */

var isPalindrome = function (s) {

  let inputVal = [];
 
  const symbols = ['.', ':', ',', '`', ';', '[', ']', '{', '}', '/', '!', '?', '"', "'", '-', '_', '(', ')', '@'];

  for (let ch of s) {
    if (!symbols.includes(ch) && ch !== ' ') {
      inputVal.push(ch.toLowerCase());
    }
  };

  const data = inputVal.join('');
  const reversedData = [...inputVal].reverse().join('');

  return data === reversedData;


};
console.log(isPalindrome(s = "A man, a plan, a canal: Panama")); //true
console.log(isPalindrome(s = "race a car")); //false
console.log(isPalindrome(s = " ")); //true

/*
var isPalindrome = function(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === [...cleaned].reverse().join('');
};
*/