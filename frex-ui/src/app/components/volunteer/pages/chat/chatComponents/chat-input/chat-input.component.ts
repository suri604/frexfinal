import { Message } from './../../../../classes/message';
import { Component, OnInit } from '@angular/core';
import {ChatroomService} from '../../../../shared/chatroom.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  // constructor(
  //   private chatroomService: ChatroomService
  // ) { }
 // //
 // // public newMessageText: string = '';
 // //
 // //
 // //  constructor() { }
 // //
 // //  ngOnInit() {
 // //  }
 // //
 // //  public submit(message: string): void {
 // //    // TODO save text to Firebase backend
 // //    console.log('New Message: ', message);
 // //
 // //    // reset input
 // //    this.newMessageText = '';
 // //  }
 // //
 //
 //  public newMessageText = '';
 //
 //  constructor(
 //    private chatroomService: ChatroomService
 //  ) { }
 //
 //  ngOnInit() {
 //  }
 //
 //  public submit(message: string): void {
 //    this.chatroomService.createMessage(message);
 //
 //    // reset input
 //    this.newMessageText = '';
 //  }


  // public newMessageText = '';

  // constructor(
  //   private chatroomService: ChatroomService
  // ) { }

  // ngOnInit() {
  // }

  // public submit(message: string): void {
  //   this.chatroomService.createMessage(message);

  //   // reset input
  //   this.newMessageText = '';
  // }


  public newMessageText: string = '';

  constructor(
    private chatroomService: ChatroomService
  ) { }

  ngOnInit() {
  }

  public submit(message: string): void {
    this.chatroomService.createMessage(message);

    // reset input
    this.newMessageText = '';
  }
}
