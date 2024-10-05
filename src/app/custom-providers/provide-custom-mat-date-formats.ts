import { Provider } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { matDatepickerFormatConfig } from '@configs';

export const provideCustomMatDateFormats = (): Provider => ({
  provide: MAT_DATE_FORMATS,
  useValue: matDatepickerFormatConfig,
});
