let num = 123;
let reverseNum;

reverseNum = num.toString().split('').reverse().join('');
const convertedReverseNum = Number(reverseNum);
console.log(num === convertedReverseNum ? 'True' : 'False') ;