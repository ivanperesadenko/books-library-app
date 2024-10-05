import { Provider } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { matTooltipDefaultOptions } from '@configs';

export const provideCustomTooltipDefaultOptions = (): Provider => ({
  provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
  useValue: matTooltipDefaultOptions,
});
