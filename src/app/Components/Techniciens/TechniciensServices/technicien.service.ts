import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {
  private ApiEndpoint: string = 'http://localhost:8080/Techniciens/';

  constructor(private httpClient: HttpClient) {}

  PublishReport(formData: FormData) {
    return this.httpClient.post(`${this.ApiEndpoint}PublishReport`, formData, {
      withCredentials: true
    });
  }

  CreateNewDataSource(formData:FormData){
    return this.httpClient.post(`${this.ApiEndpoint} createNewDataSource `,formData,{
      withCredentials:true
    });
  }

  getAllClientsReportsDemands(){
    return this.httpClient.get( `${this.ApiEndpoint}showDemands`,{withCredentials:true})
    }

    GenerateReport(DBInfo:any){
      return this.httpClient.post(`${this.ApiEndpoint}GenererRapportAvecDB`,{DBInfo},{
        withCredentials:true
      },
      )
    }



  }
