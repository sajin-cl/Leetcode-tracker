//682. Baseball Game
/*Example 1:
Input: ops = ["5","2","C","D","+"]                    Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.

Example 2:
Input: ops = ["5","-2","4","C","D","9","+","+"]       Output: 27

Example 3:
Input: ops = ["1","C"]                                Output: 0*/

var calPoints = (operations) => {

  let arr = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] !== 'C' && operations[i] !== 'D' && operations[i] !== '+') {
      arr.push(Number(operations[i]));
    }
    else if (operations[i] === 'C') {
      arr.pop();
    }
    else if (operations[i] === 'D') {
      arr.push(
        arr[arr.length - 1] * 2
      );
    }
    else if (operations[i] === '+') {
      arr.push(
        arr[arr.length - 2] + arr[arr.length - 1]
      );
    }
  };

  return arr.reduce((total, val) => total + val, 0);

};

console.log(calPoints(ops = ["5", "2", "C", "D", "+"])); Output: 30
console.log(calPoints(ops = ["5", "-2", "4", "C", "D", "9", "+", "+"])); Output: 27
console.log(calPoints(ops = ["1", "C"])); Output: 0