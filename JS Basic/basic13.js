//Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple their absolute difference if the specified number is greater than 19

function check(num) {
  if (num > 19) {
    console.log('Triple of abs diff ' + Math.abs(num - 19) * 3);
  } else {
    console.log('Absolute diff ' + Math.abs(num - 19));
  }
}
check(24);
