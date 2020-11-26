//Write a JavaScript program to count the number of vowels in a given string

function count(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == 'a' ||
      str[i] == 'e' ||
      str[i] == 'i' ||
      str[i] == 'o' ||
      str[i] == 'u'
    ) {
      cnt++;
    }
  }
  console.log('Total vowels are ' + cnt);
}

count('education');
