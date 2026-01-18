//2264. Largest 3-Same-Digit Number in String

/*Example 1:
Input: num = "6777133339"                                      Output: "777"

Example 2:
Input: num = "2300019"                                         Output: "000"

Example 3:
Input: num = "42352338"                                       Output: "" */

var largestGoodInteger = function (num) {
  let maxTriple = '';
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      const tripleVal = num[i] + num[i] + num[i];

      if (tripleVal > maxTriple) {
        maxTriple = tripleVal;
      }
    }
  };

  return maxTriple;

};

console.log(largestGoodInteger(num = "6777133339")); Output: "777"
console.log(largestGoodInteger(num = "2300019")); Output: "000"
console.log(largestGoodInteger(num = "42352338")); Output: ""