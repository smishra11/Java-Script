//Write a JavaScript program to capitalize the first letter of each word of a given string
function capitalizeString(str) {
  let newStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    newStr += str[i];
  }
  console.log(newStr);
}

capitalizeString('abc');
