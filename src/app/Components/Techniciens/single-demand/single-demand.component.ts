import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { TechnicienService } from '../TechniciensServices/technicien.service';

@Component({
  selector: 'app-single-demand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-demand.component.html',
  styleUrl: './single-demand.component.css'
})
export class SingleDemandComponent {
  @Input()
  singleDemande:any;
  BackEndResponse:any=null;
  BackEndError:string|null=null;
  TechnicianService = inject(TechnicienService);

  Generate(){
    this.TechnicianService.GenerateReport(this.singleDemande).subscribe({
      next:()=>{
              location.reload();
            },
            error: (error) => console.error(error)
          });
        }

}
