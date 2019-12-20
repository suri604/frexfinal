import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fitness-focus',
  templateUrl: './fitness-focus.component.html',
  styleUrls: ['./fitness-focus.component.css']
})
export class FitnessFocusComponent implements OnInit {
  @Input() navigated: boolean;
  @Output() navigatedChange = new EventEmitter();

  activities = [
    {
      img: '../../../assets/jogging.png',
      title: 'Jogging'
    },
    {
      img: '../../../assets/biking.png',
      title: 'Biking'
    },
    {
      img: '../../../assets/others.png',
      title: 'Other'
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

  clicker(value) {
    if (value === 'Rewards') {
      this.router.navigate(['/coupons']);
    } else {
      this.router.navigate(['/leaderboard']);
    }
  }

  ngOnInit() {
  }

  onBackPressed() {
    this.navigatedChange.emit(true);
  }

  goToDetails(i: number) {
    this.router.navigate([`fitness/details/${i + 1}`]).then(null);
  }
}
