import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  provideCustomTitleStrategy,
  provideCustomTooltipDefaultOptions,
  provideCustomMatDialogDefaultOptions,
} from '@custom-providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideCustomTitleStrategy(),
    provideCustomTooltipDefaultOptions(),
    provideCustomMatDialogDefaultOptions(),
  ],
};
