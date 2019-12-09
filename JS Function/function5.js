//Write a JavaScript function that accepts a string as a parameter and 
//converts the first letter of each word of the string in upper case.

//Pre-defined method

const str = 'Tapu is good person, and played cricket well.';

const toTitleCase = function(phrase) {
    return phrase.toLowerCase().split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}
  
  console.log(toTitleCase(str));


//User Defined Method

function upperCase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join(' ');
}
console.log(upperCase("the quick brown fox, he is too fast"));
