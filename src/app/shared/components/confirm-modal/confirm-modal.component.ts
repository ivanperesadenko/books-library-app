import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

const DEFAULT_TITLE = 'Confirm Dialog';
const DEFAULT_DESCRIPTION =
  'This action cannot be undone, and all related data will be permanently removed. Please confirm your decision to proceed.';

@Component({
  selector: 'bl-confirm-modal',
  standalone: true,
  imports: [MatButton, MatDialogClose],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
})
export class ConfirmModalComponent {
  public data = inject<{ title: string; description: string }>(MAT_DIALOG_DATA);

  public title = this.data ? this.data.title : DEFAULT_TITLE;
  public description = this.data ? this.data.description : DEFAULT_DESCRIPTION;
}
