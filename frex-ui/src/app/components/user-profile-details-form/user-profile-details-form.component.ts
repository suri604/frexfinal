import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../../services/user-service.service';
import {User} from '../../util/user';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {FirebaseApp, FirebaseNameOrConfigToken, AngularFireModule} from '@angular/fire';
import {_firebaseAppFactory, FirebaseOptions} from '@angular/fire/firebase.app.module';


@Component({
  selector: 'app-user-profile-details-form',
  templateUrl: './user-profile-details-form.component.html',
  styleUrls: ['./user-profile-details-form.component.css'],

})
export class UserProfileDetailsFormComponent implements OnInit {


  private userFile;
  temp = 'three';
  x: boolean;
  imgFlag = 0;
  selectedFile;
  selectedProof;
  proofFlag;
  date: any;
  imgURL = '';
  fileURL;
  uptoFirebase="https://firebasestorage.googleapis.com/v0/b/volunteer-44353.appspot.com/o/images%2F";
  afterFirebase="?alt=media&token=d7870b45-0b10-4878-b54f-4b78e20b42f0";
  envUrl = environment.userProfileUrl;
  url: any = '';
  userId;
  url1: any = '';
  user: User = new User();

  constructor(private storage: AngularFireStorage, private userservice: UserServiceService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    //  AngularFireModule.initializeApp(environment.firebaseConfig2);
  }

  ngOnInit() {
    // console.log("url ",this.uptoFirebase+`${this.user.userName}`+this.afterFirebase);

    this.route.params.subscribe(
      params => {
        this.userId = params.id;
        this.userservice.view(this.userId).toPromise().then(
          result => {

            this.user = result;
            this.x = this.user.proofFlag;
            console.log(this.x);
            this.imgURL = this.uptoFirebase + this.user.userName + this.afterFirebase;
            // console.log("Http req:",this.http.get<any>(this.uptoFirebase+this.user.userName+this.afterFirebase));
            console.log('url ', this.uptoFirebase + this.user.userName + this.afterFirebase);
            console.log('on init :', this.user);
            // if(this.user.imgURL!='')
            // {
            //   this.imgFlag=1;
            //   this.url=this.user.imgURL;
            // }
            // if(this.user.docURL!='')
            // {
            //   this.proofFlag=1;
            // }
          }, reason => {
            console.log('reason :', reason);
          }
        );
      });

  }

  back() {
    this.router.navigate(['details/' + this.user.userName]);
  }

  demoMethod(user: User) {
    console.log('user :', user);
    this.userservice.update(user).subscribe(
      data => {
        const updatedUser = data;
        console.log('updated user :',updatedUser);
      }
    );
  }


  public fileuploads(event) {
    const file = event.target.files[0];
    this.userFile = file;
    console.log(this.userFile);
  }

  public onSelectFile(event) {
    this.selectedFile = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      let formData = new FormData();
      formData.append('file', this.selectedFile);
      console.log(this.selectedFile);
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
        this.uploadImage();
        this.imgFlag = 1;

        // return this.userservice.uploadProfilePic(formData).subscribe();

      };
    }

  }

  public onSelectProof(event) {
    this.selectedProof = event.target.files[0];
    if (event.target.files && event.target.files[0]) {

      let formData = new FormData();
      formData.append('file', this.selectedProof);
      console.log(this.selectedProof);
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url1 = reader.result;
        this.uploadDocument();
        // this.proofFlag=1;
        // return this.userservice.uploadGovtPic(formData).subscribe();
      }
      this.user.proofFlag=true;
      console.log("check now",this.user.proofFlag)
    }

  }

  public delete() {
    this.url = null;
  }

  submitForm() {

    this.user.imgURL=this.imgURL;
    this.user.docURL=this.fileURL;
    console.log(this.user, "Inside Submit");
    console.log("checking if it changes",this.user.proofFlag);
    this.demoMethod(this.user);
    console.log("proof flag 3",this.user.proofFlag);
    // this.router.navigate(['details/' + this.user.userName]);

    window.location.href = "http://13.234.200.23:4200/details/"+this.user.userName;

  }

  uploadImage() {
    // AngularFireModule.initializeApp(environment.firebaseConfig3)
    var imagePath = `images/${this.user.userName}`;
    const imgRef = this.storage.ref(imagePath);

    this.storage.upload(imagePath, this.selectedFile).snapshotChanges().pipe(
      finalize(() => {

        imgRef.getDownloadURL().subscribe((url) => {
          this.user.imgURL = url;
          this.imgURL = url;
          console.log('image url : ', url);
        });

      })
    ).subscribe();
    // this.storage.upload(imagePath,this.selectedFile).snapshotChanges().pipe(
    //   finalize(()=>{
    //     imgRef.getDownloadURL().subscribe((url)=>
    //     {
    //       this.user.imgURL=url;
    //       console.log("image url : ",this.user.imgURL);

    //     })

    //   })
    // ).subscribe();
  }

  uploadDocument() {
    var filePath = `documents/${this.user.userName}`;
    const fileRef = this.storage.ref(filePath);
    this.user.proofFlag= true;
    console.log("proof flag 1",this.user.proofFlag);
    this.storage.upload(filePath,this.selectedProof).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>
        {
          this.user.docURL=url;
          this.fileURL=url;
          console.log("doc url:",this.user.docURL)
          this.user.proofFlag= true;
          console.log("proof flag 2",this.user.proofFlag);
        })

      })
    ).subscribe();
  }

}

