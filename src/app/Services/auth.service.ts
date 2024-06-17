import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private BackUrl:string = "http://localhost:8080/auth"
  constructor(private HttpClient:HttpClient) { }

  LoginUser(email:string,password:string):Observable<any>{
   return this.HttpClient.post(this.BackUrl,{"email":email,"password":password},{withCredentials:true})
  }


}
