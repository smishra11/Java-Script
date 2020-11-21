//Write a JavaScript program to convert temperatures to and from celsius, fahrenheit

function cToF(celsius) {
  let cToFahr = (celsius * 9) / 5 + 32;
  console.log(celsius + 'C is ' + cToFahr + ' F');
}

cToF(60);

function fToC(fahrenheit) {
  let fToCel = ((fahrenheit - 32) * 5) / 9;
  console.log(fahrenheit + 'F is ' + fToCel + ' C');
}

fToC(45);
