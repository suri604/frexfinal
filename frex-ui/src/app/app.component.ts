import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public clickedEvent: boolean;
  opacity = 0;
  message = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  childEventClicked(logged: boolean) {
    this.clickedEvent = logged;
    console.log('event clicked');
  }
}
