import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth} from '@angular/fire/auth';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireModule.initializeApp(environment.firebaseConfig1),
    // AngularFireModule.initializeApp(environment.firebaseConfig2),
    // AngularFireModule.initializeApp(environment.firebaseConfig3),
    
    
    
    AngularFireStorageModule,
    AngularFirestoreModule,
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
  ]
})
export class AngularFirebaseModule {
}
