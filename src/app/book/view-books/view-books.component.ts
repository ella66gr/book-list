import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model'; // import the Book interface
import { BookService } from '../book.service'; // import the BookService

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})

export class ViewBooksComponent implements OnInit {
  sampleBook: Book; // declare a variable of type Book

  constructor(private bookService: BookService) {
    this.sampleBook = {    
      id: 0,
      title: '',
      author: '',
      publicationYear: 0,
      type: 'Fiction',
      summary: ''
    }; // declare a variable of type Book - this was an array, but we changed it to a single book
  }
  
  ngOnInit(): void {
    this.sampleBook = this.bookService.getSampleBook();
  }

}

/* Alternate code: - seems not to matter whether we use the above or below code
export class ViewBooksComponent implements OnInit {
  sampleBook: Book = { // provide a default value when the property is declared
    id: 1,
    title: '',
    author: '',
    publicationYear: 0,
    type: 'Fiction',
    summary: ''
  };

  constructor(private bookService: BookService) { }
  
  ngOnInit(): void {
    this.sampleBook = this.bookService.getSampleBook();
  }
}
*/