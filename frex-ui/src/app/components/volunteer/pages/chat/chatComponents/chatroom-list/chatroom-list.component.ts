import { Component, OnInit } from '@angular/core';
import {ChatroomService} from '../../../../shared/chatroom.service';

@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {
  // chatrooms = [];
  //
  // constructor(
  //   public chatroomService: ChatroomService
  // ) { }
  //
  // async ngOnInit() {
  //   this.chatrooms = await this.chatroomService.getChatrooms();
  // }
  // constructor(
  //   public chatroomService: ChatroomService
  // ) { }

  // ngOnInit() {
  // }

  constructor(
    public chatroomService: ChatroomService
  ) { }

  ngOnInit() {
  }

}
