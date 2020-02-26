import { Component, OnInit } from '@angular/core';
import { MobilecartService } from '../mobilecart.service';
import { Mobile } from 'src/classes/Mobile';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/classes/Customer';
import { ContactService } from '../contact.service';
import { Order } from 'src/classes/Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  customer : Customer
  newOrder : Order

  constructor(private mobileCartService : MobilecartService, private contactService : ContactService,
    private orderService : OrderService, private activatedRoute : ActivatedRoute,
    private router : Router) { 
      this.newOrder = new Order()
      this.customer = new Customer()
  }

  ngOnInit(): void {
    this.newOrder.mobiles = this.mobileCartService.getMobilesInCart()
    this.newOrder.orderTotal = this.mobileCartService.getCartTotal()

    this.activatedRoute.params.subscribe(params => {
      this.newOrder.customerId = params["id"]
      this.getCustomerContact(params["id"])
    })
  }

  getCustomerContact(id : number) {
    this.contactService.getCustomer(id)
    .subscribe(data => {
      this.customer = data
    })
  }

  confirmOrder() {
    this.newOrder.id = Math.floor(Math.random() * 1000)
    
    this.orderService.addNewOrder(this.newOrder)
    .subscribe(data => {
      alert("Placed order successfully!")
      this.router.navigate(["/ordermanagement", this.customer.id])
    })
  }
}
