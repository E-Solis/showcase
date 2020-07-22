import { Component, OnInit, Input, ElementRef, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BookService } from 'src/core/services/book.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  @Output() booksEvent = new EventEmitter();

  bookResponse: any;

  constructor(private bookService: BookService) { }

  private subject: Subject<string> = new Subject();

  ngOnInit(): void {
    this.subject.pipe(
      debounceTime(200)
    ).subscribe(searchTextValue => {
      this.handleSearch(searchTextValue);
    });
  }

search(searchValue: string){
  this.subject.next(searchValue);
}

handleSearch(searchValue: string){

  this.bookService.getBooks(searchValue).subscribe((val) => {
    this.bookResponse = val;
    this.booksEvent.emit(this.bookResponse.items);
  })

}

}
