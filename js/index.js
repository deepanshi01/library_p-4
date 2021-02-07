
console.log("this is index.js")
// Todos
// 1. store all the data to the localstorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

// step- 1.
//prototype use
//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// step-2.
//Display Constructor
function Display() {

}

// step-3
//Add methods to display prototype
Display.prototype.add = function (book) {
  console.log("Adding to UI");
  tableBody = document.getElementById('tableBody');
  let uiString = `<tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.type}</td>
                  </tr>`;
  tableBody.innerHTML += uiString;
}

//Implement the clear function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById('libraryForm');
  libraryForm.reset();
}
//Implement the validation function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2)
  {
    return false;
  }
  else {
    return true;
  }
}
//Implement the show function
Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message:</strong> ${displayMessage}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">x</span>
  </button>
</div>`;

  setTimeout(function () {
  message.innerHTML = ''
  }, 2000);
}




// step-4
// Add submit event listener to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);


function libraryFormSubmit(e) {
   e.preventDefault();
  console.log('you have submitted library form');

  let name = document.getElementById('bookName').value;
  let author = document.getElementById('author').value;
  let type;

  //Biography, computer programming, philosophy

  let biography = document.getElementById('biography');
  let programming = document.getElementById('programming');
  let philosophy = document.getElementById('philosophy');

  if (biography.checked) {
    type = biography.value;
  }
  else if (programming.checked) {
    type = programming.value;
  }
  else if (philosophy.checked) {
    type = philosophy.value;
  }

  let book = new Book(name, author, type);
  console.log(book);
  // e.preventDefault();
  let display = new Display();


  if (display.validate(book)) {

    display.add(book);
    display.clear();
    display.show('success', 'Your book has been successfully added');

  }
  else {
    //show error to the user
    display.show('danger', 'Sorry you cannot add this book');
  }
  // e.preventDefault();
}