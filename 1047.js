//1047. Remove All Adjacent Duplicates In String
/*Example 1:
Input: s = "abbaca"                    Output: "ca"

Example 2:
Input: s = "azxxzy"                    Output: "ay"*/

var removeDuplicates = function (s) {
  const val = s.split('')
  let uniqueVal = [];
  for (let i = 0; i < val.length; i++) {
    if (uniqueVal[uniqueVal.length - 1] === val[i]) {
      uniqueVal.pop()
    }
    else {
      uniqueVal.push(val[i])
    }
  };
  return uniqueVal.join('');
};

console.log(removeDuplicates(s = "abbaca")); Output: "ca"
console.log(removeDuplicates(s = "azxxzy")); Output: "ay"