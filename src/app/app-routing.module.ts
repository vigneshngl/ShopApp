import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobilesComponent } from './mobiles/mobiles.component';
import { AddMobileRFComponent } from './add-mobile-rf/add-mobile-rf.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderManagementComponent } from './order-management/order-management.component';


const routes: Routes = [
  {path: "", component: MobilesComponent},
  {path: "mobiles", component: MobilesComponent},
  {path: "mobiles/add", component: AddMobileRFComponent},
  {path: "mobiles/update/:id", component: UpdateMobileComponent},
  {path: "orderaddress", component: ContactDetailsComponent},
  {path: "ordersummary/:id", component: OrderSummaryComponent},
  {path: "ordermanagement/:id", component: OrderManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
