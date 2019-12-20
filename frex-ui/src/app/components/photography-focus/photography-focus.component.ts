import { EventEmitter,Component, OnInit,Input,Output } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-photography-focus',
  templateUrl: './photography-focus.component.html',
  styleUrls: ['./photography-focus.component.css']
})
export class PhotographyFocusComponent implements OnInit {
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
      img: '../../../assets/upload1.svg',
      title: 'Upload photos'
    },
    {
      img: '../../../assets/feed.svg',
      title: 'Feed'
    },
    {
      img: '../../../assets/profile.png',
      title: 'Profile'
    }
  ];
  actions = [

    {
      color: '#fce4ec',
      img: '../../../assets/rewards.svg',
      title: 'Rewards'
    },
    {
      color: '#ede7f6',
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

  goToDetails(value) {
    if(value=="Upload photos"){
      this.router.navigate(['image/upload']);
    }
    else if(value=="Feed"){
      this.router.navigate(['image/feed']);
    }
    else{
      this.router.navigate(['image/list']);
    }
  }
}
