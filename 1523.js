//1523. Count Odd Numbers in an Interval Range
/*Example 1:
Input: low = 3, high = 7                    Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:
Input: low = 8, high = 10                  Output: 1 */

var countOdds = function (low, high) {
  let oddCount = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount;
};

console.info(countOdds(low = 3, high = 7)); Output: 3
console.info(countOdds(low = 8, high = 10)); Output: 1