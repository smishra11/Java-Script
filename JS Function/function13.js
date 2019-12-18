//Write a JavaScript function to compute the factors of a positive integer.

let num = 15;

function findFactors(num) {
    let factors = [];
    let quotient = 0;

    for(i = 1; i<= num; i++) {
        quotient = num/i;
        if(quotient === Math.floor(quotient)) {
            factors.push(i);
        }
    }
    return factors;
};

console.log(findFactors(num));