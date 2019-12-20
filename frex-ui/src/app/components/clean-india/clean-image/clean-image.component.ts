import { Component, OnInit } from '@angular/core';
import { CleanIndiaService } from 'src/app/services/clean-india.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EnvironmentDonateService } from 'src/app/services/environment-donate.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-clean-image',
  templateUrl: './clean-image.component.html',
  styleUrls: ['./clean-image.component.css']
})
export class CleanImageComponent implements OnInit {

  imageList: any[];
  rowIndexArray: any[];

  constructor(private service: CleanIndiaService, private envservice: EnvironmentDonateService, private snackBar : MatSnackBar) { }

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil(this.imageList.length)).keys());
      }
    );
    }
    submitted=false;
    public username = localStorage.getItem('username');
    form = new FormGroup({
      reciever: new FormControl(''),
      point: new FormControl('')
    });
    get toUsername() {
      return this.form.get('reciever');
    }
  
    get donatePoints() {
      return this.form.get('point');
    }
    onSubmit(){
      if (this.form.invalid) {
        return;
      }
       this.submitted = true;
       this.envservice.saveDeed(this.form.value.reciever, this.form.value.point, this.username)
       .subscribe( data => {
        console.log(data);
    });
   this.snackBar.open('Wait for few moments, You will be surely rewarded','ok',{duration: 1000});

      }
}
