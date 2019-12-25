//Write a JavaScript function to  get the number of occurrences of a given letter in specified string.

//User defined
let str = 'aaabbbbdefggg';
let letter = 'b';

function check(str, letter) {
    count = 0;
    for(i = 0; i < str.length; i++) {
        if(str.charAt(i) === letter) {
            count += 1;
        }
    }
    return count;
}
console.log(check(str, letter));