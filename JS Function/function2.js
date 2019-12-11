//Write a JavaScript function that checks whether a passed string is palindrome or not

//Pre-defined Method

const str = 'MaDamn';

function palindrome(str) {
    var reg = /\W_/g;

    var smallStr = str.toLowerCase().replace(reg, "");

    let reversed = smallStr.split('').reverse().join('');
    if(smallStr === reversed) {
        console.log(reversed);
        return 'It is a Palindrome.';
    } else {
        console.log(reversed);
        return 'It is not Palindrome and check your input.';
    }
}

console.log(palindrome(str));

//User Defined

const string = 'I did, did I ?' ;

const isPalindrome = function(inStr) {
    //inStr = inStr.replace(/\W/g, '');
    inStr =string.toLowerCase().replace(/\W/g, '');
    console.log(inStr);
    for (let i=0; i<inStr.length; i+=1) {
        if(inStr[i] !== inStr[inStr.length - 1 - i]) {
            return false;
        }
    }
     return true;
}

console.log(isPalindrome(string));