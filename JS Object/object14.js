// Write a JavaScript function to get a copy of the object where the keys
//have become the values and the values the keys

let obj = { red: '#FF0000', green: '#00FF00', white: '#FFFFFF' };

let obj1 = {};
for (let key in obj) {
  obj1[obj[key]] = key;
}
console.log(obj1);
