import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Book } from '../../../../core/models/book'
import { BookService } from '../../../../core/services/book.service'
import { BookSearchComponent } from '../book-search/book-search.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css', 
]
})
export class BooksComponent implements OnInit {

  constructor() { }

  books: Book[];

  ngOnInit() {
  }

  receiveBooks($event){
    this.books = $event;
  }

}
