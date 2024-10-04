import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
  output,
  signal,
  OnDestroy,
} from '@angular/core';
import { Book } from '@shared/types';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import {
  NgComponentOutlet,
  NgIf,
  NgOptimizedImage,
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { DisableTooltipIfEllipsisDirective } from '@shared/directives/disable-tooltip-if-ellipsis.directive';
import { MatDivider } from '@angular/material/divider';
import { HoverTriggerDirective } from '@shared/directives/hover-trigger.directive';
import { MatIcon } from '@angular/material/icon';

import { BookImageComponent } from '@shared/components/book-card/components/book-image/book-image.component';
import { BookActionsComponent } from '@shared/components/book-card/components/book-actions/book-actions.component';
import { MatDialog } from '@angular/material/dialog';
import { BooksFakeApiService } from '@states/books/books-fake-api.service';
import { filter, map, Subject, switchMap, takeUntil } from 'rxjs';
import { ConfirmModalComponent } from '@shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'bl-book-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardContent,
    NgOptimizedImage,
    NgComponentOutlet,
    NgTemplateOutlet,
    MatCardImage,
    NgIf,
    MatCardActions,
    MatButton,
    MatTooltip,
    DisableTooltipIfEllipsisDirective,
    MatDivider,
    NgStyle,
    HoverTriggerDirective,
    MatMiniFabButton,
    MatIcon,
    BookImageComponent,
    BookActionsComponent,
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent implements OnDestroy {
  public book: InputSignal<Book> = input.required<Book>();
  public cardHover = signal<boolean>(false);

  private dialog = inject(MatDialog);
  private booksApi = inject(BooksFakeApiService);
  private destroy$$ = new Subject<void>();

  public deleteBookHandler(): void {
    this.dialog
      .open(ConfirmModalComponent)
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(_ => this.booksApi.deleteBook(this.book().id)),
        takeUntil(this.destroy$$)
      )
      .subscribe();
  }

  public openBookDetails(): void {
    // TODO: Implement open details feature here ...
  }

  public ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }
}
