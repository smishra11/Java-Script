//Write a JavaScript program to convert a given number to hours and minutes

function convert(num) {
  let hour = Math.floor(num / 60);
  let min = num % 60;
  console.log(hour + ' hour ' + min + ' min ');
}

convert(55);
