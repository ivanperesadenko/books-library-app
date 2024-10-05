import { Component, inject, OnDestroy } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { BooksFakeApiService } from '@states/books/books-fake-api.service';
import { filter, Subject, switchMap, takeUntil } from 'rxjs';
import { Book } from '@shared/types';
import { BookModalComponent } from '@shared/components/book-modal/book-modal.component';

@Component({
  selector: 'bl-create-new-book-btn',
  standalone: true,
  imports: [MatFabButton, MatIcon],
  templateUrl: './create-new-book-btn.component.html',
  styleUrl: './create-new-book-btn.component.scss',
})
export class CreateNewBookBtnComponent implements OnDestroy {
  private readonly fakeApi = inject(BooksFakeApiService);
  public readonly dialog: MatDialog = inject(MatDialog);

  private destroy$: Subject<void> = new Subject<void>();

  public openCreateBookFormModal(): void {
    this.dialog
      .open(BookModalComponent)
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((value: Book) => this.fakeApi.addBook(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
