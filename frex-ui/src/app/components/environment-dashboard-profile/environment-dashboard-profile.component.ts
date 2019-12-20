import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-environment-dashboard-profile',
  templateUrl: './environment-dashboard-profile.component.html',
  styleUrls: ['./environment-dashboard-profile.component.css']
})
export class EnvironmentDashboardProfileComponent implements OnInit {

  @Input() navigated: boolean;
  @Output() navigatedChange = new EventEmitter();


  clicker(value){
    if(value=="Rewards"){
      this.router.navigate(["/coupons"]);
    }
    else{
      this.router.navigate(["/leaderboard"]);
    }
  }

  // actitivites = [
  //   {
  //     img: '../../../assets/public.svg',
  //     title: 'Public Transport'
  //   },
  //   {
  //     img: '../../../assets/throw.svg',
  //     title: 'Clean India'
  //   },

  // ];
  actions = [

    {
      color: '#fce4ec',
      img: '../../../assets/envrewards.svg',
      title: 'Rewards'
    },
    {
      color: '#ede7f6',
      img: '../../../assets/envcommunity.svg',
      title: 'Community'
    }
  ];

  constructor(    private router: Router    ) {
  }

  ngOnInit() {
  }

  onBackPressed() {
    this.navigatedChange.emit(true);
  }
  gomain() {
    this.router.navigate(['/environment/main']);
  }
  gocleanmain(){
    this.router.navigate(['/environment/cleanindia/upload']);
  }
  gofeed() {
    this.router.navigate(['/environment/cleanindia/list'])
}

}
