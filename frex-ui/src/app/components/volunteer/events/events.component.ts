import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { CertificateService } from '../shared/certificate.service';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @ViewChild('scrollContainer', {static: false}) private scrollContainer: ElementRef;
  @Input() navi: boolean;
  @Output() navigatedChange = new EventEmitter();

  isSmall: boolean;
  navigated = true;
  showComponentevcar=false;
  // showComponentuplo=false;
  showComponentcateg=false;
  showComponentcatev=false;
  showRewardClaim=true;
  showComponentAddEvents=false;
  showComponentViewEvent=false;


  constructor(private service: CertificateService,private router: Router,private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit() {
    this.scrollToBottom();
    this.service.getCertificateDetailList();
    this.breakpointObserver.observe(
      [Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall]
    ).subscribe(result => {
      this.isSmall = !result.matches;
    });
  }
  onBackPressed() {
    this.router.navigate(['volunteer/details/1']);
  }
  goToViewEvents() {
    this.showComponentAddEvents = false;
    this.showComponentViewEvent=true;
    this.showRewardClaim=false;
  }
  goToDetailsevcar() {
    this.showComponentevcar = true;
    this.showComponentcatev=false;
    this.showRewardClaim=false;
    
  }
  // goToDetailsuplo() {
  //   this.showComponentuplo = true;
  //   this.showComponentcert=false;
  //   this.showComponentcateg=false;
  // }
  goToDetailscatev(){
   
    this.showComponentevcar=false;
    this.showComponentcatev=true;
    this.showRewardClaim=false;
  }
  goToAddEvents(){
    this.showComponentAddEvents = true;
    this.showComponentViewEvent=false;
    this.showRewardClaim=false;
  }

ngAfterViewChecked() {
  this.scrollToBottom();
}

private scrollToBottom(): void {
  try {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  } catch(err) {}
}
}