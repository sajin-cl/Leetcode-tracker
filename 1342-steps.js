let num = 123;
let steps = 0;

while (num > 0) {
  if (num % 2 === 0) {
    num = num / 2;
  }
  else {
    num = num - 1;
  }
  steps++;
};
console.log(steps)