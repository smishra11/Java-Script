//Write a JavaScript function which accepts an argument and returns the type.

//User Defined
const value = 'tapppkkkkkk';

function detectType(value) {
    let dtypes = [Function, RegExp, Number, String, Boolean, Object], i, len;
    
    if (typeof value === "object" || typeof value === "function") {
        for (i = 0, len = dtypes.length; i < len; i++) {
            if (value instanceof dtypes[i]) {
                return dtypes[i];
            }
        }
    }  
    return typeof value;
}

console.log(detectType(value));