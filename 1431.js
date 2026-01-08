//Leetcode problem--1431. Kids With the Greatest Number of Candies::
/*
Example 1:
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]

Explanation: The current max value is 5 which is held by Kid 3
Kid 1, they will have 2 + 3 = 5 candies, which is greater or equal to the current max of 5.
Kid 2, they will have 3 + 3 = 6 candies, which is greater or equal to the current max of 5.
Kid 3, they will have 5 + 3 = 8 candies, which is greater or equal to the current max of 5.
Kid 4, they will have 1 + 3 = 4 candies, which is less than the current max of 5.
Kid 5, they will have 3 + 3 = 6 candies, which is greater or equal to the current max of 5.

Example 2:
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 

Example 3:
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
 */
var kidsWithCandies = function (candies, extraCandies) {

  const maxCandies = Math.max(...candies);
  const isGreatest = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      isGreatest.push(true)
    }
    else {
      isGreatest.push(false)
    }
  }
  return isGreatest;
};
console.log(kidsWithCandies(candies = [2, 3, 5, 1, 3], extraCandies = 3));
console.log(kidsWithCandies(candies = [4, 2, 1, 1, 2], extraCandies = 1));
console.log(kidsWithCandies(candies = [12, 1, 12], extraCandies = 10));