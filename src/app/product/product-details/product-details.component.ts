import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  id: number = 0;

  productDetails: Product = new Product();

  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {

  }
  
  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.id = Number(routeParams['id']);
      this.loadProductDetails(this.id);
    })
  }

  loadProductDetails(id: number){
    this.isLoading = true;
    this.productService.getProductById(id).subscribe(response => {
       this.productDetails = response;
       console.log(this.productDetails)
       this.isLoading = false;
    });
  }
}
