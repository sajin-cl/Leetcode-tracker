/* var finalValueAfterOperations = function(operations) {
    
}; */
//16-09-2025

const operations = ["++x", "++x", "x++"];
let x = 0;

for (let i = 0; i < operations.length; i++) {
  if (operations[i] === '--x') {
    x = x - 1;
  }
  else if (operations[i] === 'x--') {
    x = x - 1;
  }
  else if (operations[i] === 'x++') {
    x = x + 1;
  }
  else if (operations[i] === '++x') {
    x = x + 1;
  }
}
console.log(x);