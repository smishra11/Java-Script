//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string

//Pre-defined Method
const str = "THE QUICK BROWN FOX";
function total(str) {
    let vowelCount = str.match(/[aeiou]/gi);
    return vowelCount.length;
}
console.log(total(str));


//User Defined Method

const str1 = "The quick borwn fox";

function totalVowel(str1) {
    let vowelList = 'aeiouAEIOU';
    let vowelCount = 0;

    for (let i = 0; i < str1.length; i++) {
        if (vowelList.indexOf(str1[i]) !== -1) {
            vowelCount = vowelCount + 1;
        }
    }
    return vowelCount;
};
console.log(totalVowel(str1));



