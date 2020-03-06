import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { CheckoutComponent } from './Checkout/checkout.component';
import { PreviousorderComponent } from './PreviousOrder/previousOrder.component'
import { Shop } from './Shop/shop.component';


const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: '', component: HomeComponent},
  {path: 'previousorder', component: PreviousorderComponent},
  {path: 'shop', component: Shop},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
