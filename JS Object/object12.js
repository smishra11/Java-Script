//Write a JavaScript function to retrieve all the values of an object's properties.

var obj = { red: '#FF0000', green: '#00FF00', white: '#FFFFFF' };

console.log(Object.values(obj));

let value = [];
for (let key in obj) {
  value.push(obj[key]);
}
console.log(value);
