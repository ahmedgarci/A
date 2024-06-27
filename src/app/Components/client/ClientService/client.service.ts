import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  private Api:string = "http://localhost:8080/Client/"

  getMyReports(){
    return this.httpClient.get(`${this.Api}GetMyReports`,{withCredentials:true})
  }

  DemanderGeneartionRapport(username:string,host:string,password:string,driver:string,DB:string,emailTech:string,table:string,Port:number,columns:any[]){
    return this.httpClient.post(`${this.Api}DemandeRapport`,
    {username,host,password,driver,emailTech,DB,table,Port,columns},
    {withCredentials:true})
  }

  getMySources(){
    return this.httpClient.get(`${this.Api}GetMySources`,{withCredentials:true})
  }


}
