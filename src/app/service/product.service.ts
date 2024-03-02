import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3008'; // Adjust the URL based on your backend server

  constructor(private http: HttpClient) { }

  // Create a new product
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/product`, product);
  }

  // Get a product by ID
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/product/${id}`);
  }

  // Update a product
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/product/${product.id}`, product);
  }

  // Delete a product by ID
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/product/${id}`);
  }

  // Get all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
}
