import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {LoadingService} from './loading.service';
import {AuthService} from './auth.service';

@Injectable()
export class ChatroomService {

  //
  // public chatrooms: Observable<any>;
  // public changeChatroom: BehaviorSubject<string | null> = new BehaviorSubject(null);
  // public selectedChatroom: Observable<any>;
  // public selectedChatroomMessages: Observable<any>;
  //
  //
  // constructor(
  //   private db: AngularFirestore,
  //   private loadingService: LoadingService,
  //   private authService: AuthService
  // ) {
  //   this.selectedChatroom = this.changeChatroom.switchMap(chatroomId => {
  //     if (chatroomId) {
  //       return db.doc(`chatrooms/${chatroomId}`).valueChanges();
  //     }
  //     return Observable.of(null);
  //   });
  //
  //   this.selectedChatroomMessages = this.changeChatroom.switchMap(chatroomId => {
  //     if (chatroomId) {
  //       return db.collection(`chatrooms/${chatroomId}/messages`, ref => {
  //         return ref.orderBy('createdAt', 'desc').limit(100);
  //       })
  //         .valueChanges()
  //         .map(arr => arr.reverse());
  //     }
  //     return Observable.of(null);
  //   });
  //
  //   this.chatrooms = db.collection('chatrooms').valueChanges();
  //
  // }
  //
  // public createMessage(text: string): void {
  // //  const chatroomId = this.changeChatroom.value;
  //   const chatroomId = this.getChatrooms();
  //   const message = {
  //     message: text,
  //     createdAt: new Date(),
  //     sender: this.authService.currentUserSnapshot
  //   };
  //
  //   this.db.collection(`chatrooms/${chatroomId}/messages`).add(message);
  // }
  //
  // // public createMessage(chatroomId: string, text: string): void {
  // //   const message = {
  // //     message: text,
  // //     createdAt: new Date(),
  // //     sender: this.authService.currentUserSnapshot
  // //   };
  //
  // //   this.db.collection(`chatrooms/${chatroomId}/messages`).add(message).then(
  // //     value => {
  // //       console.log('success');
  // //     },
  // //     reason => {
  // //       console.log('failed to upload because of ' + reason);
  // //     }
  // //   );
  // // }
  // //
  // async getChatroomInfo(chatroomId: string) {
  //   return await this.db.collection('chatrooms').doc(chatroomId).ref.get().then(
  //     value => {
  //       console.log(value.data());
  //       return value.data();
  //     });
  // }
  //
  // async getChatroomMessages(chatroomId: string) {
  //   return this.db.collection('chatrooms').doc(chatroomId)
  //     .collection('messages').valueChanges();
  // }
  //
  // async getChatrooms() {
  //   return await this.db.collection('chatrooms').ref.get().then(
  //     async collection => {
  //       const chatrooms = [];
  //       await collection.forEach(
  //         document => {
  //           chatrooms.push(document.data());
  //         });
  //       return chatrooms;
  //     });
  // }


  public chatrooms: Observable<any>;
  public changeChatroom: BehaviorSubject<string | null> = new BehaviorSubject(null);
  public selectedChatroom: Observable<any>;
  public selectedChatroomMessages: Observable<any>;

  constructor(
    private db: AngularFirestore,
    private loadingService: LoadingService,
    private authService: AuthService
  ) {
    this.selectedChatroom = this.changeChatroom.switchMap(chatroomId => {
      if (chatroomId) {
        return db.doc(`chatrooms/${chatroomId}`).valueChanges();
      }
      return Observable.of(null);
    });

    this.selectedChatroomMessages = this.changeChatroom.switchMap(chatroomId => {
      if (chatroomId) {
        return db.collection(`chatrooms/${chatroomId}/messages`, ref => {
          return ref.orderBy('createdAt', 'desc').limit(100);
        })
          .valueChanges()
          .map(arr => arr.reverse());
      }
      return Observable.of(null);
    });

    this.chatrooms = db.collection('chatrooms').valueChanges();
  }

  public createMessage(text: string): void {
    const chatroomId = this.changeChatroom.value;
    const message = {
      message: text,
      createdAt: new Date(),
      sender: this.authService.currentUserSnapshot
    };

    this.db.collection(`chatrooms/${chatroomId}/messages`).add(message);
  }

}
