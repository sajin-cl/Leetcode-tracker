//657. Robot Return to Origin
/*
Example 1:
Input: moves = "UD"              Output: true 

Example 2:
Input: moves = "LL"              Output: false*/

var judgeCircle = function (moves) {

  let x = 0;
  let y = 0;

  for (let move of moves) {
    if (move === 'U') {
      y++;
    }
    else if (move === 'D') {
      y--;
    }
    else if (move === 'R') {
      x++;
    }
    else if (move === 'L') {
      x--;
    }
  }

  return x == 0 && y == 0;

};

console.info(judgeCircle(moves = "UD"));Output: true
console.info(judgeCircle(moves = "LL"));Output: false