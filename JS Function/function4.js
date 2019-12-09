//Write a JavaScript function that returns a passed string with letters in alphabetical order

//Pre-defined Method
const str = 'tapu';

function newString(str) {
    return str.split('').sort().join('');
} 
console.log(newString(str));

//User Defined
const stri = 'subhasish';

function sortString(stri){
    var arr = stri.split('');
    var tmp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr.join('');
  }

  console.log(sortString(stri));