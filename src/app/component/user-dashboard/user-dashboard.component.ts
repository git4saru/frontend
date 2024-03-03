import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service'; // Import ProductService

import { Product } from '../../model/product';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private route: Router, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }


  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
