//leetcode problem :1108 Defanging an IP Address::
/*
Example 1:
Input: address = "1.1.1.1"          Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"     Output: "255[.]100[.]50[.]0"
*/
//--->UPLOAD FOR 22-09-2025-->

var defangIPaddr = function (address) {
  let defangIPaddress = "";
  for (let char of address) {
    if (char === '.') {
      defangIPaddress += '[.]'
    }
    else {
      defangIPaddress += char;
    }
  }
  return defangIPaddress;
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));