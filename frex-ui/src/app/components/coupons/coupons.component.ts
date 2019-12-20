import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/services/donation-service.service';
import 'rxjs/add/operator/toPromise';
import { Router } from "@angular/router";
import {Title} from '@angular/platform-browser';

// declare const myCopy: any;
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  public username;
  public rewards;
  ngOnInit() {
    this.titleService.setTitle('Coupons');
    
    this.username=localStorage.getItem('username');
     
      this.service.getrewardpoints(this.username).subscribe((data:any)=>{
        console.log(data);
        this.rewards=data.xps;
        console.log(this.rewards);
        console.log(this.rewards.valueOf);
      })
      
    
  }
 
  open(value) {
    if(value=='fitness'){
      this.router.navigate(["/fitness/dashboard"]);
    }
    else if(value=='environment'){
      this.router.navigate(["/environment/home"]);
    }
    else if(value=='globaldashboard'){
      this.router.navigate(["/globaldashboard"]);
    }
    else if(value=='account'){
      this.router.navigate(["/user-profile"]);
    }
    else{
      this.router.navigate(["/home"]);
    }
  }

  constructor(private router: Router,
    private service: DonationService,
    private titleService: Title) { }
  


  // onClick1() {
  //   this.submitted1 = true;

  // }
  async onClick2() {
   
    if(this.rewards >= 250){
      this.svgnotvisible2 = true;
    this.submitted2 = true;
    this.service.updateRewardPoints(this.username,250).subscribe((data:any)=>{
      this.rewards=data.xps;
    })
    }
    else{
     this.svgnotvisible2 = true;
     this.insufficient2 = true;
    }
    
  }
  async onClick3() {
   
    if(this.rewards >= 100){
      this.svgnotvisible3 = true;
    this.submitted3 = true;
    this.service.updateRewardPoints(this.username,100).subscribe((data:any)=>{
      this.rewards=data.xps;
    })
    }
    else{
     this.svgnotvisible3 = true;
     this.insufficient3 = true;
    }
    
  }


  async onClick4() {
   
    if(this.rewards >= 300){
      this.svgnotvisible4 = true;
    this.submitted4 = true;
    this.service.updateRewardPoints(this.username,300).subscribe((data:any)=>{
      this.rewards=data.xps;
    })
    }
    else{
     this.svgnotvisible4 = true;
     this.insufficient4 = true;
    }
    
  }

  async onClick5() {
   
    if(this.rewards >= 150){
      this.svgnotvisible5 = true;
    this.submitted5 = true;
    this.service.updateRewardPoints(this.username,150).subscribe((data:any)=>{
      this.rewards=data.xps;
    })
    }
    else{
     this.svgnotvisible5 = true;
     this.insufficient5 = true;
    }
    
  }

  async onClick6() {
   
    if(this.rewards >= 100){
      this.svgnotvisible6 = true;
    this.submitted6 = true;
    this.service.updateRewardPoints(this.username,100).subscribe((data:any)=>{
      this.rewards=data.xps;
    })
    }
    else{
     this.svgnotvisible6 = true;
     this.insufficient6 = true;
    }
    
  }

  async onClick7() {
   
    if(this.rewards >= 300){
      this.svgnotvisible7 = true;
    this.submitted7 = true;
    this.service.updateRewardPoints(this.username,300).subscribe((data:any)=>{
      this.rewards=data.xps;
    })
    }
    else{
     this.svgnotvisible7 = true;
     this.insufficient7 = true;
    }
    
  }

  async onClick8() {
   
    if(this.rewards >= 100){
      this.svgnotvisible8 = true;
    this.submitted8 = true;
    this.service.updateRewardPoints(this.username,100).subscribe((data:any)=>{
      this.rewards=data.xps;
    })
    }
    else{
     this.svgnotvisible8 = true;
     this.insufficient8 = true;
    }
    
  }

  async onClick9() {
   
    if(this.rewards >= 200){
      this.svgnotvisible9 = true;
    this.submitted9 = true;
    this.service.updateRewardPoints(this.username,200).subscribe((data:any)=>{
      this.rewards=data.xps;
    })
    }
    else{
     this.svgnotvisible9 = true;
     this.insufficient9 = true;
    }
    
  }


 async onClick10() {
   
    if(this.rewards >= 100){
      this.svgnotvisible10 = true;
    this.submitted10 = true;
  
    this.service.updateRewardPoints(this.username,100).subscribe((data:any)=>{
      this.rewards=data.xps;
    })
  
  }
    
    else{
     this.svgnotvisible10 = true;
     this.insufficient10 = true;
    }
    
  }

  
  copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

  }

 

  
  // submitted1 = false;
  submitted2 = false;
  submitted3 = false;
  submitted4 = false;
  submitted5 = false;
  submitted6 = false;
  submitted7 = false;
  submitted8 = false;
  submitted9 = false;
  submitted10 = false;

  insufficient2 = false;
  insufficient3 = false;
  insufficient4 = false;
  insufficient5 = false;
  insufficient6 = false;
  insufficient7 = false;

  insufficient8 = false;
  insufficient9 = false;
  insufficient10 = false;

  svgnotvisible10 = false;
  svgnotvisible9 = false;
  svgnotvisible8 = false;
  svgnotvisible7 = false;
  svgnotvisible6 = false;
  svgnotvisible5 = false;
  svgnotvisible4 = false;
  svgnotvisible3 = false;
  svgnotvisible2 = false;
  





  
}


