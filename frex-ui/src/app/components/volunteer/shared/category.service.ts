import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';


@Injectable()
export class CategoryService {
  private currentCategory = new BehaviorSubject<any>(null);
  private categories$: AngularFirestoreCollection<any>;


  constructor(private afs: AngularFirestore) {
    this.categories$ = this.afs.collection('certificateDetails');
  }
}
