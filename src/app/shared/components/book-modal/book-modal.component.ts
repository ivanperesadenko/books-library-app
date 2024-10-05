import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import moment from 'moment/moment';

import { BookModel } from '@states/books/models/book.model';
import { Book } from '@shared/types';
import { bookFormGenerator } from '@shared/components/book-form-template/utils/book-form-generator';
import { BookFormInterface } from '@shared/components/book-form-template/types/book-form.interface';
import { BookFormValueInterface } from '@shared/components/book-form-template/types/book-form-value.interface';
import { BookFormTemplateComponent } from '@shared/components/book-form-template/book-form-template.component';

@Component({
  selector: 'bl-create-book-modal',
  standalone: true,
  imports: [MatButton, BookFormTemplateComponent, ReactiveFormsModule],
  templateUrl: './book-modal.component.html',
  styleUrl: './book-modal.component.scss',
})
export class BookModalComponent implements OnInit {
  private data = inject<Book>(MAT_DIALOG_DATA);

  private dialogRef = inject(MatDialogRef<BookModalComponent>);
  public formGroup: FormGroup<BookFormInterface> = bookFormGenerator();
  public isCreate = !this.data;

  public ngOnInit(): void {
    if (this.data) {
      this.fillForm();
    }
  }

  public onSubmit(): void {
    if (this.formGroup.invalid) return;
    const value = this.formGroup.value as BookFormValueInterface;
    const book = new BookModel(value);

    this.dialogRef.close(book);
  }

  private fillForm(): void {
    const book: Book = this.data;
    const formGroup: FormGroup<BookFormInterface> = this.formGroup;

    formGroup.get('id')?.setValue(book.id);
    formGroup.get('title')?.setValue(book.title);
    formGroup.get('authorName')?.setValue(book.authorName);
    formGroup.get('releaseDate')?.setValue(moment(book.releaseDate));
    formGroup.get('description')?.setValue(book.description);
    formGroup.get('imagePath')?.setValue(book.imagePath);
  }
}
