class Library {
  constructor(name){
    this.name = name
    this.books =[]
  }
    // addbook
// push the new book item into the array
    // get books
// read through all the array and use map function to return all the names
    // getbooksbycategory
// use map function to check for which item have the input category
// if have, push the book name into the categoryCollection
// check if there are any contents inside the collection
  // if yes, use a forEach loop to console.log all the results
  // if not, console.log "There are no available books for requested category"
  
  addBook(newBook){
    // need to check if the book details match any from the list of books (check for name and author)
      // if yes, ask user to input a new book instead 
      // else just push into books array
    this.books.push(newBook)
  }

  getBooks(){
    let allBooks = [] 
    this.books.forEach((book)=>{allBooks.push(book.name) })
    return allBooks
  }

  getBooksByCategory(inputCategory){
    let categoryCollection = []
    this.books.forEach((book)=>{
      if (book.category === inputCategory){
        categoryCollection.push(book.name)
      }
    })
    return categoryCollection
  }
  }
  
  class Book {
    constructor(name,author,category){
      this.name = name,
      this.author = author,
      this.category = category
    }
  }
  
  const library = new Library('ABC')
  
  const bookA = new Book('Book A', 'Mr. A', 'Sci-Fi')
  const bookB = new Book('Book B', 'Mr. A', 'Sci-Fi')
  const bookC = new Book('Book C', 'Mr. B', 'Horror')
  library.addBook(bookA)
  library.addBook(bookB)
  library.addBook(bookC)
  
  const allBooks = library.getBooks()
  const horrorBooks = library.getBooksByCategory('Horror')
  
  console.log(allBooks) // ['Book A', 'Book B', 'Book C']
  console.log(horrorBooks) // ['Book C']

  // Not implementing the saftey check codes as this isn't a while loop exercise that constantly need check for user inputs