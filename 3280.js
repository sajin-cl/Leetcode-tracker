//Leetcode problem --3280. Convert Date to Binary::
/*Example 1:
Input: date = "2080-02-29"
Output: "100000100000-10-11101"

Example 2:
Input: date = "1900-01-01"
Output: "11101101100-1-1" */

var convertDateToBinary = function (date) {

  const [year, month, day] = date.split('-').map(Number);

  const binYear = year.toString(2);
  const binMonth = month.toString(2);
  const binDay = day.toString(2);

  return `${binYear}-${binMonth}-${binDay}`
};

console.log(convertDateToBinary(date = "2080-02-29"));
console.log(convertDateToBinary(date = "1900-01-01"));