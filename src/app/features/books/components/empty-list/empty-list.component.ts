import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bl-empty-list',
  standalone: true,
  imports: [],
  templateUrl: './empty-list.component.html',
  styleUrl: './empty-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyListComponent {}
