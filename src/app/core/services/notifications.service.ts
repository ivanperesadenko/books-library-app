import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private snackBar = inject(MatSnackBar);

  public openSnackBar(title: string) {
    const snackBarConfig: MatSnackBarConfig<string> = {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    };

    this.snackBar.open(title, 'Close', snackBarConfig);
  }
}
