import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  output,
  signal,
  Signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { FileReaderService } from '@core-services/file-reader.service';
import { HoverTriggerDirective } from '@shared/directives/hover-trigger.directive';
import { TopActionsComponent } from '@shared/components/top-actions/top-actions.component';

@Component({
  selector: 'bl-book-image',
  standalone: true,
  imports: [NgTemplateOutlet, HoverTriggerDirective, TopActionsComponent],
  templateUrl: './book-image.component.html',
  styleUrl: './book-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookImageComponent {
  public inputFile =
    viewChild.required<ElementRef<HTMLInputElement>>('inputFile');

  public imagePath = input<string | null>(null);
  public altText = input<string>('no image');
  public editable = input<boolean>(false);
  public containByHeight = input<boolean>(false);

  public imageChanged = output<string | null>();

  public bookImagePath: Signal<string> = computed(
    () => this.imagePath() ?? 'assets/images/books/no-image.png'
  );
  public imageHover: WritableSignal<boolean> = signal<boolean>(false);

  public triggerFileInput() {
    const element: HTMLInputElement = this.inputFile().nativeElement;
    element.click();
  }

  public changeImage(event: Event): void {
    FileReaderService.readFile(event, (readerResult: string) => {
      this.imageChanged.emit(readerResult);
    });
  }

  public removeImage(): void {
    this.imageChanged.emit(null);
  }
}
