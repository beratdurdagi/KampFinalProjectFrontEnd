import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../models/LoginDto';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { AuthResponseModel } from '../models/authResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResonseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient ) { }

  apiUrl :string ="http://localhost:5158/api/Auth/";



  Login(userLoginDto:LoginDto): Observable<SingleResponseModel<AuthResponseModel>>{

    return this.http.post<SingleResponseModel<AuthResponseModel>>(this.apiUrl+"login",userLoginDto)

  }


  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false
    }
  }
}
