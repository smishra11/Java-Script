//Write a JavaScript program to sort an array of JavaScript objects
// Sample Object :
var library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
];

function sorted(library) {
  for (let i = 0; i < library.length; i++) {
    for (let j = 0; j < library.length - 1 && j + 1 < library.length; j++) {
      if (library[j].libraryID < library[j + 1].libraryID) {
        let temp = library[j];
        library[j] = library[j + 1];
        library[j + 1] = temp;
      }
    }
  }
  return library;
}

console.log(sorted(library));
