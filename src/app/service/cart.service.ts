import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.cartItems);
  cart$ = this.cartSubject.asObservable();

  constructor() { }

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
    console.log(this.cartItems);
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next(this.cartItems);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotal(): number {
    return this.cartItems.reduce((total, product) => total + product.price, 0);
  }

  clearCart() {
    // Clear the cart by resetting the cartItems array to an empty array
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  isEmpty(): boolean {
    return this.cartItems.length === 0;
  }
}
