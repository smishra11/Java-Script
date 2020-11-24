//Write a JavaScript program to create new string with first 3 characters are in lower case from a given string.
// If the string length is less than 3 convert all the characters in upper case

function changeCase(str) {
  if (str.length < 3) {
    let upperStr = str.toUpperCase();
    console.log(upperStr);
  } else {
    let subStr = str.substring(0, 3).toLowerCase();
    let restPart = str.substring(3, str.length);
    console.log(subStr + restPart);
  }
}
changeCase('PYT');
