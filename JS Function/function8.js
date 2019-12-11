//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

//Pre-defined Method




//User Defined

const num =  61;
test(num);
function test(num) {
    for(i = 2; i < num; i++) {
        if(num % i === 0) {
            console.log('This ' + num + ' is not a prime number.')
            return false;
        } else {
            console.log('This ' + num + ' is a prime no.')
            return true;
        }
    }
};
