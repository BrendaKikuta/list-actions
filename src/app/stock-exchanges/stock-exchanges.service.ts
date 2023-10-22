import { Injectable } from "@angular/core";
import { webSocket } from "rxjs/webSocket";
import { Observable } from "rxjs";
import { Exchange } from "./exchanges.interface";

@Injectable({
  providedIn: 'root',
 })

export class StockExchangesService {
  getQuotes(): Observable<Array<Exchange>> {
    const subject = webSocket("ws://127.0.0.1:8080/quotes");
    const exchanges: any = []
    
    return new Observable(subscriber => {
      subject.subscribe(response => {
        exchanges.push(response)
  
        if (exchanges.length > 15) {
          subject.complete()
          subscriber.next(this.prepareData(exchanges))
          subscriber.complete()
        }
      })
    })
  }

  private prepareData(exchanges: []): Array<Exchange> {
    const quotes: Array<Exchange> = []

    Object.entries(exchanges).forEach(exchange => {
      const quote = Object.entries(exchange[1])

      quotes.push({
        name: quote[0][0],
        price: quote[0][1]
      })
    })

    return quotes
  }
}
