//Write a JavaScript function that reverse a number. Go to the editor
//Example x = 54321;
//Expected Output : 12345

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