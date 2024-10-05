import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { matDatepickerFormatConfig } from '@configs';
import { provideCustomMatDateFormats } from '@custom-providers';
import { BookFormInterface } from '@shared/components/book-form-template/types/book-form.interface';
import { BookImageComponent } from '@shared/components/book-image/book-image.component';

@Component({
  selector: 'bl-book-form-template',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    BookImageComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './book-form-template.component.html',
  styleUrl: './book-form-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  providers: [
    provideMomentDateAdapter(matDatepickerFormatConfig),
    provideCustomMatDateFormats(),
  ],
})
export class BookFormTemplateComponent implements OnInit {
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  private controlContainer = inject(ControlContainer) as FormGroupDirective;

  public formGroup!: WritableSignal<FormGroup<BookFormInterface>>;

  public setImagePath(imagePath: string | null): void {
    this.formGroup().get('imagePath')?.setValue(imagePath);
    this.cdr.markForCheck();
  }

  public get imagePath(): string | null {
    return this.formGroup().getRawValue().imagePath;
  }

  public ngOnInit() {
    this.formGroup = signal(
      this.controlContainer.form as FormGroup<BookFormInterface>
    );
  }
}
