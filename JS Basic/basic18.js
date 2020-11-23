//Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string,
// if "Script" presents in the string return the string without "Script" otherwise return the original one

function checkScript(str) {
  let subStr = str.substring(4, 10);
  if (subStr === 'Script') {
    console.log(str.substring(0, 4));
  } else {
    console.log(str);
  }
}
checkScript('javaScript');
checkScript('CoffeeScript');
