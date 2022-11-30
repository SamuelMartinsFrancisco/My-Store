import { HttpClientModule } from '@angular/common/http';   // https://angular.io/api/common/http/HttpClientModule
import { NgModule } from '@angular/core';                  // https://angular.io/api/core/NgModule
import { BrowserModule } from '@angular/platform-browser'; // https://angular.io/api/platform-browser/BrowserModule
import { ReactiveFormsModule } from '@angular/forms';      // https://angular.io/api/forms/ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
