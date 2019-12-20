import { Component, OnInit } from "@angular/core";
import { GoogleChartInterface } from "ng2-google-charts/google-charts-interfaces";
import { Router } from "@angular/router";
import { LeaderboardService } from "src/app/services/leaderboard.service";

@Component({
  selector: "app-environment-main",
  templateUrl: "./environment-main.component.html",
  styleUrls: ["./environment-main.component.css"]
})
export class EnvironmentMainComponent implements OnInit {


  
  public xps: any;
  public performance: any;
  activity = 'Ticket Upload';
  private activityId: string;

  constructor(
    private router: Router, private service: LeaderboardService
  ) {
  }
  rewards:any;
  coming: boolean;
  public chartType: string ;
  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [];

  public chartOptions: any = {
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  public username = localStorage.getItem('username');
  public chartDataset: Array<any>= [];
  ngOnInit() {
    this.service.getRewards(this.username).subscribe((data: any) => {
      this.rewards = data;
      this.xps = data.xps;
      console.log(data);
      this.chartType = 'bar';
       this.chartDataset= [
        { data: [1, this.xps, this.xps * 8.33, (this.xps)*0.2], label: 'Your Statistics' }
      ];
      this.chartLabels = ['', 'Total Rewards Earned', 'Carbon Emissions Saved', '% Growth']
      this.chartColors = [
        {
          backgroundColor: 'rgba(105, 0, 132, .2)',
          borderColor: 'rgba(200, 99, 132, .7)',
          borderWidth: 2,
        },
        {
          backgroundColor: 'rgba(0, 137, 132, .2)',
          borderColor: 'rgba(0, 10, 130, .7)',
          borderWidth: 2,
        }
      ]
      this.chartOptions = {responsive:true};

      console.log(this.xps);
      console.log(this.performance);
      this.coming = true;
    });
  }
  public chartT: string = 'bar';

  public chartD: Array<any> = [
    { data: [], label: 'Personal Statistics' }
  ];

  public chartL: Array<any> = ['Total Rewards Earned', 'Carbon Emissions Saved', '% growth'];

  public chartC: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartO: any = {
    responsive: true
  };

  back() {
    this.router.navigate(["/environment/home"]).then(null);
  }
  claimrewards() {
    this.router.navigate(["/environment/main/save"]);
  }
  viewhistory() {
    this.router.navigate(["/environment/main/getTicket"]);
  }
  tasks() {
    this.router.navigate(["/environment/admin/list"]);
  }
  // tslint:disable-next-line: member-ordering
  actitivites = [
    {
      img: "../../../assets/throw.svg",
      title: "Environment Activity"
    }
  ]
}
