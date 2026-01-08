//leetcode problem: 263 Ugly numbers::
// prime numbers:: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
/* Example 1:
Input: n = 6               Output: true
Explanation: 6 = 2 x 3

Example 2:
Input: n = 1               Output: true
Explanation: 1 has no prime factors.

Example 3:
Input: n = 14               Output: false
Explanation: 14 is not ugly since it includes the prime factor 7. */

var isUgly = function (n) {
    if (n <= 0) return false;

    while (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
        if (n % 2 === 0) {
            n /= 2;
        }
        else if (n % 3 === 0) {
            n /= 3;
        }
        else {
            n /= 5;
        }
    };

    return n === 1;
};

console.log(isUgly(n = 6));  //true
console.log(isUgly(n = 1));  //true
console.log(isUgly(n = 14)); //false
