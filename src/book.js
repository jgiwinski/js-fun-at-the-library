function createTitle(title) {
 return 'The ' + title;
}

function buildMainCharacter(name, age, pronouns) {
  var newCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return newCharacter;
}

function saveReview(newReview, reviews){
  if (!reviews.includes(newReview)) {
    reviews.push(newReview);
  }
}

function calculatePageCount(bookTitle) {
  var pageCount = bookTitle.length * 20;
  return pageCount;
}

function writeBook(title, mainCharacter, pageCount, genre) {
  return {title,
      mainCharacter,
      pageCount: calculatePageCount(title),
      genre: "fantasy"};
}

function editBook(book) {
  return book.pageCount *= 0.75;
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
