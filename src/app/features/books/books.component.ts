import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgStyle } from '@angular/common';
import { BooksStateService } from '@states/books/books-state.service';
import { BooksFilterPipe } from '@features/books/pipes/books-filter.pipe';
import { createFadeAnimation } from '@shared/animations/fade.animation';
import { BooksFilterComponent } from '@features/books/components/books-filter/books-filter.component';
import { BookCardComponent } from '@shared/components/book-card/book-card.component';
import { Book } from '@shared/types';
import { EmptyListComponent } from '@features/books/components/empty-list/empty-list.component';

@Component({
  selector: 'bl-books',
  standalone: true,
  imports: [
    BookCardComponent,
    BooksFilterComponent,
    NgStyle,
    EmptyListComponent,
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BooksFilterPipe],
  animations: [createFadeAnimation()],
})
export class BooksComponent {
  private route = inject(ActivatedRoute);
  private state = inject(BooksStateService);
  private booksFilterPipe = inject(BooksFilterPipe);

  public books: Signal<Book[]> = this.state.booksSignal;
  public filteredBooks: Signal<Book[]> = computed(() => {
    return this.booksFilterPipe.transform(this.books(), this.searchTerm());
  });
  public searchTerm: WritableSignal<string> = signal<string>('');

  public pageTitle: string = this.route.snapshot.routeConfig?.title as string;
}
