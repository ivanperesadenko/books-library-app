import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[blHoverTrigger]',
  standalone: true,
})
export class HoverTriggerDirective {
  public hoverTrigger = output<boolean>();

  @HostListener('mouseenter') public mouseEnter(): void {
    this.hoverTrigger.emit(true);
  }

  @HostListener('mouseleave') public mouseLeave(): void {
    this.hoverTrigger.emit(false);
  }
}
