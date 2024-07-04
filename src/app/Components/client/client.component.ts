import { Component, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {ClientService} from "../client/ClientService/client.service";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FormDBComponent } from './form-db/form-db.component';
import { LogoutComponent } from '../Authentication/auth/logout/logout.component';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [PdfViewerModule,CommonModule,MatButtonModule,LogoutComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  BackendApi="http://localhost:8080/reports/";
  constructor(private ClientService:ClientService,private dialog:MatDialog){}
  Reports:Array<any>=[];


  ngOnInit(): void {
     this.ClientService.getMyReports().subscribe({
      next:(response:any)=>{

       this.Reports = [...response]},
      error:(errorResponse)=> console.log(errorResponse)
     })
  }

  openDialog(): void {
    this.dialog.open(FormDBComponent);
  }





}
