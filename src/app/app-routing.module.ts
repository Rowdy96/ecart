import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    title: 'Ecart | Home Page'
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    title: 'Ecart | List Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
