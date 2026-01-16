//2788. Split Strings by Separator
/*Example 1:
Input: words = ["one.two.three","four.five","six"], separator = "."          Output: ["one","two","three","four","five","six"]

Example 2:
Input: words = ["$easy$","$problem$"], separator = "$"                       Output: ["easy","problem"]

Example 3:
Input: words = ["|||"], separator = "|"                                      Output: []*/

var splitWordsBySeparator = function (words, separator) {

  let separatedWords = [];

  for (let word of words) {
    let items = word.split(separator);

    for (let item of items) {
      if (item.length > 0) {
        separatedWords.push(item)
      }
    }
  };
  return separatedWords;

};


console.log(splitWordsBySeparator(words = ["one.two.three", "four.five", "six"], separator = ".")); Output: ["one", "two", "three", "four", "five", "six"]
console.log(splitWordsBySeparator(words = ["$easy$", "$problem$"], separator = "$")); Output: ["easy", "problem"]
console.log(splitWordsBySeparator(words = ["|||"], separator = "|")); Output: []