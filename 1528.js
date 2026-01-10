//1528. Shuffle String
/*Example 1:
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]                Output: "leetcode"

Example 2:
Input: s = "abc", indices = [0,1,2]                               Output: "abc" */

var restoreString = function (s, indices) {

  let rearrangedArr = [];

  for (let i = 0; i < indices.length; i++) {

    rearrangedArr[indices[i]] = s[i]
    
  }
  return rearrangedArr.join('');
};

console.info(restoreString(s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3])); Output: "leetcode"
console.info(restoreString(s = "abc", indices = [0, 1, 2])); Output: "abc"