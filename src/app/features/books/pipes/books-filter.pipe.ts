import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '@shared/types';

@Pipe({
  name: 'booksFilter',
  standalone: true,
  pure: true,
})
export class BooksFilterPipe implements PipeTransform {
  transform(books: Book[], searchTerm: string | null): Book[] {
    const searchPropertyKeys: (keyof Book)[] = ['title', 'authorName'];

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
}
