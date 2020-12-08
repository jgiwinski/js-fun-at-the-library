function createLibrary(libraryName) {
  return newLibrary = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }
}

function addBook(library, newBook) {
  if (newBook.genre === "fantasy") {
    library.shelves.fantasy.push(newBook);
  }
  if (newBook.genre === "fiction") {
    library.shelves.fiction.push(newBook);
  }
  if (newBook.genre === "nonFiction") {
    library.shelves.nonFiction.push(newBook);
  }
}

function checkoutBook(library, bookTitle, genre) {
  var onShelf;
  for (var i = 0; i < library.shelves[genre].length; i ++){
    if (library.shelves[genre][i].title === bookTitle){
      library.shelves[genre].splice(i, 1);
      onShelf = true;
    }
  }
  if (onShelf === true){
    message = `You have now checked out ${bookTitle} from the ${library.name}`;
  } else {
    message = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  }

  return(message);
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
