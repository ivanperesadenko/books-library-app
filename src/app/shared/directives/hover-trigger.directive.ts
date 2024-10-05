import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[blHoverTrigger]',
  standalone: true,
})
export class HoverTriggerDirective {
  public hoverDetectionDisabled = input<boolean>(false);

  public hoverTrigger = output<boolean>();

  @HostListener('mouseenter') public mouseEnter(): void {
    if (!this.hoverDetectionDisabled()) {
      this.hoverTrigger.emit(true);
    }
  }

  @HostListener('mouseleave') public mouseLeave(): void {
    if (!this.hoverDetectionDisabled()) {
      this.hoverTrigger.emit(false);
    }
  }
}
