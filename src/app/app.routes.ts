import { Routes } from '@angular/router';
import { BooksComponent } from '@features/books/books.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
  {
    path: 'books',
    component: BooksComponent, // There is no point in lazy loading the component since we only have one page
    title: `Books list`,
  },
  {
    path: '**',
    redirectTo: 'books',
  },
];
