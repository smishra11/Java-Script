//Write a JavaScript program to create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then return the original string

function checkStr(str) {
  let splitStr = str.split('');
  if (splitStr[0] !== 'P' || splitStr[1] !== 'y') {
    let added = 'Py' + str;
    console.log(added);
  } else {
    console.log('Its already starts with PY--' + str);
  }
}

checkStr('Python');
checkStr('thon');
checkStr('Pyn');
checkStr('on');
