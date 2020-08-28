//Write a JavaScript program to get the length of a JavaScript object.

var student = {
  name: "David",
  class: "VI",
  rollno: 12,
};

//User defined
Object.size = (student) => {
  var objsize = 0,
    key;
  for (key in student) {
    if (student.hasOwnProperty(key)) objsize++;
  }
  console.log(objsize);
  return objsize;
};

// Get the size of an object
var objsize = Object.size(student);

//Pre-defined
function objectLength(student) {
  objLenght = Object.keys(student).length;

  console.log(objLenght);
}

objectLength(student);
