import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing/home-routing.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
