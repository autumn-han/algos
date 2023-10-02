// TEST VARIABLES
var testStr = "la l al ala l a";
var testStrTwo = "I can not BELIEVE it's not BUTTER";
var testStrThree = "abc8c0d1ngd0j0!8";
var testStrFour = "0s1a3y5w7h9a2t4?6!8?0";
var testStrFive = "Live from New York, it's Saturday Night!";
var testArr = ["Good morning", "sunshine", "the", "Earth", "says", "hello"];
var testArrTwo = ["There", "is", "a", "bug", "in", "the", "system"];

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

// ACRONYMS
function acronym(str) {
  var words = str.split(" ");
  var newStr = "";
  for (var i = 0; i < words.length; i++) {
    var chars = words[i].split("");
    newStr += chars[0];
  }
  console.log(newStr.toUpperCase());
}
// acronym(testStrFive);
// acronym(testStrTwo);

// COUNT NON-SPACES
function countNonSpaces(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }
  return count;
}
// console.log(countNonSpaces(testStr));
// console.log(countNonSpaces(testStrTwo));

// REMOVE SHORTER STRINGS
function removeShortStrs(arr, min) {
  var newArr = [];
  var idx = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= min) {
      newArr[idx] = arr[i];
      idx++;
    }
  }
  return newArr;
}
// console.log(removeShortStrs(testArr, 7));
// console.log(removeShortStrs(testArrTwo, 3));
