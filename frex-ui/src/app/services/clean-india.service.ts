import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CleanIndiaService {

  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {
   }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('cleanfinal');
  }

  insertImageDetails(cleanfinal) {
    this.imageDetailList.push(cleanfinal);
  }
}
