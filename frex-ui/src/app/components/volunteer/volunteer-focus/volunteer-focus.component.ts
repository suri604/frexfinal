import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-volunteer-focus',
  templateUrl: './volunteer-focus.component.html',
  styleUrls: ['./volunteer-focus.component.css']
})
export class VolunteerFocusComponent implements OnInit {
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

  actitivites = [
    {
      img: '../../../assets/public_health.svg',
      title: 'Public Health'
    },
    {
      img: '../../../assets/child.svg',
      title: 'Children Elderly Disabled'
    },
    {
      img: '../../../assets/training.svg',
      title: 'Training Research Environment'
    },
    {
      img: '../../../assets/politics.svg',
      title: 'Politics and History'
    }
  ];

  
  actions = [

    {
      // color: '#fce4ec',
      img: '../../../assets/rewards.svg',
      title: 'Rewards'
    },
    {
      // color: '#ede7f6',
      img: '../../../assets/community.svg',
      title: 'Community'
    }
  ];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onBackPressed() {
    this.navigatedChange.emit(true);
  }

  goToDetails() {
    this.router.navigate(['volunteer/details/1']);
  }

 
}
