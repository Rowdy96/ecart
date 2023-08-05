import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
