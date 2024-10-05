import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { Book } from '@shared/types';
import { BookImageComponent } from '@shared/components/book-image/book-image.component';
import { DatePipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { filter, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ConfirmModalComponent } from '@shared/components/confirm-modal/confirm-modal.component';
import { BooksFakeApiService } from '@states/books/books-fake-api.service';
import { BookModalComponent } from '@shared/components/book-modal/book-modal.component';

@Component({
  selector: 'bl-book-details-modal',
  standalone: true,
  imports: [
    MatButton,
    BookImageComponent,
    DatePipe,
    MatDivider,
    MatDialogClose,
  ],
  templateUrl: './book-details-modal.component.html',
  styleUrl: './book-details-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailsModalComponent implements OnDestroy {
  private dialog: MatDialog = inject(MatDialog);
  private data = inject<Book>(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<BookDetailsModalComponent>);
  private booksApi = inject(BooksFakeApiService);

  public book: WritableSignal<Book> = signal(this.data);

  private destroy$: Subject<void> = new Subject<void>();

  public deleteBookHandler(): void {
    this.dialog
      .open(ConfirmModalComponent)
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(_ => this.booksApi.deleteBook(this.book().id)),
        tap(() => this.dialogRef.close()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public editBook(): void {
    this.dialog
      .open(BookModalComponent, {
        data: this.book(),
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((book: Book) => this.book.set(book)),
        switchMap((book: Book) => this.booksApi.updateBook(book)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
