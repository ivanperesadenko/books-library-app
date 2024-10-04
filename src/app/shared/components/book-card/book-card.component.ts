import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  signal,
  Signal,
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
import { isTextTruncated } from '@utils';
import { DisableTooltipIfEllipsisDirective } from '@shared/directives/disable-tooltip-if-ellipsis.directive';
import { MatDivider } from '@angular/material/divider';
import { HoverTriggerDirective } from '@shared/directives/hover-trigger.directive';
import { createBookActionsAnimation } from '@shared/components/book-card/animations/book-actions-container.animation';
import { MatIcon } from '@angular/material/icon';

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
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
  animations: [createBookActionsAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  book: InputSignal<Book> = input.required<Book>();
  bookImagePath: Signal<string> = computed(
    () => this.book()?.imagePath ?? 'assets/images/books/no-image.png'
  );
  cardHover = signal<boolean>(false);
  protected readonly isTextTruncated = isTextTruncated;
}
