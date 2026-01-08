//Leetcode problem --2798. Number of Employees Who Met the Target::
/*Example 1:
Input: hours = [0,1,2,3,4], target = 2
Output: 3

Example 2:
Input: hours = [5,1,4,2,2], target = 6
Output: 0*/

var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let employee = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
      employee++;
    }
  }
  return employee;
};

console.log(numberOfEmployeesWhoMetTarget(hours = [0, 1, 2, 3, 4], target = 2));
console.log(numberOfEmployeesWhoMetTarget(hours = [5, 1, 4, 2, 2], target = 6));