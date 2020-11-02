//Write a JavaScript function to check whether an object contains given property

let obj = { red: '#FF0000', green: '#00FF00', white: '#FFFFFF' };

// method-1
function checkProperty(enteredProp) {
  return obj.hasOwnProperty(enteredProp);
}
console.log(checkProperty('white'));

// method-2
function check(obj, enterkey) {
  return obj[enterkey] !== undefined;
}
console.log(check(obj, 'blue'));
