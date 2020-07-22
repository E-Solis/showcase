import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookResponse } from '../models/book'
import { HttpClient } from '@angular/common/http';

const GOOGLE_BOOKS_BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooks(query: string): Observable<BookResponse> {
    const param = `?q=${query}&maxResults=40`;

    const queryUrl = `${GOOGLE_BOOKS_BASE_URL}${param}`

    return this.httpClient.get<BookResponse>(queryUrl);

  }
}