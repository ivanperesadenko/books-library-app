import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LogoComponent } from '@core-components/logo/logo.component';
import { CreateNewBookBtnComponent } from '@shared/components/create-new-book-btn/create-new-book-btn.component';

@Component({
  selector: 'bl-header',
  standalone: true,
  imports: [RouterLink, LogoComponent, CreateNewBookBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
