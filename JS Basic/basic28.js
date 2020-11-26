//Write a JavaScript program to extract the first half of a string of even length

function extractHalf(str) {
  if (str.length % 2 === 0) {
    let slicedStr = str.slice(0, str.length / 2);
    console.log(slicedStr);
  } else {
    console.log('Passed input- ' + '__' + str + '__' + ' length is not even');
  }
}
extractHalf('javascript');
