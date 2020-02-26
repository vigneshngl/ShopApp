import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Mobile } from 'src/classes/Mobile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mobile-rf',
  templateUrl: './add-mobile-rf.component.html',
  styleUrls: ['./add-mobile-rf.component.css']
})
export class AddMobileRFComponent implements OnInit {

  brands : string[] = []
  reactForm : FormGroup

  constructor(private mobilesServices: MobilesService, private router: Router) { 
    this.brands = this.mobilesServices.getAllBrands()
  }

  ngOnInit(): void {
    this.reactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]),
      brand: new FormControl(this.brands[1]),
      price: new FormControl('', Validators.required),
      available: new FormControl('', Validators.required),
      desc: new FormControl(''),
      quantity: new FormControl(''),
      url: new FormControl('', Validators.required)
    })
  }

  addNewMobile() {
    let newMobile : Mobile = this.reactForm.value
    newMobile.id = Math.floor(Math.random() * 1000)
    newMobile.url = `../assets/${newMobile.url}.jpg`

    // this.mobilesServices.addNewMobile(newMobile)

    this.mobilesServices.addNewMobile(newMobile)
    .subscribe((data) => {
      alert("New mobile added successfully")
      this.router.navigate(["/mobiles"])
    })
  }
}
