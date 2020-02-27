import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ZoomDirective } from './zoom.directive';
import { MobilecartService } from './mobilecart.service';
import { AddmobileComponent } from './addmobile/addmobile.component';
import { MobilesService } from './mobiles.service';
import { AddMobileRFComponent } from './add-mobile-rf/add-mobile-rf.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactService } from './contact.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { TaxPipe } from './tax.pipe';
import { SalaryChartComponent } from './salary-chart/salary-chart.component';
import { SalaryChartService } from './salary-chart.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    MobilesComponent,
    ZoomDirective,
    AddmobileComponent,
    AddMobileRFComponent,
    UpdateMobileComponent,
    ContactDetailsComponent,
    OrderSummaryComponent,
    OrderManagementComponent,
    TaxPipe,
    SalaryChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MobilesService, 
    MobilecartService, 
    ContactService,
    SalaryChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
