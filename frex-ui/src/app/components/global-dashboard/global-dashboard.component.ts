import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {Title} from "@angular/platform-browser";
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-global-dashboard',
  templateUrl: './global-dashboard.component.html',
  styleUrls: ['./global-dashboard.component.css']
})
export class GlobalDashboardComponent implements OnInit {


  open(value) {
    if(value=='jogging'){
      this.router.navigate(["/fitness/dashboard"]);
    }
    else if(value=='image'){
      this.router.navigate(["/photography/dashboard"]);
    }
    else if(value=='environment'){
      this.router.navigate(["/environment/home"]);
    }
    else if(value=='frex'){
      this.router.navigate(["/chat/UkWvQDzCJFf9Ooucv7Vp"]);
    }
    else{
      this.router.navigate(["/volunteer/dashboard"]);
    }
  }

  constructor(private display:DisplayService,private router: Router,private titleService:Title) { }


  ngOnInit() {
    this.titleService.setTitle("Global Dashboard")
    this.display.changeNavBarState(true);

       }
  }
  


