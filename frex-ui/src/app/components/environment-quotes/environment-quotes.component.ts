import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-environment-quotes',
  templateUrl: './environment-quotes.component.html',
  styleUrls: ['./environment-quotes.component.css']
})
export class EnvironmentQuotesComponent implements OnInit {

  @Output() navigatedChange = new EventEmitter();
  @Input() navigated: boolean;
  @Input() isSmall: boolean;

  constructor() {
  }

  ngOnInit() {

  }

  navigate() {
    this.navigatedChange.emit(false);
  }

}
