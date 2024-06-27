import { Routes } from '@angular/router';
import {AuthComponent} from "./Components/Authentication/auth/auth.component";
import {AdminComponent} from "./Components/admin/AdminMain/admin.component";
import {TechComponent} from "./Components/Techniciens/tech/tech.component";
import { ClientComponent } from './Components/client/client.component';
import { AuthGuard } from './Guards/auth-guard.guard';

export const routes: Routes = [
  {path:'home', component:AuthComponent},
  {path:'Admin',component:AdminComponent},
  {path:'Techniciens/:subpage',component:TechComponent},
  {path:'Client',component:ClientComponent},
  { path: '**', redirectTo: '/home' }
];


