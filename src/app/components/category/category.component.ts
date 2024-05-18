import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../models/category';

import { CategoryService } from '../../services/category.service';
import { ListResponseModel } from '../../models/listResponseModel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})


export class CategoryComponent implements OnInit  {

apiURL="http://localhost:5158/api/Categories/getall"
categories : Category[]= []
currentCategory : Category;


constructor(private categoryServices :CategoryService){}

ngOnInit(): void {
    this.getCategories();
}
getCategories(){
  this.categoryServices.getCategories().subscribe((res) =>{
  this.categories=res.data;
   
  })
}




setCurrentCategory (category: Category ) {
  this.currentCategory=category;
}
getCurrentCategoryClass(category : Category){
  if(category == this.currentCategory){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
}



}




