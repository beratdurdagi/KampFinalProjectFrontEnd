import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList } from '../models/productList';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient ) { }

  apiUrl :string ="http://localhost:5158/api/Products/GetAll";



  getProducts() :Observable<ProductList> {

    return this.http.get<ProductList>(this.apiUrl);
  } 

} 
