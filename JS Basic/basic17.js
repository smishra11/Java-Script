//Write a JavaScript program to create a new string from a given string changing the position
// of first and last characters. The string length must be greater than or equal to 1

function changePosition(str) {
  let midStr = str.substring(1, str.length - 1);
  let changedPos = str.charAt(str.length - 1) + midStr + str[0];
  console.log(changedPos);
}
changePosition('javascript');
