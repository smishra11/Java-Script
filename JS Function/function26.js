// Write a JavaScript function that accepts two arguments, a string and a letter and 
//the function will count the number of occurrences of the specified letter within the string.

//User defined

function count_letter(str, letter) {
  let count = 0;
  for(i = 0; i < str.length; i++) {
    if(str[i] === letter) {
      count ++;
    }
  }
  return count;
}
console.log(count_letter( 'w3resource.com', 'e'));