import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AdminService} from "../AdminServices/admin.service";
import  {ModalComponent} from "../modal/modal.component";
import {MatButtonModule} from '@angular/material/button';
import {  MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    MatButtonModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  users:any[]=[];
  constructor(private AdminService:AdminService,private dialog:MatDialog) {
  }
  getData(){
    this.AdminService.getUsers().subscribe({
      next: (data) => this.users =[...data.Clients, ...data.Techs] ?? [],
      error: (error) => console.log(error)
    })
  }

  ngOnInit() {
    this.getData();
  }

  delete(id:number){
    this.AdminService.deleteUser(id).subscribe({
      next:()=> this.users=this.users?.filter(user=>user.id !== id),
      error:(err)=>console.log(err)
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent);
    console.log(dialogRef);
  }

  protected readonly console = console;
}
