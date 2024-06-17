import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import  {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url:string = "http://localhost:8080/Admin";
  constructor(private HttpClient:HttpClient) { }

  getUsers():Observable<any>{
    return this.HttpClient.get(this.url,{withCredentials:true})
  }

  deleteUser(id:number):Observable<any>{
    return this.HttpClient.delete(this.url+"/delete/"+id,{withCredentials:true})
  }

  addNewUser(user:{email:string,password:string,username:string,Role:string}){
    return this.HttpClient.post(this.url+"/newUser", user,{withCredentials:true})
  }








}
