import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {CertificateService} from '../../shared/certificate.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  certificateSrc: string;
  selectedCertificate: any = null;
  isSubmitted: boolean;

  constructor(private storage: AngularFireStorage, private service: CertificateService) { }

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    certificateUrl: new FormControl('', Validators.required)
  });

  ngOnInit() {
    this.resetForm();
  }


  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.certificateSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedCertificate = event.target.files[0];
    } else {
      this.certificateSrc = '/assets/img/image_placeholder.png';
      this.selectedCertificate = null;
    }
  }


  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {

      // tslint:disable-next-line:prefer-const
      let filePath = `${formValue.category}/${this.selectedCertificate.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedCertificate).snapshotChanges().pipe(
        finalize(() => {

          fileRef.getDownloadURL().subscribe((url) => {formValue.certificateUrl = url;
                                                       this.service.insertCertificateDetails(formValue);
                                                       this.resetForm();
          });
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate.controls;
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      certificateUrl: '',
      category: 'Public Health'
    });
    this.certificateSrc = ' /assets/img/image_placeholder.png';
    this.selectedCertificate = null;
    this.isSubmitted = false;
  }


}
