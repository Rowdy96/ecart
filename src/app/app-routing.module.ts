import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { authGuard, loginGuard } from './route-guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [authGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Ecart | Signup Page',
    canActivate: [loginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Ecart | Login Page',
    canActivate: [loginGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Ecart | Page not found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
