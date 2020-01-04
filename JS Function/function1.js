//Write a JavaScript function that reverse a number. Go to the editor
//Example x = 54321;
//Expected Output : 12345

//METHOD-1

//Pre-define method
document.querySelector('h1').innerHTML = 'Reverse Number';

function reverseNumber(number) {

    number = number.toString();   //converted to string (number = number + "")

	return number.split("").reverse().join("");
}
console.log(reverseNumber(54321));

//User Defined
function reverse_number(num) {
    let n = num.toString();

    const number = [];
    let str = "";

    for(let i = n.length-1,k = 0;i>=0;i--,k++) {
        number[k] = n[i];
        str = str + number[k];
    }
    return str;
}
console.log(reverse_number(4321));

//METHOD-2

let num1 = 56789;

function reverseNum(num1) {
    let sum = 0;
    let rem;
    
    while(num1 > 0) {
        rem = num1 % 10;
        sum = sum * 10 + rem ;
        num1 = Math.floor(num1 / 10);
    }
    return sum;
}
console.log(reverseNum(num1));