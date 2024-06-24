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
  msg:string=""

  SendDemand(){
    this.clientService.DemanderGeneartionRapport(
      this.username,
      this.host,
      this.password,
      this.driver,
      this.DB,
      this.email
    ).subscribe({
      next:()=>this.msg = `Demende envoyé a ${this.email}`   ,
      error:(error)=>console.log(error)
    })
  }
}
