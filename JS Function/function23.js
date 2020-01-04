/* Check given number is palindrome or not, if true sum all digit else product all digit */

//METHOD-1

let num = 254;

function checkPalindrome(num) {
  var sum = 0;
  var rem;
  let num1 = num.toString();
  let num2 = num1.split('').reverse().join('');
  
    if(num1 === num2) {
      while(num > 0){
        rem = num % 10;
        sum += rem;
        num = Math.floor(num/10);
      }     
    } else {  
      sum = 1;
      while(num > 0){
        rem = num % 10;
        sum *= rem;
        num = Math.floor(num/10);
      }
    }
  return sum;
}
console.log(checkPalindrome(num));

//METHOD-2
let numb = 454
function check_palindrome(numb) {
  let sum = 0;
  let rem;
  numb4 = numb;

  while(numb > 0) {
    rem = numb % 10;
    sum = sum*10 + rem;
    numb = Math.floor(numb/10);
  }
  if(numb4 === sum) {
    return true;
  } else {
   return false;
  }
}
console.log(check_palindrome(numb));