//Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050

function checkSunday() {
  for (let year = 2014; year <= 2050; year++) {
    const d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
      console.log('1st january of ' + year + ' is sunday');
    }
  }
}

checkSunday();
