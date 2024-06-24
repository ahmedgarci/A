import { Component, OnInit } from '@angular/core';
import { TechnicienService } from '../TechniciensServices/technicien.service';

@Component({
  selector: 'app-generate-report',
  standalone: true,
  imports: [
  ],
  templateUrl: './generate-report.component.html',
  styleUrl: './generate-report.component.css'
})

export class GenerateReportComponent implements OnInit {
  Demands:any=[]
  constructor(private TechService:TechnicienService){}
  ngOnInit(): void {
    this.TechService.getAllClientsReportsDemands().subscribe({
      next:(result)=>console.log(result),
      error:(error)=>console.log(error)
  })}}