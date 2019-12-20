import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private display:DisplayService) { }

  ngOnInit() {
    this.display.changeNavBarState(false);
  }
  
}
