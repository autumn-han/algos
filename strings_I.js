// TEST VARIABLES
var testStr = "la l al ala l a";

// REMOVE BLANKS
function removeBlanks(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      for (var j = i; j < str.length; j++) {
        str[j + 1] = str[j];
      }
      str.length--;
      i--;
    }
  }
  return str;
}
console.log(removeBlanks(testStr));
