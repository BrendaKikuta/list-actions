import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";

@Injectable({
  providedIn: 'root',
 })

export class StockExchangesService {
  private url: string = 'http://localhost:8080/quotes'

  constructor(private httpClient: HttpClient) { }


  getQuotes(): Observable<{}> {
    return this.httpClient
    .get(this.url).pipe(
      retry(3),
      catchError(this.handleError())
    )
  }

  private handleError(): any {
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
