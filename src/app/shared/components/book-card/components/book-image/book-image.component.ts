import { Component, computed, input, Signal } from '@angular/core';
import { MatCardImage } from '@angular/material/card';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'bl-book-image',
  standalone: true,
  imports: [MatCardImage, NgTemplateOutlet],
  templateUrl: './book-image.component.html',
  styleUrl: './book-image.component.scss',
})
export class BookImageComponent {
  public imagePath = input.required<string | null>();
  public altText = input.required<string>();
  public bookImagePath: Signal<string> = computed(
    () => this.imagePath() ?? 'assets/images/books/no-image.png'
  );
}
