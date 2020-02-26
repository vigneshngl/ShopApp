import { Injectable } from '@angular/core';
import { Mobile } from 'src/classes/Mobile';

@Injectable({
  providedIn: 'root'
})
export class MobilecartService {

  private mobileCart : Mobile[] = []

  constructor() { }

  getMobilesInCart() {
    return this.mobileCart
  }

  addMobileToCart(newMobile : Mobile) {
    this.mobileCart.push(newMobile)
  }

  removeMobileFromCart(mobileId : number) {
    let index = this.mobileCart.indexOf(this.mobileCart.filter((m, i) => m.id == mobileId)[0])
    this.mobileCart.splice(index, 1)
  }

  getCartTotal() {
    return this.mobileCart.reduce((pv, cv) => { return pv += (cv.price * cv.quantity) }, 0)
  }

  hasMobiles() {
    return this.mobileCart.length > 0
  }
}
