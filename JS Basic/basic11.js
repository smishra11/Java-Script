//Write a JavaScript program to get the difference between a given number and 13,
// if the number is greater than 13 return double the absolute difference

function absDiff(val) {
  let diff = Math.abs(val - 13);
  console.log('Abs Diff- ' + diff);
  if (diff > 13) {
    console.log(diff ** 2);
    return;
  } else {
    console.log('Absolute difference is lower then 13');
  }
}

absDiff(28);
