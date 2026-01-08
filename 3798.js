
/*
Example 1:

Input: s = "1112"

Output: "1112"

Explanation:

The string already represents the largest possible even number, so no deletions are needed.

Example 2:

Input: s = "221"

Output: "22" */

var largestEven = function (s) {

  let number = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (Number(number) % 2 == 0) {
      return number;
    }
    else {
      number.pop()
    }
  }
  return number
};


console.log(largestEven(s = "1112"));
console.log(largestEven(s = "221"));