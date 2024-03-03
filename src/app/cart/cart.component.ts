import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  public get cartService(): CartService {
    return this._cartService;
  }
  public set cartService(value: CartService) {
    this._cartService = value;
  }
  cartItems: Product[] = [];

  constructor(private _cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items: Product[]) => {
      this.cartItems = items;
    });
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }
  checkout() {
    // Navigate to the checkout page
    this.router.navigate(['/checkout']);
  }

}
