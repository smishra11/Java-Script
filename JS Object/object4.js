// Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of the following books.

var library = [ 
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
  },
  {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
  },
  {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false
  }];

  for(i = 0; i < library.length; i ++) {
    var books = " '" + library[i].title + "' " + "by " + library[i].author + "."
    if(library[i].readingStatus === true) {
      console.log("Already read" + books);
    } else {
      console.log("You still need to read" + books);
    }
  }