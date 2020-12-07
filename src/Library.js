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

function checkoutBook(library, book) {
  var updatedShelf = library.pop(book)
  var checkoutMessage = `You have now checkout out ${book.title} from the ${library.name}`
}

//oh well, not enough time tonight to figure it out ^^ 

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
