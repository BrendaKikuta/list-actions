import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ExchangeCardComponent } from './exchange-card/exchange-card.component';
import { StockExchangesService } from './stock-exchanges.service';

@Component({
  standalone: true,
  imports: [CommonModule, ExchangeCardComponent],
  selector: 'app-stock-exchanges',
  templateUrl: './stock-exchanges.component.html',
  styleUrls: ['./stock-exchanges.component.scss']
})

export class StockExchangesComponent implements OnInit {
  stockExchanges: []

  constructor(private stockExchangesService: StockExchangesService) {}

  ngOnInit(): void {
    this.getQuotes()
  }

  getQuotes() {
    this.stockExchangesService.getQuotes().subscribe(response => {
      console.log(response)
    })
  }
}
