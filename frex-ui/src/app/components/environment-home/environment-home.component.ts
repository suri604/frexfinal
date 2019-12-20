import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-environment-home',
  templateUrl: './environment-home.component.html',
  styleUrls: ['./environment-home.component.css']
})
export class EnvironmentHomeComponent implements OnInit {

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
