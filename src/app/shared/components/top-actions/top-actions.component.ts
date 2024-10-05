import { Component, computed, input, output } from '@angular/core';
import { MatCardActions } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';

import { createTopActionsAnimation } from '@shared/components/top-actions/animations/top-actions-container.animation';

@Component({
  selector: 'bl-top-actions',
  standalone: true,
  imports: [MatCardActions, MatIcon, MatMiniFabButton],
  templateUrl: './top-actions.component.html',
  styleUrl: './top-actions.component.scss',
  animations: [createTopActionsAnimation()],
})
export class TopActionsComponent {
  public canEdit = input<boolean>(true);
  public canRemove = input<boolean>(true);

  public remove = output<void>();
  public edit = output<void>();

  public isTopBarActive = computed(() => this.canEdit() || this.canRemove());
}
