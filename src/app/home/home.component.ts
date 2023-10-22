import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { StockExchangesComponent } from '../stock-exchanges/stock-exchanges.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent, LoaderComponent, StockExchangesComponent],
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  loading: boolean = false

  getLoading(): void {
    this.loading = false
  }
}
