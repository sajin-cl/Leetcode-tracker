//412. Fizz Buzz
/*Example 1:
Input: n = 3                               Output: ["1","2","Fizz"]

Example 2:
Input: n = 5                               Output: ["1","2","Fizz","4","Buzz"]

Example 3:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] */

var fizzBuzz = function (n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz')
    }
    else if (i % 3 === 0) {
      arr.push('Fizz')
    }
    else if (i % 5 === 0) {
      arr.push('Buzz')
    }
    else {
      arr.push(i.toString());
    }
  };

  return arr;
};

console.info(fizzBuzz(3));
console.info(fizzBuzz(5));
console.info(fizzBuzz(15));