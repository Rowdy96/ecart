import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

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
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Ecart | Signup Page'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Ecart | Login Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
