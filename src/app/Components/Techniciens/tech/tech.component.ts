import { Component } from '@angular/core';
import {PublishFormComponent} from "../publish-form/publish-form.component";
import {CommonModule} from "@angular/common";
import { GenerateReportComponent } from '../generate-report/generate-report.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [
    PublishFormComponent,
    CommonModule,
    GenerateReportComponent,
    RouterLink
  ],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {
  showPublishForm:boolean=false;
  showGenerateReport:boolean= false
  setshowPublishForm(){
    this.showPublishForm=!this.showPublishForm
  }
  setshowGenerateReport(){
    this.showGenerateReport =!this.showGenerateReport;
  }

}
