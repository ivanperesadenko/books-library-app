import {
  AfterViewInit,
  Directive,
  ElementRef,
  Host,
  HostListener,
  OnDestroy,
  Optional,
} from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { isTextTruncated } from '@utils';
import { Subject, takeUntil, tap, throttleTime } from 'rxjs';

@Directive({
  selector: '[blDisableTooltipIfEllipsis]',
  standalone: true,
})
export class DisableTooltipIfEllipsisDirective
  implements AfterViewInit, OnDestroy
{
  private readonly resize$$ = new Subject<void>();
  private readonly debouncedResizeEvent$ = this.resize$$.pipe(
    throttleTime(500)
  );
  private readonly destroy$ = new Subject<void>();

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    @Host() @Optional() private matTooltip: MatTooltip
  ) {}

  @HostListener('window:resize') public onResize() {
    this.resize$$.next();
  }

  public ngAfterViewInit(): void {
    this.detectChanges();
    this.listenDebouncedResizeEvent();
  }

  private detectChanges(): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    this.matTooltip.disabled = !isTextTruncated(element);
  }

  private listenDebouncedResizeEvent(): void {
    this.debouncedResizeEvent$
      .pipe(
        tap(_ => this.detectChanges()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
