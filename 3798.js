
/*
Example 1:

Input: s = "1112"

Output: "1112"

Explanation:

The string already represents the largest possible even number, so no deletions are needed.

Example 2:

Input: s = "221"

Output: "22" */

var largestEven =  (s)=> {

  for (let i = s.length - 1; i >= 0; i--) {
    if (parseInt(s[i]) % 2 === 0) {
      return s.slice(0, i + 1)
    }
  };

  return ''
};

console.log(largestEven(s = "1112"));
console.log(largestEven(s = "221"));
console.log(largestEven(s = "211"));
console.log(largestEven(s = "111112212211122221")); 