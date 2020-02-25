//Write a JavaScript program to get the length of a JavaScript object.

var student = {
  name : "David",
  class : "VI",
  rollno : 12
}

//User defined
Object.size = function(student) {
  var size = 0, key;
  for (key in student) {
      if (student.hasOwnProperty(key)) size++;
  }
  console.log(size);
  return size;
};

// Get the size of an object
var size = Object.size(student);