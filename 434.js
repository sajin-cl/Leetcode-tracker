//434. Number of Segments in a String
/*Example 1:
Input: s = "Hello, my name is John"           Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

Example 2:
Input: s = "Hello"                            Output: 1 */

var countSegments = function (s) {

  if (s.trim() === '') return 0;

  const words = s.split(' ');
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
      count++;
    }
  };
  return count;
};

console.log(countSegments(s = "Hello, my name is John")); Output: 5
console.log(countSegments(s = "Hello")); Output: 1
console.log(countSegments(s = "")); Output: 0