import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Order } from 'src/classes/Order';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = "http://localhost:3001/orders"

  constructor(private httpClient : HttpClient) { }

  addNewOrder(newOrder : Order) {
    return this.httpClient.post(this.orderUrl, newOrder)
  }

  getCustomerOrders(customerId : number) {
    const params = new HttpParams().set('customerId', `${customerId}`)
    return this.httpClient.get<Order[]>(this.orderUrl, {params})
    .pipe(
      tap(order => {}),
      catchError(this.handleError("getCustomerOrders", []))
    )
  }

  private handleError<T>(operation='operation', result?:T) {
    return (error: any) : Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }
}
