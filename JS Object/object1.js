//Write a JavaScript program to list the properties of a JavaScript object

let myObj = {
  Id: 2,
  Name: "Tapu",
  Age: 30,
  Address: 'HYD'
}

//Predefined 
//    (method-1)
console.log(Object.getOwnPropertyNames(myObj));
//    (method-2)
console.log(Object.keys(myObj));

//User-defined
for (let x in myObj) {
  console.log(x);
}