//Write a JavaScript program where the program takes a random integer between 1 to 10,
// the user is then prompted to input a guess number. If the user input matches with guess number,
// the program will display a message "Good Work" otherwise display a message "Not matched"

function numGuess() {
  let num = Math.random() * 10;
  let randomNum = parseInt(num);
  let inputVal = prompt('Please enter a number');
  if (inputVal === randomNum) {
    console.log('GREAT WORK');
  } else {
    console.log('NOT MATCHED');
  }
}

numGuess();
