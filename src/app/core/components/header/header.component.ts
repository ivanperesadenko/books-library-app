import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '@core-components/logo/logo.component';

@Component({
  selector: 'bl-header',
  standalone: true,
  imports: [MatIcon, RouterLink, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
