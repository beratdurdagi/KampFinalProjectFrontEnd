import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryList } from '../../models/categoryList';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit  {


http =inject(HttpClient)
apiURL="http://localhost:5158/api/Categories/getall"
categories : Category[]= []
trackById(index: number, category: Category): number {
  return category.categoryId; // Varsayılan olarak, ürünlerin her birinin bir 'id' özelliği olduğunu varsaydık
}

response : CategoryList ={data:this.categories,success:true,message:""}
constructor(private categoryServices :CategoryService){}

ngOnInit(): void {
    this.getCategories();
}
getCategories(){
  this.categoryServices.getCategories().subscribe((res) =>{
  this.response=res;
   
  })
}
}




