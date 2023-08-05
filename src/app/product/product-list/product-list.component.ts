import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  slug : string = '';
  productList : Product[] = [];
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.slug = routeParams['slug'];
      this.loadCategoryProducts(this.slug);
    });
  }

  loadCategoryProducts(slug: string) : void {
    this.isLoading = true;
    this.productService.getCategoryProducts(slug).subscribe(reponse => {
      this.productList = reponse;
      this.isLoading = false;
    });
  }

}
