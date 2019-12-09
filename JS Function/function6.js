//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

//Pre-defined Method
const string = 'The quick brown fox jumped over the lazy dog';

const longestword = (string) => {
    const strArray = string.split(' ');
    const sortedStrArray = strArray.sort(
        (strA, strB) => {
            return strB.length - strA.length;
        }
    );
    return sortedStrArray[0];
}

console.log(longestword(string));

//User Defined Method

const str = 'Web Development Word'

function longest_word(str) {
    var array1 = str.match(/\W[a-z]{0,}/gi);
    var result = array1[0];

    for(var i = 0; i < array1.length; i++) {
        if(result.length < array1.length) {
            result = array1[i];
        }
    }
    return result;
}

console.log(longest_word(str));