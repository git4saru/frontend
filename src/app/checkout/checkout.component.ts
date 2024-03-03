import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    // Check if the cart is empty, redirect to the user dashboard if it's empty
    if (this.cartService.getCartItems().length === 0) {
      this.router.navigate(['/user-dashboard']);
    }
  }

  checkout(): void {
    // Clear the cart and show a message
    this.cartService.clearCart();
    alert('Your order is successfully done!');
    // Redirect the user to the user dashboard after successful checkout
    this.router.navigate(['/user-dashboard']);
  } 
}
