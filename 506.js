//506. Relative Ranks
/*Example 1:
Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

Example 2:
Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].*/

var findRelativeRanks = function (score) {

  const sortedScore = [...score].sort((a, b) => b - a);

  const result = [];

  for (let i = 0; i < score.length; i++) {
      const rank = sortedScore.indexOf(score[i]);

      if(rank ===0){
        result.push('Gold Medal');
      }
      else if(rank ===1){
        result.push('Silver Medal');
      }
      else if(rank ===2){
        result.push('Bronze Medal');
      }
      else {
        result.push(String(rank+1))
      }
  }

  return result;
};

console.log(findRelativeRanks(score = [5, 4, 3, 2, 1]));
console.log(findRelativeRanks(score = [10, 3, 8, 9, 4]));