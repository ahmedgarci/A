import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TechnicienService } from '../TechniciensServices/technicien.service';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-publish-form',
  standalone: true,
  imports: [FormsModule,
  CommonModule],
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.css']
})
export class PublishFormComponent {
  file: File | null = null;
  title: string = '';
  email: string = '';
  msg:string|null=null;
  constructor(private technicienService: TechnicienService
              ) {}

  handleUploadFile(event: any) {
    const files = event.target.files;
    if (files.length !== 1) { return; }
    this.file = files[0];
  }

  publish() {
    if (this.file) {
      const formData: FormData = new FormData();
      formData.append('file', this.file);
      formData.append('title', this.title);
      formData.append('email', this.email);

      this.technicienService.PublishReport(formData).subscribe({
        next: (response:any) => this.msg = response,
        error: (error) => this.msg = error.error
      });
    }
  }

  }


