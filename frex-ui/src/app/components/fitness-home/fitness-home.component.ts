import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-fitness-home',
  templateUrl: './fitness-home.component.html',
  styleUrls: ['./fitness-home.component.css']
})
export class FitnessHomeComponent implements OnInit {
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
