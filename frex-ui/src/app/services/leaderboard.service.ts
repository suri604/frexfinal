import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  username=localStorage.getItem("username");

   url = environment.rewardServiceURL;
  constructor(private http: HttpClient) { }
   findleaders() {
    return this.http.get(this.url + '/get10');
   }
   findFitnessLeaders(){
     return this.http.get('http://13.234.200.23:8095/total10fitness');
   }
   everyDayLeader(){
     return this.http.get('http://13.234.200.23:8095/total10per');
   }

   getRewards(username: string){
     return this.http.get(this.url + '/getRewards/'+ username);
   }
   savelikes(){
    return this.http.post(this.url + "/photo/rewards",
    {
        "username": this.username,
        "day": "sunday"
 
    })
  }
}
