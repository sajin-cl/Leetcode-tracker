//1491. Average Salary Excluding the Minimum and Maximum Salary
/*Example 1:
Input: salary = [4000,3000,1000,2000]             Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

Example 2:
Input: salary = [1000,2000,3000]                    Output: 2000.00000*/

var average = function (salary) {
  const maxSalery = Math.max(...salary);
  const minSalery = Math.min(...salary);
  let saleryCount = 0;

  for (let i = 0; i < salary.length; i++) {
    if (salary[i] !== maxSalery && salary[i] !== minSalery) {
      saleryCount += salary[i];
    }
 
  }

   const avgSalery = saleryCount /( salary.length-2); 

  return avgSalery.toFixed(5);
};

console.log(average(salary = [4000, 3000, 1000, 2000])); Output: 2500.00000
console.log(average(salary = [1000, 2000, 3000])); Output: 2000.00000