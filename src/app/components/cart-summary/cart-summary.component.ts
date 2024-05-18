import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit  {

   cartItems:CartItem[] =[];

   constructor(private cartService:CartService){}

   ngOnInit() : void {
    this.listToCart();
   }

   listToCart()  {

    this.cartItems= this.cartService.list();
    
    

   }

   removeFromCart(product: Product){
    this.cartService.removeFromCart(product)
   }

}
