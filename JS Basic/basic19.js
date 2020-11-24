//Write a JavaScript program to check whether the last digit of the three given positive integers is same

//Integers converted to string
function lastDigit(x, y, z) {
  if ((x > 0, y > 0, z > 0)) {
    let x1 = '' + x;
    let y1 = '' + y;
    let z1 = '' + z;
    if (
      x1[x1.length - 1] === y1[y1.length - 1] &&
      x1[x1.length - 1] === z1[z1.length - 1]
    ) {
      console.log('Last digit of passed integer is same');
    } else {
      console.log('Last digit is not same');
    }
  } else {
    console.log('Passed integer is not positive');
  }
}
lastDigit(20, 30, -40);

//Integers without converting to string
function lastDigit1(x, y, z) {
  if ((x > 0, y > 0, z > 0)) {
    let x1 = x % 10;
    let y1 = y % 10;
    let z1 = z % 10;
    if (x1 === y1 && x1 === z1) {
      console.log('Last digit of passed integer is same');
    } else {
      console.log('Last digit is not same');
    }
  } else {
    console.log('Passed intergers are not positive');
  }
}
lastDigit1(20, 30, 80);
