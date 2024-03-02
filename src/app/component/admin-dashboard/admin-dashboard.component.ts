import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    // Load products when the component initializes
    this.loadProducts();
  }

  loadProducts(): void {
    // Call the ProductService to fetch products
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  saveChanges(product: Product): void {
    // Call the ProductService to update product
    this.productService.updateProduct(product).subscribe(() => {
      console.log('Product updated successfully');
    }, error => {
      console.error('Error updating product:', error);
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']); // Navigate to the home page after logout
  }
}
