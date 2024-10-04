import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CustomTitleStrategyService } from './core/services/custom-title-strategy.service';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { matTooltipDefaultOptions } from './configs/mat-tooltip-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategyService,
    },
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: matTooltipDefaultOptions,
    },
  ],
};
