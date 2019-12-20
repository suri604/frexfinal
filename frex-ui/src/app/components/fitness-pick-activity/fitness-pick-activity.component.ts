import {Component, OnInit} from '@angular/core';
import {activities, Activity} from 'src/app/util/fitness-activities';
import {Router} from '@angular/router';
import {FavouriteInfoService} from '../../services/fitness/favourite-info.service';

@Component({
  selector: 'app-fitness-pick-activity',
  templateUrl: './fitness-pick-activity.component.html',
  styleUrls: ['./fitness-pick-activity.component.css']
})
export class FitnessPickActivityComponent implements OnInit {
  favouriteActivities = [];
  allActivities = new Array<Activity>();
  keys = new Array<string>();

  constructor(
    private router: Router,
    private favouriteInfoService: FavouriteInfoService
  ) {
  }

  ngOnInit() {
    this.allActivities = Array.from(activities.values()).filter(
      (value) => {
        return value.show;
      });
    this.keys = Array.from(activities.keys());
  }

  goToDetails(i: number) {
    const activity = this.keys[i];
    this.router.navigate([`fitness/details/${activity}`]).then(null);
  }

  addToFavourites(i: number) {
    const key = this.keys[i];
    const userId = localStorage.getItem('username');
    const isSaved = this.favouriteInfoService.save(i, userId);
  }
}
