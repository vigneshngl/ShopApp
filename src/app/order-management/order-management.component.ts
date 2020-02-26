import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from 'src/classes/Order';
import { Customer } from 'src/classes/Customer';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {

  orders : Order[]
  customer : Customer

  constructor(private activatedRoute : ActivatedRoute, private orderService : OrderService,
    private customerService : ContactService) {
    this.customer = new Customer()
    this.activatedRoute.params.subscribe(params => {
      this.orderService.getCustomerOrders(params["id"]).subscribe(data => {
        this.orders = data
      }, err => {
        console.log(err)
      })

      this.customerService.getCustomer(params["id"]).subscribe(cust => {
        this.customer = cust
      })
    })
  }

  ngOnInit(): void {
  }
}
