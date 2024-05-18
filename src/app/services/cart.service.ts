import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  addToCart(product :Product) {
    let item =CartItems.find((p) =>p.Product.productId==product.productId);

    if (item) {
      item.quantity +=1
      
    }else{
      let cartItem =new CartItem(); 

      cartItem.Product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(product:Product){
    let item:CartItem | undefined =CartItems.find((p)=>p.Product.productId=product.productId)

    CartItems.splice(CartItems.indexOf(item),1)

  }

  list(): CartItem[]{
    
    return CartItems;

    console.log("Listed Cart",CartItems)
  }


  
}
