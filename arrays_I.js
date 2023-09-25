// TEST VARIABLES
var testArr = [1, 2, 3, 4, 5];
var testNum = 6;
var testArrTwo = [3, 6, 3, 2];
var testArrThree = [1, 1, 3, 4, 5, 5, 10];
var testNumTwo = 3;
var testIndex = 2;
var testIndexTwo = 3;

// PUSH FRONT
function pushFront(arr, num) {
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = num;
  console.log(arr);
}
// pushFront(testArr, testNum);
// pushFront(testArrTwo, testNumTwo);

// POP FRONT
function popFront(arr) {
  var temp = arr[0];
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  console.log(arr);
  return temp;
}
// console.log(popFront(testArr));

//INSERT AT
function insertAt(arr, index, val) {
  for (var i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = val;
  console.log(arr);
}
// insertAt(testArr, testIndex, testNum);
// insertAt(testArrTwo, testIndexTwo, testNumTwo);

//REMOVE AT
function removeAt(arr, index) {
  var temp = arr[index];
  for (var i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  console.log(arr);
  return temp;
}
// console.log(removeAt(testArr, testIndex));
// console.log(removeAt(testArrTwo, testIndexTwo));

// SWAP PAIRS
function swapPairs(arr) {
  if (arr.length % 2 == 0) {
    for (var i = 0; i < arr.length; i += 2) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  } else {
    for (var i = 0; i < arr.length - 1; i += 2) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  console.log(arr);
}
// swapPairs(testArr);
// swapPairs(testArrTwo);

// REMOVE DUPLICATES - work in progress
function removeDupes(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      arr[i] = arr[i + 1];
    }
  }
  console.log(arr);
}
removeDupes(testArrThree);
