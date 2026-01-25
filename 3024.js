//3024. Type of Triangle
/*A triangle is called "equilateral" if it has all sides of equal length.
A triangle is called "isosceles" if it has exactly two sides of equal length.
A triangle is called "scalene" if all its sides are of different lengths.
Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

Example 1:

Input: nums = [3,3,3]                     Output: "equilateral"

Example 2:
Input: nums = [3,4,5]                      Output: "scalene""*/

var triangleType = (nums) => {

  const [a, b, c] = nums;

  if (a === b && b === c && c === a) return "equilateral";

  if (a === b || b === c || c === a) return "isosceles";

  if (a + b <= c || b + c <= a || c + a <= b) return "none"

  return "scalene"

};

console.log(triangleType(nums = [3, 3, 3])); Output: "equilateral"
console.log(triangleType(nums = [3, 4, 5])); Output: "scalene"