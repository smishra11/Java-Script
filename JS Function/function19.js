//Write a JavaScript function to get the number of occurrences of each letter in specified string

//User defined

let str = 'Thequickbrownfoxjumpedoverthelazydog';

function charCount(str) {
    let obj = {};

    for(i = 0; i < str.length; i++) {
        const char = str[i];
        if(!obj[char]) {
            obj[char] = 0
        }
        obj[char] ++;
    }
    return obj;
}
console.log(charCount(str));