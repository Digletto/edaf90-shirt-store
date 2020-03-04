import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './Checkout/checkout.component';
import { PreviousorderComponent } from './PreviousOrder/previousOrder.component'
import { Shop } from './Shop/shop.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'previousorder', component: PreviousorderComponent},
  {path: 'shop', component: Shop},
  {path: 'appcomponent', component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
