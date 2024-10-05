import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

import { Book } from '@shared/types';
import { BooksStateService } from '@states/books/books-state.service';
import { NotificationsService } from '@core-services/notifications.service';

const FAKE_REQUEST_DELAY = 500;

@Injectable({
  providedIn: 'root',
})
export class BooksFakeApiService {
  private booksStateService = inject(BooksStateService);
  private notificationsService = inject(NotificationsService);

  public addBook(book: Book): Observable<void> {
    return of(book).pipe(
      delay(FAKE_REQUEST_DELAY),
      tap(book => {
        const title = `Book: "${book.title}" successfully added to your library`;
        this.notificationsService.openSnackBar(title);
      }),
      map(book => this.booksStateService.add(book))
    );
  }

  public updateBook(book: Book): Observable<Book> {
    return of(book).pipe(
      delay(FAKE_REQUEST_DELAY),
      map(book => this.booksStateService.update(book)),
      map(_ => book)
    );
  }

  public deleteBook(id: string): Observable<boolean> {
    return of(id).pipe(
      delay(FAKE_REQUEST_DELAY),
      tap(() => {
        const title = `Book successfully deleted`;
        this.notificationsService.openSnackBar(title);
      }),
      tap(() => this.booksStateService.delete(id)),
      map(() => true)
    );
  }
}
