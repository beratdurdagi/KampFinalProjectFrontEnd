import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { AddProductDto } from '../models/addProductDto';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient ) { }

  apiUrl :string ="http://localhost:5158/api/Products";



  getProducts() :Observable<ListResponseModel<Product>> {

    let newPath =this.apiUrl+"/GetAll"

    return this.http.get<ListResponseModel<Product>>(newPath);
  } 
 

  getProductsByCategory(categoryId:number) :Observable<ListResponseModel<Product>> {
    let newPath =this.apiUrl+"/getbycategory?categoryId="+categoryId
    return this.http.get<ListResponseModel<Product>>(newPath);
  } 

  addProduct(product:Product):Observable<ResponseModel> {

 
    return this.http.post<ResponseModel>(this.apiUrl+"/add",product,{responseType:"json"})

  }
} 
