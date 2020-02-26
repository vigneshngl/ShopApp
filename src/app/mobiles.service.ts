import { Injectable } from '@angular/core';
import { Mobile } from 'src/classes/Mobile';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  brands : string[] = ["Samsung", "IPhone", "Oppo"]
  private mobileList : Mobile[] = []
  private mobileURL : string = "http://localhost:3001/mobiles"

  constructor(private httpClient: HttpClient) { }

  addNewMobile(newMobile: Mobile) {
    return this.httpClient.post(this.mobileURL, newMobile)
  }

  updateMobile(existingMobile : Mobile) {
    return this.httpClient.put(`${this.mobileURL}/${existingMobile.id}`, existingMobile)
  }

  deleteMobile(id : number) {
    return this.httpClient.delete(`${this.mobileURL}/${id}`)
  }

  getAllMobiles() {
    return this.httpClient.get<Mobile[]>(this.mobileURL)
  }

  getAllBrands() {
    return this.brands
  }
}
