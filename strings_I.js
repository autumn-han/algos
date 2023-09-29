// TEST VARIABLES
var testStr = "la l al ala l a";
var testStrTwo = "I can not BELIEVE it's not BUTTER";

// REMOVE BLANKS
function removeBlanks(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str[i];
    }
  }
  return newStr;
}
// console.log(removeBlanks(testStr));
// console.log(removeBlanks(testStrTwo));
