//Write a JavaScript function to convert an object into a list of '[key, value]' pairs

let obj = { red: '#FF0000', green: '#00FF00', white: '#FFFFFF' };

console.log(Object.entries(obj));

let res = Object.keys(obj).map((key) => [key, obj[key]]);
console.log(res);
