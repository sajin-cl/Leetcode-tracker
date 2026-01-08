//leetcode 3516. Find Closest Person::
/* Example 1:
Input: x = 2, y = 7, z = 4                              Output: 1
Explanation:
Person 1 is at position 2 and can reach Person 3 (at position 4) in 2 steps.
Person 2 is at position 7 and can reach Person 3 in 3 steps.
Since Person 1 reaches Person 3 first, the output is 1.

Example 2:
Input: x = 2, y = 5, z = 6                                  Output: 2
Explanation:
Person 1 is at position 2 and can reach Person 3 (at position 6) in 4 steps.
Person 2 is at position 5 and can reach Person 3 in 1 step.
Since Person 2 reaches Person 3 first, the output is 2.

Example 3:
Input: x = 1, y = 5, z = 3                                  Output: 0 */
var findClosest = function (x, y, z) {
  let firstPersonSteps = 0;
  let secondPersonSteps = 0;
  let closestPerson = 0;

  firstPersonSteps = Math.abs(x - z);
  secondPersonSteps = Math.abs(y - z);

  if (firstPersonSteps < secondPersonSteps) {
    closestPerson = 1
  }
  else if (firstPersonSteps > secondPersonSteps) {
    closestPerson = 2;
  }
  else if (firstPersonSteps === secondPersonSteps) {
    closestPerson = 0
  }
  return closestPerson;
};
console.log(findClosest(x = 2, y = 7, z = 4));
console.log(findClosest(x = 2, y = 5, z = 6));
console.log(findClosest(x = 1, y = 5, z = 3));