import {AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ChatroomService} from '../../../../shared/chatroom.service';
import {LoadingService} from '../../../../shared/loading.service';
import {AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit, OnDestroy, AfterViewChecked {

  //
  // @ViewChild('scrollContainer', {static: false}) private scrollContainer: ElementRef;
  //
  // private subscriptions: Subscription[] = [];
  // public chatroom;
  // public messages: Observable<any>;
  // private chatroomId: string;
  //
  // constructor(
  //   private route: ActivatedRoute,
  //   private chatroomService: ChatroomService,
  //   private loadingService: LoadingService
  // ) {
  // }
  //
  // ngOnInit() {
  //   this.scrollToBottom();
  //
  //
  //   this.route.paramMap.subscribe(async params => {
  //     this.chatroomId = params.get('chatroomId');
  //     console.log(this.chatroomId);
  //     this.chatroom = await this.chatroomService.getChatroomInfo(this.chatroomId);
  //     this.messages = await this.chatroomService.getChatroomMessages(this.chatroomId);
  //   });
  // }
  //
  // ngOnDestroy() {
  // }
  //
  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }
  //
  // private scrollToBottom(): void {
  //   try {
  //     this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  //   } catch (err) {
  //   }
  // }

//   @ViewChild('scrollContainer', {static: false}) private scrollContainer: ElementRef;

//   private subscriptions: Subscription[] = [];
//   public chatroom: Observable<any>;
//   public messages: Observable<any>;

//   constructor(
//     private route: ActivatedRoute,
//     private chatroomService: ChatroomService,
//     private loadingService: LoadingService
//   ) {
//     this.subscriptions.push(
//       this.chatroomService.selectedChatroom.subscribe(chatroom => {
//         this.chatroom = chatroom;
//       })
//     );

//     this.subscriptions.push(
//       this.chatroomService.selectedChatroomMessages.subscribe(messages => {
//         this.messages = messages;
//       })
//     );
//   }

//   ngOnInit() {
//     this.scrollToBottom();

//     this.subscriptions.push(
//       this.route.paramMap.subscribe(params => {
//         const chatroomId = params.get('chatroomId');
//         this.chatroomService.changeChatroom.next(chatroomId);
//       })
//     );
//   }

//   ngOnDestroy() {
//     this.subscriptions.forEach(sub => sub.unsubscribe());
//   }

//   ngAfterViewChecked() {
//     this.scrollToBottom();
//   }

//   private scrollToBottom(): void {
//     try {
//       this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
//     } catch(err) {}
//   }


@ViewChild('scrollContainer', {static: false}) private scrollContainer: ElementRef;

private subscriptions: Subscription[] = [];
public chatroom: any;
public messages: Observable<any>;

constructor(
  private route: ActivatedRoute,
  private chatroomService: ChatroomService,
  private loadingService: LoadingService
) {
  this.subscriptions.push(
    this.chatroomService.selectedChatroom.subscribe(chatroom => {
      this.chatroom = chatroom;
    })
  );

  this.subscriptions.push(
    this.chatroomService.selectedChatroomMessages.subscribe(messages => {
      this.messages = messages;
    })
  );
}

ngOnInit() {
  this.scrollToBottom();

  this.subscriptions.push(
    this.route.paramMap.subscribe(params => {
      const chatroomId = params.get('chatroomId');
      this.chatroomService.changeChatroom.next(chatroomId);
    })
  );
}

ngOnDestroy() {
  this.subscriptions.forEach(sub => sub.unsubscribe());
}

ngAfterViewChecked() {
  this.scrollToBottom();
}

private scrollToBottom(): void {
  try {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  } catch(err) {}
}


}