import { environment } from 'src/environments/environment';
import { Component, OnInit } from "@angular/core";
import { LeaderboardService } from "../../services/leaderboard.service";

@Component({
  selector: "app-community",
  templateUrl: "./community.component.html",
  styleUrls: ["./community.component.css"]
})
export class CommunityComponent implements OnInit {
  rewards = [];
  everydayRewards = [];
  fitnesRewards = [];
  front =environment.beforeImage;
  back=environment.afterImage;
  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit() {
    this.leaderboardService.findleaders().subscribe((data: any) => {
      this.rewards = data;
      console.log(data);
    });

    this.leaderboardService.everyDayLeader().subscribe((data: any) => {
      this.everydayRewards = data;
      console.log(data);
    });

    this.leaderboardService.findFitnessLeaders().subscribe((data: any) => {
      this.fitnesRewards = data;
      console.log(data);
    });
  }
}
