import {Component, OnInit, Input, Sanitizer} from '@angular/core';
import {Message} from './../../../../classes/message';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  // @Input() message: Message;
  // @Input() chatroomId: string;
  // private sanitizedPhotoUrl: SafeUrl;
  //
  // constructor(
  //   private sanitizer: DomSanitizer
  // ) {
  // }
  //
  // ngOnInit() {
  //   this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(this.message.sender.photoUrl);
  // }

  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}


