import { Component, model, OnDestroy, OnInit } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
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

@Component({
  selector: 'bl-books-filter',
  standalone: true,
  imports: [MatFormField, MatInput, MatLabel, ReactiveFormsModule],
  templateUrl: './books-filter.component.html',
  styleUrl: './books-filter.component.scss',
})
export class BooksFilterComponent implements OnInit, OnDestroy {
  private destroySubject = new Subject<void>();

  public readonly searchTerm = model.required<string>();
  public readonly searchTermControl = new FormControl<string>('');

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
          console.log(searchTerm);
          this.searchTerm.set(searchTerm);
        }),
        takeUntil(this.destroySubject)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroySubject.next();
  }
}
