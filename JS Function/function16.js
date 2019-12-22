//Write a JavaScript function to extract unique characters from a string.
//Example string : "thequickbrownfoxjumpsoverthelazydog"

//User Defined
let str = 'thequickbrownfoxjumpsoverthelazydog';

function check(str) {
    let unique = "";
    for(i = 0; i< str.length; i++) {
        if(unique.indexOf(str[i]) == -1) {
            unique += str[i];
        }
    }
    return unique;
}
console.log(check(str));