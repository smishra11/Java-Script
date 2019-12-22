//Write a JavaScript function to compute the value of b^n where n is the exponent and b is the bases. 
//Accept b and n from the user and display the result.


//User Defined
function compute(b, n) {
    let result = 1;
    for(i = 1; i <= n; i++) {
        result = b * result;
    }
    return result;
}
console.log(compute(3, 3));