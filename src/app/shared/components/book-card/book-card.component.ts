import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
  signal,
  OnDestroy,
} from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { filter, Subject, switchMap, takeUntil } from 'rxjs';
import { MatTooltip } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';

import { BooksFakeApiService } from '@states/books/books-fake-api.service';
import { Book } from '@shared/types';
import { DisableTooltipIfEllipsisDirective } from '@shared/directives/disable-tooltip-if-ellipsis.directive';
import { BookImageComponent } from '@shared/components/book-image/book-image.component';
import { HoverTriggerDirective } from '@shared/directives/hover-trigger.directive';
import { ConfirmModalComponent } from '@shared/components/confirm-modal/confirm-modal.component';
import { TopActionsComponent } from '@shared/components/top-actions/top-actions.component';
import { BookDetailsModalComponent } from '@shared/components/book-details-modal/book-details-modal.component';

@Component({
  selector: 'bl-book-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatTooltip,
    DisableTooltipIfEllipsisDirective,
    HoverTriggerDirective,
    BookImageComponent,
    TopActionsComponent,
    DatePipe,
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent implements OnDestroy {
  private dialog = inject(MatDialog);
  private booksApi = inject(BooksFakeApiService);

  public book: InputSignal<Book> = input.required<Book>();
  public cardHover = signal<boolean>(false);

  private destroy$ = new Subject<void>();

  public deleteBookHandler(): void {
    this.dialog
      .open(ConfirmModalComponent)
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(_ => this.booksApi.deleteBook(this.book().id)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public openBookDetails(): void {
    this.dialog
      .open(BookDetailsModalComponent, {
        data: this.book(),
      })
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
