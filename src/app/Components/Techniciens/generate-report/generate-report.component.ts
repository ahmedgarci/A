import { Component, OnInit } from '@angular/core';
import { TechnicienService } from '../TechniciensServices/technicien.service';
import { CommonModule } from '@angular/common';
import { SingleDemandComponent } from '../single-demand/single-demand.component';

@Component({
  selector: 'app-generate-report',
  standalone: true,
  imports: [
    CommonModule,
    SingleDemandComponent
  ],
  templateUrl: './generate-report.component.html',
  styleUrl: './generate-report.component.css'
})

export class GenerateReportComponent implements OnInit {
  Demands:Array<any>=[];
  constructor(private TechService:TechnicienService){}
  ngOnInit(): void {
    this.TechService.getAllClientsReportsDemands().subscribe({
      next:(result:any)=>{
        this.Demands = JSON.parse(result)
      },
      error:(error)=>console.log(error)
    })
  }






}
