import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AdminService} from "../AdminServices/admin.service";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  username:string="";
  email:string=""
  password:string=""
  role:string="";
  error:string|null=null
  constructor(private  AdminService:AdminService) {
  }


  RegisterUser(){
    this.AdminService.addNewUser({email:this.email,
      username:this.username,
      password:this.password,
      Role:this.role})
      .subscribe({
        next:()=>location.reload(),
        error:(err)=>this.error=err.error
      })
  }
}
