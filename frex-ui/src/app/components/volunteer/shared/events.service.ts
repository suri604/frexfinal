import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import 'rxjs/add/operator/switchMap';



@Injectable({
  providedIn: 'root'
})

export class EventsService {

  eventDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getEventDetailList() {
    this.eventDetailList = this.firebase.list('eventDetails');
  }

  insertEventDetails(eventDetails) {
    this.eventDetailList.push(eventDetails);
  }


}
