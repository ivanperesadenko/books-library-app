import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookFormInterface } from '@shared/components/book-form-template/types/book-form.interface';
import { v4 as uuidv4 } from 'uuid';
import moment, { Moment } from 'moment';

export function bookFormGenerator(): FormGroup<BookFormInterface> {
  return new FormGroup<BookFormInterface>(
    {
      id: new FormControl<string>(uuidv4(), { nonNullable: true }),
      title: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      authorName: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      releaseDate: new FormControl<Moment>(moment(), {
        nonNullable: true,
        validators: [Validators.required],
      }),
      description: new FormControl<string | null>(null),
      imagePath: new FormControl<string | null>(null),
    },
    { updateOn: 'blur' }
  );
}
