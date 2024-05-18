
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ListResponseModel } from '../../models/listResponseModel';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  currentProduct:Product;
  products :Product[]=[]
  dataLoaded :Boolean = false
  filterText :"";
  
  
constructor(private productService :ProductService,private activatedRoute: ActivatedRoute,private toastr: ToastrService ,
  private cartService:CartService
){}

ngOnInit(): void {

  this.activatedRoute.params.subscribe(params =>{
    if(params["categoryId"]){
      this.getProductsByCategory(params["categoryId"])
    }else{
      this.getProducts();
    }
  })
}


getProductsByCategory(categoryId : number) : void {


  this.productService.getProductsByCategory(categoryId).subscribe((response) => {

  console.log(response)
   this.products =response.data;
   this.dataLoaded=true;
});
}

getProducts() : void {

  this.productService.getProducts().subscribe((response) => {
   this.products =response.data;
   this.dataLoaded=true;
});
}


addToCart(product:Product) {

  try {
    this.cartService.addToCart(product)
    this.toastr.success("Sepete Eklendi",product.productName)
  } catch (error) {
    this.toastr.error("error",String(error))
    
  }
 
  
}


}





