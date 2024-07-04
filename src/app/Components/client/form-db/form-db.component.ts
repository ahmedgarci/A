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
  error:string=""

  isLoading:boolean=false

  condition:string|null=null;
  field:string|null=null;
  operation:string|null=null;



  allTables:Array<string>|null=null
  allColNames:Array<string>|null=null;
  ColumnsChoosed:Array<string>=[]

  SendDemand(){
    this.clientService.DemanderGeneartionRapport(
      this.username,
      this.host,
      this.password,
      this.driver,
      this.DB,
      this.email,
      this.table,
      this.ColumnsChoosed,
      this.condition,
      this.operation,
      this.field
      ).subscribe({
      next:()=> this.msg = " Demande envoyé "  ,
      error:(errorObject)=> this.error = errorObject.error
    })
  }


  HandleGetTables(){
    this.isLoading=true
    return this.clientService.getTablesNames(this.username,this.host,this.password,this.driver,this.DB).subscribe({
      next:(TableNames:any)=>this.allTables = TableNames,
      error:()=>{
        this.error = " Verify Database Credentials "
        this.allTables = null
        this.allColNames = null
      },
      complete:()=>{
        this.isLoading = false
        this.error=""
      }
      })
  }

  HandleGetColNames(event:Event){
    this.isLoading=true
  let selected = (event.target as HTMLSelectElement).value;
    if(selected){
      this.clientService.getColNames(this.username,this.host,this.password,this.driver,this.DB,selected).subscribe({
        next:(data:any)=>{
          this.allColNames=data
          this.table = selected
        },
        error:(error)=>console.log(error),
        complete:()=>{
          this.isLoading=false
          this.error=""
        }
      })
    }
  }

    onCheckboxChange($event:any,col:string){
      if($event.target.checked){
        this.ColumnsChoosed.push(col)
      }
    }











}
