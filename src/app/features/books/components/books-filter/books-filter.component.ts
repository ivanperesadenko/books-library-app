import {
  ChangeDetectionStrategy,
  Component,
  model,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'bl-books-filter',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatIcon,
    MatPrefix,
    MatSuffix,
  ],
  templateUrl: './books-filter.component.html',
  styleUrl: './books-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksFilterComponent implements OnInit, OnDestroy {
  public readonly searchTerm = model.required<string>();
  public readonly searchTermControl = new FormControl<string>('');

  private readonly destroy$ = new Subject<void>();

  public ngOnInit(): void {
    this.listenSearchTerm();
  }

  private listenSearchTerm(): void {
    this.searchTermControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(searchTerm => typeof searchTerm === 'string'),
        tap((searchTerm: string) => {
          this.searchTerm.set(searchTerm);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
