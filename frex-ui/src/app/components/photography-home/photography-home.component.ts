import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-photography-home',
  templateUrl: './photography-home.component.html',
  styleUrls: ['./photography-home.component.css']
})
export class PhotographyHomeComponent implements OnInit {
  isSmall: boolean;
  navigated = true;

  constructor(private breakpointObserver: BreakpointObserver,private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle("Photography Dashboard")
    this.breakpointObserver.observe(
      [Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall]
    ).subscribe(result => {
      this.isSmall = !result.matches;
    });
  }
}
