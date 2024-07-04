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

  DemanderGeneartionRapport(username:string,host:string,password:string,driver:string,DB:string,emailTech:string,table:string,columns:any[],condition?:string|null,operateur?:string|null,field?:string|null){
    return this.httpClient.post(`${this.Api}DemandeRapport`,
    {username,host,password,driver,emailTech,DB,table,columns,condition,operateur,field},
    {withCredentials:true})
  }

  getMySources(){
    return this.httpClient.get(`${this.Api}GetMySources`,{withCredentials:true})
  }

  getTablesNames(username:string,host:string,password:string,driver:string,DB:string){
    return this.httpClient.post(`${this.Api}getTables`,{username,host,password,driver,DB})
  }

  getColNames(username:string,host:string,password:string,driver:string,DB:string,table:string){
    return this.httpClient.post(`${this.Api}getColNames`,{username,host,password,driver,DB,table,})
  }





}
