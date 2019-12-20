import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-volunteer-dashboard',
  templateUrl: './volunteer-dashboard.component.html',
  styleUrls: ['./volunteer-dashboard.component.css']
})
export class VolunteerDashboardComponent implements OnInit {

  @Output() navigatedChange = new EventEmitter();
  @Input() navigated: boolean;
  @Input() isSmall: boolean;

  

  constructor( private router: Router) {
  }

  ngOnInit() {

  }

  navigate() {
    this.navigatedChange.emit(false);
  }
}
