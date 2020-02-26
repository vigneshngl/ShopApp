import { Component, OnInit } from '@angular/core';
import { Mobile } from '../../classes/Mobile';
import { MobilecartService } from '../mobilecart.service';
import { MobilesService } from '../mobiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  brands : string[] = []
  selectedBrand : string = ""
  mobileList : Mobile[] = []
  selectedMobiles : Mobile[] = []
  infoMobile : Mobile
  showInfoMobile : boolean
  mobileCart : Mobile[] = []
  cartTotal : number 

  constructor(private mobileService: MobilesService, private mobileCartService : MobilecartService,
    private route : Router) {
    this.showMobiles()
  }

  ngOnInit(): void {
  }

  showMobiles() {
    this.mobileService.getAllMobiles().subscribe((data) => {
      this.mobileList = data
      this.brands = this.mobileService.getAllBrands()
      this.selectedBrand = "Samsung"
      this.filterByBrand()
      this.showInfoMobile = false
    })
  }

  filterByBrand() {
    this.selectedMobiles = this.mobileList.filter((m, i) => m.brand == this.selectedBrand)
  }

  getInfo(event : any) {
    this.infoMobile = this.mobileList.filter((m, i) => m.id == event.currentTarget.value)[0]
    let isChecked = event.currentTarget.checked
    if (isChecked) {
      this.mobileCartService.addMobileToCart(this.infoMobile)
    } else {
      this.mobileCartService.removeMobileFromCart(event.currentTarget.value)    
    }
    this.refreshMobileCart()
  }

  refreshMobileCart() {
    this.cartTotal = this.mobileCartService.getCartTotal()
    this.showInfoMobile = this.mobileCartService.hasMobiles()
    this.mobileCart = this.mobileCartService.getMobilesInCart()
  }

  removeMobile(id : number) {
    if (confirm("Are you sure you want to remove mobile?")) {
      this.mobileService.deleteMobile(id).toPromise().then((error) => {
        alert("Mobile removed successfully!")
        this.showMobiles()
      })
    }
  }

  showContactDetails() {
    this.route.navigate(["/orderaddress"])
  }
}
