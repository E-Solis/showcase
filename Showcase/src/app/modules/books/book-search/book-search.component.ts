import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
      debounceTime(300)
    ).subscribe(searchTextValue => {
      this.handleSearch(searchTextValue);
    });
  }

search(searchValue: string){
  this.subject.next(searchValue);
}

handleSearch(searchValue: string){
  if(searchValue.length > 0){
  this.bookService.getBooks(searchValue).subscribe((val) => {
    this.bookResponse = val;
    this.booksEvent.emit(this.bookResponse.items);
  })}
  else{
    this.booksEvent.emit(null);
  }


}



}
