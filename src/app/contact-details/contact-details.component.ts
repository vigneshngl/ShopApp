import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Customer } from 'src/classes/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactForm : FormGroup
  Customers : any = []
  existingCustomer : Customer
  allowAddCustomer : boolean
  customerId : number

  constructor(private customersService : ContactService, private route: Router) { }

  ngOnInit(): void {
    this.getAllCustomers()
    this.contactForm = this.getContactForm()
    this.allowAddCustomer = true
    this.customerId = 0
  }

  private getContactForm(fName: string = '', fAddress: string = '', fEmail: string = '', fPhone: string = '') {
    return new FormGroup({
      name: new FormControl(fName, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      address: new FormControl(fAddress, [Validators.required]),
      email: new FormControl(fEmail, [Validators.required, Validators.email]),
      phone: new FormControl(fPhone, [Validators.required, Validators.pattern('^[0-9]{10}$')])
    })
  }

  getAllCustomers() {
    this.customersService.getAllCustomers()
    .subscribe((data) => {
      this.Customers = data
    })
  }

  selectCustomer(event : any) {
    let selectedId = event.target.value
    if (selectedId == "0") {
      this.contactForm = this.getContactForm()
      this.allowAddCustomer = true
    } else {
      this.customersService.getCustomer(event.target.value)
      .subscribe((data) => {
        this.existingCustomer = data
        this.contactForm = 
          this.getContactForm(this.existingCustomer.name, this.existingCustomer.address,
          this.existingCustomer.email, this.existingCustomer.phone)
        this.allowAddCustomer = false
      })
    }
  }

  saveAddress(contactForm : any, event : any) {    
    event.preventDefault()
    let newCustomer : Customer = this.contactForm.value
    newCustomer.id = Math.floor(Math.random() * 1000)
    this.customersService.addNewCustomer(newCustomer).subscribe(cust => {
      alert("Customer added successfully !")
      this.customerId = newCustomer.id
      this.proceedOrder()
    })
    return false
  }

  proceedOrder() {
    this.route.navigate(["/ordersummary", this.customerId])
  }
}
