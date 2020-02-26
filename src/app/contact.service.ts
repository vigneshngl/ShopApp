import { Injectable } from '@angular/core';
import { Customer } from 'src/classes/Customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private customers : Customer[] = []
  private url : string = "http://localhost:3001/customers"

  constructor(private httpClient : HttpClient) { }

  getAllCustomers() {
    return this.httpClient.get(this.url)
  }

  getCustomer(id: number) {
    return this.httpClient.get<Customer>(`${this.url}/${id}`)
  }

  addNewCustomer(newCustomer: Customer) {
    return this.httpClient.post(this.url, newCustomer)
  }
}
