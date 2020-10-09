// Write a JavaScript program to create a Clock
// Note: The output will come every second.

function findSec() {
  let d = new Date();
  let str =
    d.getUTCDate() +
    ' / ' +
    d.getMonth() +
    ' /' +
    d.getFullYear() +
    '/' +
    d.getHours() +
    'hr ' +
    d.getMinutes() +
    'min ' +
    d.getSeconds() +
    'sec ';
  console.log(str);
}
setInterval(findSec, 1000);
