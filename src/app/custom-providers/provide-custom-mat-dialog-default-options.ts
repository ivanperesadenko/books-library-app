import { Provider } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { matDialogConfig } from '@configs';

export const provideCustomMatDialogDefaultOptions = (): Provider => ({
  provide: MAT_DIALOG_DEFAULT_OPTIONS,
  useValue: matDialogConfig,
});
