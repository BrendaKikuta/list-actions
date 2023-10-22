import { Component, Input, OnInit } from '@angular/core';
import { Exchange } from '../exchanges.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-exchange-card',
  templateUrl: './exchange-card.component.html',
  styleUrls: ['./exchange-card.component.scss'],
})

export class ExchangeCardComponent implements OnInit {
  @Input() stockExchanges: Array<Exchange>
  @Input() order: string

  ngOnInit(): void {
    this.orderBy()
  }

  orderBy(): Array<Exchange> {
    if (!this.order) return this.stockExchanges

    switch (this.order) {
      case 'asc': 
        return this.stockExchanges.sort((firstQuote, secondQuote) => firstQuote['price'] > secondQuote['price'] ? 1 : firstQuote['price'] === secondQuote['price'] ? 0 : -1);
      default:
        return this.stockExchanges.sort((firstQuote, secondQuote) => firstQuote['price'] < secondQuote['price'] ? 1 : firstQuote['price'] === secondQuote['price'] ? 0 : -1); 
    }
  }
}
