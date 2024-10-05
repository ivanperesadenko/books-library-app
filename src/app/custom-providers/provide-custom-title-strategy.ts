import { Provider } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { CustomTitleStrategyService } from '@core-services/custom-title-strategy.service';

export const provideCustomTitleStrategy = (): Provider => ({
  provide: TitleStrategy,
  useClass: CustomTitleStrategyService,
});
