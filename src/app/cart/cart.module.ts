import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    CartPageComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
