import { Component, OnInit } from '@angular/core';
import { CarouselModule }  from 'primeng/carousel';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css',
  "node_modules/primeicons/primeicons.css",
  "node_modules/primeng/resources/themes/nova-light/theme.css",
  "node_modules/primeng/resources/primeng.min.css"]
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
