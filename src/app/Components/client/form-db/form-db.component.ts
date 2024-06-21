import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../ClientService/client.service';
@Component({
  selector: 'app-form-db',
  standalone: true,
  imports: [FormsModule],
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
  SendDemand(){
    this.clientService.DemanderGeneartionRapport(
      this.host,
      this.driver,
      this.username,
      this.password,
      this.email,
      this.DB
    ).subscribe({
      next:(response)=>console.log(response),
      error:(error)=>console.log(error)
    })
  }
}
