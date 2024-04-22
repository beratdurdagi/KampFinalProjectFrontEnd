import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductList } from '../../models/productList';
import { CategoryList } from '../../models/categoryList';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {


  products :Product[]=[]
  response:ProductList ={
    data :this.products,
    message:"",
    success:true
  };
constructor(private productService :ProductService ){}

ngOnInit(): void {
   this.getProducts();
  
}
dataLoaded :Boolean = false

trackById(index: number, product: any): any {
  return product.productId; // Assuming 'id' is the unique identifier for each category
}

getProducts() : void {

  this.productService.getProducts().subscribe((response) => {

    console.log(response)
     this.products =response.data;
     this.dataLoaded=true;
  });
}

}

