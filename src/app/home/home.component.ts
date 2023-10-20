import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent, LoaderComponent],
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  loading: boolean = true

  getLoading(): void {
    this.loading = false
  }
}
