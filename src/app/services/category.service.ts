import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList } from '../models/productList';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { CategoryList } from '../models/categoryList';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http :HttpClient ) { }

  apiUrl :string ="http://localhost:5158/api/Categories/GetAll";



  getCategories() :Observable<CategoryList> {

    return this.http.get<CategoryList>(this.apiUrl);
  } 

} 
