//Write a JavaScript program to create a new string of specified copies (positive number) of a given string

function copy(str, num) {
  let copiedStr = str.repeat(num);
  console.log(copiedStr);
}

copy('tapu', 3);
