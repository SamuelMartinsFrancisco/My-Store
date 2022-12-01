import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';  // https://angular.io/api/forms/FormBuilder
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    /*console.warn('Your order has been submitted',
                  this.checkoutForm.value);*/
    window.alert(`${this.checkoutForm.value.name}, your order has been submitted`);
    this.checkoutForm.reset();
  }
}
