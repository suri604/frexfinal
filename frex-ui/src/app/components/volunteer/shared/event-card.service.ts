// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class EventCardService {
//
//   constructor() { }
// }

import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Event} from './event';

/**
 * Friends service
 *
 */
@Injectable({
  providedIn: 'root'
})


export class EventCardService {


  constructor(private fireDb: AngularFireDatabase) {
  }

  getFirstPage(category: string, pageSize: number): Observable<Event[]> {
    return this.fireDb.list<Event>
    (`eventDetails/category`,
      ref => ref.limitToFirst(pageSize)
    ).valueChanges();
  }

  loadNextPage(category: string, eventKey: string, pageSize: number):
    Observable<Event[]> {
    return this.fireDb.list<Event>
    (`eventDetails/category`,
      ref =>
        ref.orderByKey().startAt(eventKey)
          .limitToFirst(pageSize + 1)
    ).valueChanges();
  }

  loadPreviousPage(category: string, eventKey: string, pageSize: number):
    Observable<Event[]> {
    return this.fireDb.list<Event>
    (`eventDetails/category`,
      ref =>
        ref.orderByKey().startAt(eventKey)
          .limitToLast(pageSize + 1)
    ).valueChanges();
  }
}
