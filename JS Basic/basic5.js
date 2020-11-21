//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

function leap(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log('leap year');
  } else {
    console.log('not leap');
  }
}
leap(2000);
leap(2016);
leap(1700);
leap(2019);
leap(1800);
leap(100);
leap(2024);
