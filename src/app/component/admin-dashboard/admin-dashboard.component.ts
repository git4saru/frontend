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
  newProduct: Product = {
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: null
  };

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  saveChanges(product: Product): void {
    this.productService.updateProduct(product).subscribe(() => {
      console.log('Product updated successfully');
    }, error => {
      console.error('Error updating product:', error);
    });
  }

  addProduct(): void {
    this.productService.createProduct(this.newProduct).subscribe(
      (response: Product) => {
        console.log('Product added successfully:', response);
        this.loadProducts(); // Reload products after successful addition
        this.resetNewProduct(); // Reset form fields
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }

  resetNewProduct(): void {
    this.newProduct = {
      title: '',
      description: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
      thumbnail: '',
      images: null
    };
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']); // Navigate to the home page after logout
  }
}
