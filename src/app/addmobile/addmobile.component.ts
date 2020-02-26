import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';
import { Mobile } from 'src/classes/Mobile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmobile',
  templateUrl: './addmobile.component.html',
  styleUrls: ['./addmobile.component.css']
})
export class AddmobileComponent implements OnInit {

  brands : string[] = []
  mobile : Mobile

  constructor(private mobilesServices: MobilesService, private router: Router) { 
    this.brands = this.mobilesServices.getAllBrands()
  }

  ngOnInit(): void {
    this.mobile = new Mobile({
      name: "",
      brand: this.brands[0],
      price: 0,
      desc: "",
      quantity: 1,
      url: ""
    })
  }

  addNewMobile(addMobileForm) {
    let newMobile : Mobile = addMobileForm.form.value
    newMobile.id = Math.floor(Math.random() * 1000)
    newMobile.url = `../assets/${newMobile.url}.jpg`

    this.mobilesServices.addNewMobile(newMobile)
    .subscribe((data) => {
      alert("New mobile added successfully")
      this.router.navigate(["/mobiles"])
    })
  }
}
