import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http :HttpClient ) { }

  apiUrl :string ="http://localhost:5158/api/Categories/GetAll";



  getCategories() :Observable<ListResponseModel<Category>> {

    return this.http.get<ListResponseModel<Category>>(this.apiUrl);
  } 

} 
