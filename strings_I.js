// TEST VARIABLES
var testStr = "la l al ala l a";
var testStrTwo = "I can not BELIEVE it's not BUTTER";
var testStrThree = "abc8c0d1ngd0j0!8";
var testStrFour = "0s1a3y5w7h9a2t4?6!8?0";

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

// GET DIGITS
function getDigits(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      newStr += str[i];
    }
  }
  console.log(newStr);
}
// getDigits(testStrThree);
// getDigits(testStrFour);
