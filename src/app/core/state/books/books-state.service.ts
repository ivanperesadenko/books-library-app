import { Injectable, signal, WritableSignal } from '@angular/core';
import { Book } from '@shared/types';
import { initialBooks } from '@mocks/books';

@Injectable({
  providedIn: 'root',
})
export class BooksStateService {
  public readonly booksSignal: WritableSignal<Book[]> =
    signal<Book[]>(initialBooks);

  public set(books: Book[]): void {
    this.booksSignal.set([...books]);
  }

  public getById(id: number): Book | null {
    return this.booksSignal().find(book => book.id === id) || null;
  }

  public getList(): Book[] {
    return this.booksSignal();
  }

  public add(book: Book): void {
    this.booksSignal.update((books: Book[]) => [...books, book]);
  }

  public update(updatedBook: Book): void {
    this.booksSignal.update((books: Book[]) =>
      books.map((book: Book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  }

  public delete(id: number): void {
    this.booksSignal.update((books: Book[]) =>
      books.filter(book => book.id !== id)
    );
  }
}
