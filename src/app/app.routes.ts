import { Routes } from '@angular/router';
import {AuthComponent} from "./Components/Authentication/auth/auth.component";
import {AdminComponent} from "./Components/admin/AdminMain/admin.component";
import {TechComponent} from "./Components/Techniciens/tech/tech.component";
export const routes: Routes = [
  {path:'home', component:AuthComponent},
  {path:'Admin',component:AdminComponent},
  {path:'Techniciens',component:TechComponent}
];


