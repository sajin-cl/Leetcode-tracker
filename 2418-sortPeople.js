//leetcode problem :2418  Sort people::
/*
Example 1:
Input: names = ["Mary","John","Emma"], heights = [180,165,170]         Output: ["Mary","Emma","John"]

Explanation: Mary is the tallest, followed by Emma and John.
Example 2:
Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]           Output: ["Bob","Alice","Bob"]
*/

var sortPeople = function (names, heights) {
  const nameLists = [];
  let sortedPeople;

  for (let i = 0; i < names.length; i++) {
    nameLists.push({ name: names[i], height: heights[i] });
  }

  nameLists.sort((a, b) => { return b.height - a.height });

  sortedPeople = nameLists.map(nameList => nameList.name)

  return sortedPeople;
};

console.log(sortPeople(names = ["Mary", "John", "Emma"], heights = [180, 165, 170]));
console.log(sortPeople(names = ["Alice", "Bob", "Bob"], heights = [155, 185, 150]));