//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

function findSum(a, b) {
  let sum = a + b;
  if (a === b) {
    console.log('Triple their sum ' + 3 * sum);
  } else {
    console.log('Sum ' + sum);
  }
}

findSum(5, 5);
