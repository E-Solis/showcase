import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/core/models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() displayModal: boolean;
  @Output() modalEvent = new EventEmitter<boolean>();
  @Input() book: Book;


  constructor() { }

  ngOnInit(): void {
  }

  modalChange(change: boolean){
    this.modalEvent.emit(change);
  }

}
