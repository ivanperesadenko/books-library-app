import { Injectable } from '@angular/core';
import { BooksStateService } from '@states/books/books-state.service';
import { delay, map, Observable, of, tap } from 'rxjs';
import { Book } from '@shared/types';

const FAKE_REQUEST_DELAY = 500;

@Injectable({
  providedIn: 'root',
})
export class BooksFakeApiService {
  constructor(private booksStateService: BooksStateService) {}

  public getBookById(id: number): Observable<Book | null> {
    const book: Book | null = this.booksStateService.getById(id);

    return of(book).pipe(delay(FAKE_REQUEST_DELAY));
  }

  public addBook(book: Book): Observable<void> {
    return of(book).pipe(
      delay(FAKE_REQUEST_DELAY),
      map(book => this.booksStateService.add(book))
    );
  }

  public updateBook(book: Book): Observable<void> {
    return of(book).pipe(
      delay(FAKE_REQUEST_DELAY),
      map(book => this.booksStateService.update(book))
    );
  }

  public deleteBook(id: number): Observable<boolean> {
    return of(id).pipe(
      delay(FAKE_REQUEST_DELAY),
      tap(() => this.booksStateService.delete(id)),
      map(() => true)
    );
  }
}
