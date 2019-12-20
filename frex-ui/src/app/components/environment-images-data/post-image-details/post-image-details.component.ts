import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { EnvironmentImageService } from 'src/app/services/environment-image.service';
import { EnvironmentTicketService } from 'src/app/services/environment-ticket.service';
import { finalize } from "rxjs/operators";
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-image-details',
  templateUrl: './post-image-details.component.html',
  styleUrls: ['./post-image-details.component.scss']
})
export class PostImageDetailsComponent implements OnInit {
  public username = localStorage.getItem('username');
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;
  demoDate = new Date()
  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required, Validators.minLength[10]),
    category: new FormControl('',Validators.required),
    imageUrl: new FormControl('', Validators.required)
  })

  // tslint:disable-next-line: max-line-length
  constructor(private storage: AngularFireStorage, private service: EnvironmentImageService ,private formBuilder: FormBuilder, private ticketService: EnvironmentTicketService, private snackBar: MatSnackBar, private router: Router) { }
  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '../../../assets/up.svg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    formValue.userid=this.username;
    console.log(this.username);
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            // formValue['imageUrl'] = url;
            // this.service.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
    this.snackBar.open('Successfully uploaded, please fill the form too','ok',{duration: 2000});

  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      category: 'other'
    });
    this.imgSrc = '../../../assets/up.svg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  selectedFile: any;
  submitted = false;
  form = new FormGroup({
    ticketNumber: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required , Validators.maxLength[4]),
    date: new FormControl('', Validators.required),
    distance: new FormControl('', Validators.required, Validators.maxLength[4])
  })

  Submit() {
 // stop here if form is invalid
 if (this.form.invalid) {
  return;
}
 this.submitted = true;
 this.ticketService.saveTicket(  this.form.value.ticketNumber, this.form.value.price,
                                    this.form.value.date, this.form.value.distance, this.username)
    .subscribe( data => {
      console.log(data);
  });
 this.snackBar.open('Wait for few moments, You will be surely rewarded','ok',{duration: 1000});
}
  get f() { return this.form.controls; }

  onReset() {
    this.submitted = false;
    this.form.reset();
}

finalSubmit(formValue){
  this.Submit();
  this.onSubmit(formValue);

}
back(){
  this.router.navigate(['/environment/main']).then(null);
}
finalReset() {
  this.resetForm();
  this.onReset();
}



}
