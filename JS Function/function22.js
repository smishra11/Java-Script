/* Given two strings s1 and s2 , find s1 is the substring of s2, if yes remove s1 from s2 and 
print remaining string */

let str1 = 'the';
let str2 = 'another';

function findSubstring(str2, str1) {
  let str3 = str2.includes(str1);
  console.log(str3);
  if(str3 !== false) {
    console.log(str2.replace(str1, ''));
  } else {
    console.log('It\'s not a substring.');
  }
}
findSubstring(str2, str1);
