import { Component} from '@angular/core';
import { PublishFormComponent } from "../publish-form/publish-form.component";
import { CommonModule } from "@angular/common";
import { GenerateReportComponent } from '../generate-report/generate-report.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { LogoutComponent } from '../../Authentication/auth/logout/logout.component';
@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [
    PublishFormComponent,
    CommonModule,
    GenerateReportComponent,
    RouterLink,
    LogoutComponent
  ],
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {
  constructor(private route: ActivatedRoute) {}
  setActiveRoute(): string {
    let subpage: string = this.route.snapshot.params['subpage'];
    if (!subpage || subpage === undefined) {
      subpage = 'Demandes';
    }
    return subpage;
  }

  setActiveClass(Page:string) : string {
    let subpage: string = this.setActiveRoute();
    let style: string = " text-white py-3 text-center w-[200px] rounded-md";
    return subpage=== Page ? `${style} bg-sky-500`: `${style} bg-black` ;
  }
}

