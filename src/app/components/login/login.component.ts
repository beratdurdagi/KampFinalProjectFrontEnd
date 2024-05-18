import { Component, OnInit } from '@angular/core';
import { FormGroup,Validator,FormControl,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent implements OnInit{


  loginForm:FormGroup;


  ngOnInit(): void {
    this.createLoginForm();
  }


 
  constructor(private formBuilder:FormBuilder,private authService : AuthService, private toastrService:ToastrService) {
    
    
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
   if(this.loginForm.valid){

    let userDto=Object.assign({},this.loginForm.value)
    this.authService.Login(userDto).subscribe((res)=>{
      this.toastrService.info(res.message)
      localStorage.setItem("token",res.data.token)
    },
    (error) =>{

      console.log(error)
      this.toastrService.error("Hata ",error.error)
    }
   )
  }else{
        
    this.toastrService.error("this form not valid","Dikkat")
  }

}}
