function shelfBook(newBook, sciFiShelf) {
  if (sciFiShelf.length < 3){
    return sciFiShelf.unshift(newBook);
  }
}

function unshelfBook(bookTitle, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i ++){
    if (sciFiShelf[i].title.includes(bookTitle)){
      return sciFiShelf.splice(i, 1);
    }
  }
}

function listTitles(fantasyShelf) {
  var titleList = [];
  for (var i = 0; i < fantasyShelf.length; i ++) {
    titleList.push(fantasyShelf[i].title)
  }
  return titleList.join(', ');
}

function searchShelf(sciFiShelf, title) {
  for (var i = 0; i < sciFiShelf.length; i++){
    if (sciFiShelf[i].title === title){
      return true;
    }
  } return false;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
