//Write a javascript function to find non-repeated characters from a string

//User Defined 
let str = 'thequickbrownfoxjumpsoverthelazydog';

function check(str) {
    let nonRepeated = "";
    for(i = 0; i <str.length; i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            nonRepeated += str[i];
        }
    }
    return nonRepeated;
}

console.log(check(str));