import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ExchangeCardComponent } from './exchange-card/exchange-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, ExchangeCardComponent],
  selector: 'app-stock-exchanges',
  templateUrl: './stock-exchanges.component.html',
  styleUrls: ['./stock-exchanges.component.scss']
})

export class StockExchangesComponent {
  stockExchanges: []
}
