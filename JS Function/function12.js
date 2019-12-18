//Write a JavaScript function which says whether a number is perfect.

let num = 6;

function perfectNumber(num) {
    let divis = 0;

    for(i = 1; i <= num/2; i++) {
        if(num % i ===0) {
            divis += i;
        }
    };
    if(divis === num && divis !== 0) {
        console.log(num + ' is a perfect number.')
    } else {
        console.log(num + ' is not a perfect number.')
    }
};

perfectNumber(num);