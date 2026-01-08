//leetcode problem 1672. Richest Customer Wealth::
/*
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
*/
/*Example 1:
Input: accounts = [[1,2,3],[3,2,1]]                Output: 6 

Example 2:
Input: accounts = [[1,5],[7,3],[3,5]]              Output: 10

Example 3:
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]        Output: 17*/

var maximumWealth = function (accounts) {

  const wealth = [];
  
  for (let acc of accounts) {

    const sum = acc.reduce((accum, val) => {
      return accum + val
    }, 0)
    wealth.push(sum);

  };

  const maxWealth = Math.max(...wealth);
  return maxWealth;

};

console.log(maximumWealth(accounts = [[1, 2, 3], [3, 2, 1]])); Output: 6
console.log(maximumWealth(accounts = [[1, 5], [7, 3], [3, 5]])); Output: 10
console.log(maximumWealth(accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]])); Output: 17