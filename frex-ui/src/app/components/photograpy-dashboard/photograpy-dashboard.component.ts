import { Component,EventEmitter, OnInit,Input, Output } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-photograpy-dashboard',
  templateUrl: './photograpy-dashboard.component.html',
  styleUrls: ['./photograpy-dashboard.component.css']
})
export class PhotograpyDashboardComponent implements OnInit {

  @Output() navigatedChange = new EventEmitter();
  @Input() navigated: boolean;
  @Input() isSmall: boolean;


  constructor() { }
  
 
  ngOnInit() {
  }

  navigate() {
    this.navigatedChange.emit(false);
  }

}
