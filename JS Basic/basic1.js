//Write a JavaScript program to display the current day and time in the following format

let date = new Date();

let day = date.getDay();
let daylist = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday ',
  'Thursday',
  'Friday',
  'Saturday',
];
console.log('Today is : ' + daylist[day]);
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let prepand = hour >= 12 ? ' PM ' : ' AM ';
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = ' Noon';
  } else {
    hour = 12;
    prepand = ' PM';
  }
}
if (hour === 0 && prepand === ' AM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = ' Midnight';
  } else {
    hour = 12;
    prepand = ' AM';
  }
}

console.log(
  'Current Time : ' + hour + prepand + ' : ' + minute + ' : ' + second
);
