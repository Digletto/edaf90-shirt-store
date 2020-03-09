import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviousorderComponent } from './PreviousOrder/previousOrder.component';
import { HomeComponent } from './Home/home.component';
import { CheckoutComponent } from './Checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviousorderComponent,
    HomeComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
