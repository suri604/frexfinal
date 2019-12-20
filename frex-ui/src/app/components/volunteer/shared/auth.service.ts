import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Alert} from '../classes/alert';
import {Router} from '@angular/router';
import {AlertService} from './alert.service';
import {User} from '../classes/user';
import 'rxjs-compat/add/observable/of';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import 'rxjs-compat/add/observable/fromPromise';
import firebase from '@firebase/app';
require('firebase/auth');



@Injectable()
 export class AuthService {

  // public currentUser: Observable<User | null>;
  // public currentUserSnapshot: User | null;

  // constructor(
  //   private router: Router,
  //   private alertService: AlertService,
  //   private afAuth: AngularFireAuth,
  //   private db: AngularFirestore
  // ) {
  //   this.currentUser = this.afAuth.authState
  //     .switchMap((user) => {
  //       if (user) {
  //         return this.db.doc<User>(`users/${user.uid}`).valueChanges();
  //       } else {
  //         return Observable.of(null);
  //       }
  //     });
  //   this.setCurrentUserSnapshot();
  // }

  // public signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean> {
  //   return Observable.fromPromise(
  //     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //       .then((user) => {
  //         const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.user.uid}`);
  //         const updatedUser = {
  //           id: user.user.uid,
  //           email: user.user.email,
  //           firstName,
  //           lastName,
  //           // tslint:disable-next-line:max-line-length
  //           photoUrl: 'https://firebasestorage.googleapis.com/v0/b/volunteer-44353.appspot.com/o/default_profile_pic.jpg?alt=media&token=4e81aa31-c6b8-49ea-89a5-939814f9218b'
  //         }

  //         userRef.set(updatedUser);
  //         return true;
  //       })
  //       .catch((err) => false)
  //   );
  // }

  // // public login(email: string, password: string): Observable<boolean> {
  // //   // TODO call Firebase login function
  // //   return Observable.of(true);
  // // }
  // //
  // // public logout(): void {
  // //   // TODO call Firebase logout function
  // //   this.router.navigate(['/login']);
  // //   this.alertService.alerts.next(new Alert('You have been signed out.'));
  // // }

  // public login(email: string, password: string): Observable<boolean> {
  //   return Observable.fromPromise(
  //     this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //       .then((user) => true)
  //       .catch((err) => false)
  //   );
  // }

  // public logout(): void {
  //   this.afAuth.auth.signOut().then(() => {
  //     this.router.navigate(['/login']);
  //     this.alertService.alerts.next(new Alert('You have been signed out.'));
  //   });
  // }

  // private setCurrentUserSnapshot(): void {
  //   this.currentUser.subscribe(user => this.currentUserSnapshot = user);
  // }

  public currentUser: Observable<User | null>;
  public currentUserSnapshot: User | null;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {

    this.currentUser = this.afAuth.authState
      .switchMap((user) => {
        if (user) {
          return this.db.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      })

    this.setCurrentUserSnapshot();

    
  }


   

  public signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean> {
    return Observable.fromPromise(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.user.uid}`);
          const updatedUser = {
            id: user.user.uid,
            email: user.user.email,
            firstName,
            lastName,
            photoUrl: 'https://firebasestorage.googleapis.com/v0/b/volunteer-44353.appspot.com/o/default_profile_pic.jpg?alt=media&token=4e81aa31-c6b8-49ea-89a5-939814f9218b'
            // quote: 'Life is like a box of cho  this.router.navigate(['/loginv']);colates, you never know what you are gonna get!',
            // bio: 'Bio is under construction...'
          }

          userRef.set(updatedUser);
          return true;
        })
        .catch((err) => false)
    );
  }

  public login(email: string, password: string): Observable<boolean> {
    return Observable.fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => true)
        .catch((err) => false)
    );
  }

  public logout(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/loginv']);
      this.alertService.alerts.next(new Alert('You have been signed out.'));
    });
  }

  private setCurrentUserSnapshot(): void {
    this.currentUser.subscribe(user => this.currentUserSnapshot = user);
  }
}
