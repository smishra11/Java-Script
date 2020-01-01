//Write a JavaScript function that returns array elements larger than a number

let arr = [5,7,14,26,46,9,71];
let num = 10;

function check(arr) {
  let arr1 = [];
  for(i = 0; i <arr.length; i++) {
    if(arr[i] >= 10) {
      arr1 += arr[i];
    }
  }
  return arr1;
}

console.log(check(arr));