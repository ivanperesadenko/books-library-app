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
    component: BooksComponent,
    title: `Books list`,
  },
];
