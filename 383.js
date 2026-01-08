//Leetcode 383. Ransom Note
/*Example 1:
Input: ransomNote = "a", magazine = "b"           Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"         Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"        Output: true*/

var canConstruct = function (ransomNote, magazine) {
  const magazineFreq = {}
  for (let m of magazine) {
    magazineFreq[m] = (magazineFreq[m] || 0) + 1
  }
  const ransomNoteFreq = {};
  for (let r of ransomNote) {
    ransomNoteFreq[r] = (ransomNoteFreq[r] || 0) + 1
  }

  for (let r of ransomNote) {
    return !magazineFreq[r] || ransomNoteFreq[r] > magazineFreq[r] ? false : true
  }

};
console.log(canConstruct(ransomNote = "a", magazine = "b"));//false
console.log(canConstruct(ransomNote = "aa", magazine = "ab"));//false 
console.log(canConstruct(ransomNote = "aa", magazine = "aab"));//true