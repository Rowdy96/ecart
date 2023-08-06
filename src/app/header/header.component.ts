import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  categories: string [] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private authService: AuthenticationService
  ){}

  get isLoggedInUser(){
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe(response => {
      this.categories = response;
    });
  }

  goToPage(route: string): void{
    this.router.navigateByUrl(`/${route}`);
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
