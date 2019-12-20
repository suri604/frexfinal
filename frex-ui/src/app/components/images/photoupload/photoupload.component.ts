
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, map } from "rxjs/operators";
import { ImageService } from '../../../services/image.service';
@Component({
  selector: 'app-photoupload',
  templateUrl: './photoupload.component.html',
  styleUrls: ['./photoupload.component.scss']
})
export class PhotouploadComponent implements OnInit {

  imgSrc: string;
  selectedImage: any = null;
  private mymap:any;
  isSubmitted: boolean;
  likedmap= new Map();
  initialmap;
  
  
  
  //this is username
  public username=localStorage.getItem("username");
  //
  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required),
    // userid: new FormControl('') 
    
  })
  
  constructor(private storage: AngularFireStorage, private service: ImageService) {
    

   }

  ngOnInit() {
    this.likedmap.set("santosh",true);
    this.initialmap=JSON.stringify(Array.from(this.likedmap.entries()));
    this.resetForm();
   // this.formTemplate.patchValue({userid:'ramesh'});
   
  //  console.log(document.getElementById('hello'));
  console.log(this.username);
  console.log("ngonit");

// JS is to make the text editable fot demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier! 
var h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});
   
   
  }
  

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      
    }
    else {
      this.imgSrc = '/assets/undraw_upload_image_iwej.svg';
      this.selectedImage = null;
    }
  }


  onSubmit(formValue) {
    this.isSubmitted = true;
    // console.log(formValue);
  
    //this.myMap=formValue;
formValue.userid=this.username;

formValue.likedby=this.initialmap;
console.log(this.username);
formValue.like=0;
    // formValue[user]="";
    this.mymap=formValue;
    // console.log(this.mymap);
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            // this.testingurl=url;
            
            
            formValue['imageUrl'] = url;
             
            this.service.insertImageDetails(formValue);
            this.resetForm();

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
    this.imgSrc = '/assets/undraw_upload_image_iwej.svg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
}
