import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  getCategoryProducts(slug: string): Observable<Product[]>{
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${slug}`);
  }

  getProductById(id: number){
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
}
