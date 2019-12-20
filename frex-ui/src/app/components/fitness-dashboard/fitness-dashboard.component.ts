import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fitness-dashboard',
  templateUrl: './fitness-dashboard.component.html',
  styleUrls: ['./fitness-dashboard.component.css']
})
export class FitnessDashboardComponent implements OnInit {

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
