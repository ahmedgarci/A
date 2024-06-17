import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AdminService} from "../AdminServices/admin.service";
import  {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  users:any[]|null=null;
  constructor(private AdminService:AdminService) {
  }
  getData(){
    this.AdminService.getUsers().subscribe({
      next: (data) => this.users =[...data.Clients, ...data.Techs],
      error: (error) => console.log(error)
    })
  }

  ngOnInit() {
    this.getData();
  }

  delete(id:number){
    this.AdminService.deleteUser(id).subscribe({
      next:(data)=>console.log(data),
      error:(err)=>console.log(err)
    })
  }




  protected readonly console = console;
}
