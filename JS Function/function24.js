//Write a JavaScript function that generates a string id (specified length) of random characters

function generateId(num) {
  let text = "";
  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(i = 0; i < num; i++) {
    text += char.charAt(Math.floor(Math.random() * char.length));
  }
  return text;
}
console.log(generateId(6));