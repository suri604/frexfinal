import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-env-main-clean',
  templateUrl: './env-main-clean.component.html',
  styleUrls: ['./env-main-clean.component.css']
})
export class EnvMainCleanComponent implements OnInit {

  private rewardsTable = [];
  rewardsChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: this.rewardsTable,
    options: {
      title: 'How you freaked this week',
      // colors: ['#E91E63', '#009688', '#8BC34A'],
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
      }
    }
  };
  week: any[] = [
    // {value: WeekDay.Monday, display: 'Monday'},
    // {value: WeekDay.Tuesday, display: 'Tuesday'},
    // {value: WeekDay.Wednesday, display: 'Wednesday'},
    // {value: WeekDay.Thursday, display: 'Thursday'},
    // {value: WeekDay.Friday, display: 'Friday'},
    // {value: WeekDay.Saturday, display: 'Saturday'},
    // {value: WeekDay.Sunday, display: 'Sunday'}
  ];
  activity = 'Swachh Bharat Abhiyan(Clean India)';
  private activityId: string;

  constructor(
    // private displayService: DisplayService,
    // private dialog: MatDialog,
    // private gapiAuthService: GapiAuthService,
    // private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(
    //   (params) => {
    //     this.activityId = params.get('id');
    //   });
    // this.displayService.changeNavBarState(false);

    // if (this.gapiAuthService.getToken() == null) {
    //   this.dialog.open(FitnessInfoDialogComponent, {
    //     panelClass: 'custom-dialog-container'
    //   });
    // }
    // this.rewardsTable.push(['Day', 'Reward Points', 'Calories', 'Distance']);
    // for (const day of this.week) {
    //   this.rewardsTable.push([day.display, Math.random() * 100 + 50, Math.random() * 100 + 50, Math.random() * 100 + 50]);
    // }
  }

  back() {
    this.router.navigate(['/environment/home']).then(null);
  }
  actitivites = [
    {
      img: '../../../assets/public.svg',
      title: 'Public Transport'
    }
  ]

}
