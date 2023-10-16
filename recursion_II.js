// rBinary search
function rBinary(arr, value) {
  var mid = Math.floor(arr.length / 2);
  if (arr[mid] === value) {
    return true;
  } else if (arr[mid] < value) {
    arr = arr.slice(mid, arr.length - 1);
    return rBinary(arr, value);
  } else if (arr[mid] > value) {
    arr = arr.slice(0, mid);
    return rBinary(arr, value);
  } else {
    return false;
  }
}

// console.log(rBinary([1, 3, 5, 6], 4));
// console.log(rBinary([4, 5, 6, 8, 12], 5));

// rGCF
function rGCF(a, b) {
  if (a === b) {
    return a;
  } else if (b > a) {
    if (a === 0) {
      return b;
    } else {
      return rGCF(a, b % a);
    }
  } else if (a > b) {
    if (b === 0) {
      return a;
    } else {
      return rGCF(b, a % b);
    }
  }
}

// console.log(rGCF(12, 6));
// console.log(rGCF(6, 12));
// console.log(rGCF(123456, 987654));
// console.log(rGCF(2364, 9000027));
