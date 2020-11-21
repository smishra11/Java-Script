//Write a JavaScript exercise to get the extension of a filename

function getExtension(file) {
  let splitFile = file.split('.');
  let resultExt = splitFile[splitFile.length - 1];
  console.log(resultExt);
}
getExtension('screenshot.file.png');
