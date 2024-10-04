import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@shared/types';
import { BooksStateService } from '@states/books/books-state.service';
import { BookCardComponent } from '@shared/components/book-card/book-card.component';
import { BooksFilterComponent } from '@features/books/components/books-filter/books-filter.component';
import { BooksFilterPipe } from '@features/books/pipes/books-filter.pipe';
import { animate, style, transition, trigger } from '@angular/animations';
import { createBookAnimation } from '@features/books/animations/book.animation';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'bl-books',
  standalone: true,
  imports: [BookCardComponent, BooksFilterComponent, NgStyle],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BooksFilterPipe],
  animations: [createBookAnimation()],
})
export class BooksComponent implements OnInit {
  public books!: Signal<Book[]>;
  public filteredBooks!: Signal<Book[]>;
  public searchTerm: WritableSignal<string> = signal<string>('');

  public pageTitle!: string;

  constructor(
    private route: ActivatedRoute,
    private state: BooksStateService,
    private booksFilterPipe: BooksFilterPipe
  ) {
    this.books = this.state.booksSignal;
    this.filteredBooks = computed(() => {
      return this.booksFilterPipe.transform(this.books(), this.searchTerm());
    });
  }

  public ngOnInit(): void {
    this.setTitle();
  }

  private setTitle(): void {
    this.pageTitle = this.route.snapshot.routeConfig?.title as string;
  }

  public setSearchTerm(event: unknown): void {
    console.log(event);
  }
}
