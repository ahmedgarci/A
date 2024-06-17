import { Component } from '@angular/core';
import {PublishFormComponent} from "../publish-form/publish-form.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [
    PublishFormComponent,
    CommonModule
  ],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {
  showPublishForm:boolean=false;

  setshowPublishForm(){
    this.showPublishForm=!this.showPublishForm
  }
}
