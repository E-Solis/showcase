import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './modules/books/books/books.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './modules/home/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
