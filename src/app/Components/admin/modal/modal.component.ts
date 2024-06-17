import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AdminService} from "../AdminServices/admin.service";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  username:string="";
  email:string=""
  password:string=""
  role:string="";
  showModal:boolean=false;

  constructor(private  AdminService:AdminService) {
  }
  openModal(){
    this.showModal=!this.showModal;
  }

  RegisterUser(){
    this.AdminService.addNewUser({email:this.email,
      username:this.username,
      password:this.password,
      Role:this.role})
      .subscribe({
        next:(data)=>console.log(data),
        error:(err)=>console.log(err)
      })
  }

}
