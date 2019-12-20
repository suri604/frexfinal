import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  private mymap:any;
  isSubmitted: boolean;
  
  testingurl="https://indiarailinfo.com/search/sbc-ksr-bengaluru-city-junction-bangalore-to-vsg-vasco-da-gama/136/0/512";
  //this is username
  username="ch";
  //
  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required),
    // userid: new FormControl('') 
    
  })
  
  constructor(private storage: AngularFireStorage, private service: ImageService) { }

  ngOnInit() {
    this.resetForm();
   // this.formTemplate.patchValue({userid:'ramesh'});
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      console.log("this is for the preview");
    }
    else {
      this.imgSrc = '/assets/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }


  onSubmit(formValue) {
    this.isSubmitted = true;
    console.log(formValue);
  
    //this.myMap=formValue;
formValue.userid='chal_gaya';
formValue.like=0;
    // formValue[user]="";
    this.mymap=formValue;
    console.log(this.mymap);
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.testingurl=url;
            
            console.log("submit try");
            formValue['imageUrl'] = url;
             
            this.service.insertImageDetails(formValue);
            this.resetForm();
            console.log("after putting it in the database");
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      category: 'Animal'
    });
    this.imgSrc = '/assets/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}