import { Component, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {ClientService} from "../client/ClientService/client.service";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FormDBComponent } from './form-db/form-db.component';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [PdfViewerModule,CommonModule,MatButtonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(private ClientService:ClientService,private dialog:MatDialog){
//      this.pdfsrc = 'http://localhost:8080/public/uploads/example-6672ac530f438.pdf';
}

  Reports:Array<any>=[];

  ngOnInit(): void {
     this.ClientService.getMyReports().subscribe({
      next:(response:any)=> this.Reports = [...response],
      error:(errorResponse)=> console.log(errorResponse)


     })
  }

  openDialog(): void {
    this.dialog.open(FormDBComponent);
  }





}
