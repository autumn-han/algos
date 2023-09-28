// TEST VARIABLES
const testArr = [1, 4, 6, 3, 5, 5, 10];
const testArrTwo = [3, 4, 2, 8];
const shiftByTest = 2;
const shiftByTestNeg = -3;

// REVERSE
function reverse(arr) {
  var arrLength = 0;
  if (arr.length % 2 == 0) {
    arrLength = arr.length / 2;
  } else {
    arrLength = (arr.length - 1) / 2;
  }
  for (var i = 0; i < arrLength; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
}
// reverse(testArr);
// reverse(testArrTwo);

// ROTATE
function rotate(arr, shiftBy) {
  if (shiftBy > 0) {
    for (var j = 0; j < shiftBy; j++) {
      for (var i = arr.length - 1; i >= 1; i--) {
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
  } else if (shiftBy < 0) {
    for (var j = 0; j > shiftBy; j--) {
      for (var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  console.log(arr);
}
// rotate(testArr, shiftByTest);
// rotate(testArrTwo, shiftByTestNeg);

// FILTER RANGE
function filterRange(arr, min, max) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (!(min < arr[i] && arr[i] < max)) {
      count++;
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      console.log(count);
    }
  }
  arr.length = count + 1;
  return arr;
}
console.log(filterRange(testArr, 3, 8));
