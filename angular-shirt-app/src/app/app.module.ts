import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviousorderComponent } from './PreviousOrder/previousOrder.component';
import { HomeComponent } from './Home/home.component';
import { CheckoutComponent } from './Checkout/checkout.component';
import { Shop } from './Shop/shop.component';
import { WiktionarySearchComponent } from './wiktionary-search/wiktionary-search.component';



@NgModule({
  declarations: [
    AppComponent,
    PreviousorderComponent,
    HomeComponent,
    CheckoutComponent,
    Shop,
    WiktionarySearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ 

  constructor() {


    localStorage.setItem("tshirts", JSON.stringify([]))
    localStorage.setItem("orders", JSON.stringify([]))


  }






}
