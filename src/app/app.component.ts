import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderComponent } from '@core-components/header/header.component';

@Component({
  selector: 'bl-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
