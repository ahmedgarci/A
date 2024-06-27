import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../ClientService/client.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-db',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-db.component.html',
  styleUrl: './form-db.component.css'
})
export class FormDBComponent {
  constructor(private clientService:ClientService){}
  host:string="";
  driver:string="";
  username:string="";
  password:string="";
  email:string="";
  table:string ="";
  DB:string="";
  column1:string|null=null
  column2:string|null=null
  column3:string|null=null
  msg:string=""

  SendDemand(){
    this.clientService.DemanderGeneartionRapport(
      this.username,
      this.host,
      this.password,
      this.driver,
      this.DB,
      this.email,
      this.table,
      [this.column1,this.column2,this.column3]
    ).subscribe({
      next:(data)=> console.log(data)   ,
      error:(error)=>console.log(error)
    })
  }
}
