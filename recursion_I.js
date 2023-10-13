// rSigma()
function rSigma(num) {
  if (num % 1 !== 0) {
    num = Math.floor(num);
  }
  if (num > 0) {
    return num + rSigma(num - 1);
  } else {
    return 0;
  }
}
// console.log(rSigma(5));
// console.log(rSigma(-1));
// console.log(rSigma(2.5));

// rFactorial
function rFactorial(num) {}
