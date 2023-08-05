import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { 
    path: ':slug',  
    component: ProductListComponent 
  },
  { 
    path: ':slug/:id', 
    component: ProductDetailsComponent,
    title: 'Ecart | Detials' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
