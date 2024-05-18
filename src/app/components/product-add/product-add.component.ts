import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { AddProductDto } from '../../models/addProductDto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
/**
 *
 */

export class ProductAddComponent implements OnInit {

  productAddForm :FormGroup;
  ngOnInit(): void {
    this.createProductAddForm();
  }

  constructor(private formBuilder:FormBuilder,private productService:ProductService,private toastrService:ToastrService
  ) {
  }


  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      categoryId:  ["",
        Validators.required],
      productName :["", Validators.required ],
      unitInStock :["", Validators.required ],
      unitPrice :["", Validators.required ],


    })
  }


  addProduct() {
    
    if(this.productAddForm.valid){
      const product=Object.assign({},this.productAddForm.value)  
    
      this.productService.addProduct(product).subscribe((res) => {
        this.toastrService.success("Success","Success")
        console.log("Product Eklendi:"+ res)
        // "Product Added" mesajını burada işleyebilirsiniz
      },
      (error) => {
       this.toastrService.error("Invalid request","error")
        console.log("Hata",error)
        // Hata durumunda yapılacak işlemleri burada işleyebilirsiniz
    })
      }else{
        
        this.toastrService.error("this form not valid","Dikkat")
      }
    
    }
     
    } 
  
  



  
