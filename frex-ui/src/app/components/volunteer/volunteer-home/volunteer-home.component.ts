import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-volunteer-home',
  templateUrl: './volunteer-home.component.html',
  styleUrls: ['./volunteer-home.component.css']
})
export class VolunteerHomeComponent implements OnInit {
  isSmall: boolean;
  navigated = true;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.breakpointObserver.observe(
      [Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall]
    ).subscribe(result => {
      this.isSmall = !result.matches;
    });
  }

}
