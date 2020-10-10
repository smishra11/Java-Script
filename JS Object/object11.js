//Write a JavaScript function to parse an URL

var url = 'https://www.w3resource.com/javascript-object-exercise-12.php';

function parsed(url) {
  let parser = new URL(url);
  console.log(parser.host);
  console.log(parser.protocol);
  console.log(parser.pathname);
}
parsed(url);
