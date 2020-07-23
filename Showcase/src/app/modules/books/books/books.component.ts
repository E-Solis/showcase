import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../core/models/book'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css', 
]
})
export class BooksComponent implements OnInit {

  constructor() { }

  books: Book[];

  book: Book;

  displayModal: boolean;

  ngOnInit() {
  }

  receiveBooks($event){
    this.books = $event;
  }

  showModalDialog(book: Book) {
    this.book = book;
    this.displayModal = true;
}

updateModal($event){
  this.displayModal = false;
}

}
