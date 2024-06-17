import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";
import {AuthService} from "../../../Services/auth.service";
import {Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  email:string="";
  password:string="";
  error:string|null=null;
  constructor(private authService:AuthService,private router:Router ) {}


  LogUser() {
    this.authService.LoginUser(this.email,this.password).subscribe({
      next: (response)=> console.log(response),
      error: (errorObject:any)=>console.log(errorObject)
    })

  }

  protected readonly AuthService = AuthService;

}
