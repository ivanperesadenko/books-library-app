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

  public getList(searchTerm = ''): Book[] {
    const books = this.booksSignal();
    const searchPropertyKeys: (keyof Book)[] = ['title', 'author'];

    if (!searchTerm) return books;

    const lowerSearchTerm: string = searchTerm.toLowerCase();

    return books.filter((book: Book) => {
      return searchPropertyKeys.some((propertyKey: keyof Book) => {
        const value = book[propertyKey];
        if (!value) return false;

        return (value as string).toLowerCase().includes(lowerSearchTerm);
      });
    });
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
