//2427. Number of Common Factors
/*Example 1:
Input: a = 12, b = 6                 Output: 4
Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

Example 2:
Input: a = 25, b = 30                Output: 2
*/

var commonFactors = function (a, b) {

  const minNum = Math.min(a, b);
  let commonFactorCount = 0;

  for (i = 1; i <= minNum; i++) {
    if (a % i == 0 && b % i == 0) {
      commonFactorCount++;
    }
  }
  return commonFactorCount;
};

console.log(commonFactors(a = 12, b = 6)); Output: 4
console.log(commonFactors(a = 25, b = 30)); Output: 2