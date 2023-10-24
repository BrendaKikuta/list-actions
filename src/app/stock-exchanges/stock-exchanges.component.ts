import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Exchange } from './exchanges.interface';
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
  @Output() finishLoading: EventEmitter<boolean> = new EventEmitter<boolean>(false)

  stockExchanges: Array<Exchange>
  order: string

  constructor(private stockExchangesService: StockExchangesService) {}

  ngOnInit(): void {
    this.getQuotes()
  }

  getQuotes(): void {
    this.stockExchangesService.getQuotes().subscribe(response => {
      this.stockExchanges = response
      this.finishLoading.emit(true)
    }, error => {
      this.finishLoading.emit(true)
      console.warn(error)
    })
  }

  setOrder(value: string): void {
    this.order = value
  }
}
