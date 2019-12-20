import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentImageService {
  imageDetailList: AngularFireList<any>;
  ref = this.firebase.database.ref('environmentfinal');
  username=localStorage.getItem("username");
  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('environmentfinal', ref => ref.orderByChild('userid').equalTo(this.username));
  }

  insertImageDetails(environment) {
    this.imageDetailList.push(environment);
  }

}
