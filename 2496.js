//2496. Maximum Value of a String in an Array
/*Example 1:
Input: strs = ["alic3","bob","3","4","00000"]                 Output: 5

Example 2:
Input: strs = ["1","01","001","0001"]                        Output: 1*/

var maximumValue = function (strs) {

  let maxVal = 0;
  for (let str of strs) {

    if (/^\d+$/.test(str)) {
      maxVal = Math.max(maxVal,Number(str))
    }
    else {
      maxVal = Math.max(maxVal,str.length)
    }
  }
  return maxVal;

};

console.log(maximumValue(strs = ["alic3", "bob", "3", "4", "00000"]));
console.log(maximumValue(strs = ["1", "01", "001", "0001"]));



