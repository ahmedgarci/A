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
  error:string|null="";
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
        next: (response) => console.log(response),
        error: (errorResponse) =>this.error= errorResponse.error
      });
    }
  }
  downloadFile() {
    this.technicienService.downloadFile().subscribe({
      next: (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        console.log(response)
        saveAs(blob, 'example.pdf');
        console.log("Download successful");
      },
      error: (error) => console.error('Error downloading the PDF', error)
    });
  }

}
