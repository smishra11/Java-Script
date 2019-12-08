//Write a JavaScript function that reverse a number. Go to the editor
//Example x = 54321;
//Expected Output : 12345

//Build- in method
document.querySelector('h1').innerHTML = 'Reverse Number';

function reverseNumber(number) {

    number = number + "";   //converted to string

	return number.split("").reverse().join("");
}
console.log(reverseNumber(54321));

//User Defined
