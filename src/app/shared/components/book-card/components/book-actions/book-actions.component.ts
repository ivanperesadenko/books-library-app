import { Component, output } from '@angular/core';
import { MatCardActions } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { createBookActionsAnimation } from '@shared/components/book-card/animations/book-actions-container.animation';

@Component({
  selector: 'bl-book-actions',
  standalone: true,
  imports: [MatCardActions, MatIcon, MatMiniFabButton],
  templateUrl: './book-actions.component.html',
  styleUrl: './book-actions.component.scss',
  animations: [createBookActionsAnimation()],
})
export class BookActionsComponent {
  public deleteBook = output<void>();
  public openDetails = output<void>();
}
