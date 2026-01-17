//1903. Largest Odd Number in String
/*Example 1:
Input: num = "52"                          Output: "5"

Example 2:
Input: num = "4206"                        Output: ""

Example 3:
Input: num = "35427"                       Output: "35427"*/

var largestOddNumber = (num) => {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 !== 0) {
      
      return num.slice(0, i + 1)
    }
  };
  return '';
};


console.log(largestOddNumber(num = "52")); Output: "5"
console.log(largestOddNumber(num = "4206")); Output: ""
console.log(largestOddNumber(num = "35427")); Output: "35427"