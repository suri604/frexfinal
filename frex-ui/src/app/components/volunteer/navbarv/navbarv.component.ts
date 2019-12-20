import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbarv.component.html',
  styleUrls: ['./navbarv.component.scss']
})
export class NavbarvComponent implements OnInit {


  // public currentUser: any = null;

  // constructor(
  //   public auth: AuthService
  // ) { }

  // ngOnInit() {
  //   this.auth.currentUser.subscribe( user => {
  //     this.currentUser = user;
  //   });
  // }

  public currentUser: any = null;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.currentUser.subscribe( user => {
      this.currentUser = user;
    });
  }
}
