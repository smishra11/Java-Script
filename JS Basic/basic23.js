//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

function replaceCharacter(str) {
  let replacedChar = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'z') {
      replacedChar += 'a';
    } else if (str[i] == 'Z') {
      replacedChar += 'A';
    } else {
      let char = str[i].charCodeAt() + 1;
      replacedChar += String.fromCharCode(char);
    }
  }
  console.log(replacedChar);
}
replaceCharacter('xyz');

// let str = 'a';
// let num = 98;
// console.log(str.codePointAt());
// console.log(str.charCodeAt());
// console.log(String.fromCharCode(num));
// console.log(String.fromCodePoint(num));
