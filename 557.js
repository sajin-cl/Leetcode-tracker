//leetcode 557 -Reverse Words in a String III::
/* 
Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "Mr Ding"
Output: "rM gniD" */

var reverseWords = function (s) {
    const Words = s.split(' ');
    const reverseWordsArray = []

    for (let w of Words) {

        var reverseWord = w.split("").reverse().join("");
        reverseWordsArray.push(reverseWord);
    }

    return reverseWordsArray.join(' ');
};
console.log(reverseWords(s = "Mr Ding")); //rM gniD
console.log(reverseWords(s = "Let's take LeetCode contest")); //s'teL ekat edoCteeL tsetnoc