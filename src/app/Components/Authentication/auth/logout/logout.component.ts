import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../../Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  private AuthService:AuthService = inject(AuthService)
  private Router:Router = inject(Router);

  HandleLogout(){
    this.AuthService.logoutUser().subscribe({
      next:()=>this.Router.navigateByUrl('/home'),
      error:(error)=>console.log(error)
    })
  }

}
