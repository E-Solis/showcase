import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './modules/books/books/books.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './modules/home/header/header.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BookSearchComponent } from './modules/books/book-search/book-search.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './modules/books/book-details/book-details.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingModule } from 'angular-star-rating';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    BookSearchComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule,
    StarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
