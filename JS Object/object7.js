//Write a JavaScript program which returns a subset of a string
//Sample Data: dog
//Expected Output: ["d", "do", "dog", "o", "og", "g"]

let data = 'dog';

function subsetString(data) {
  let output = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j <= data.length; j++) {
      output.push(data.slice(i, j));
    }
  }
  return output;
}

console.log(subsetString(data));
