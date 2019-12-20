// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-certificates',
//   templateUrl: './certificates.component.html',
//   styleUrls: ['./certificates.component.scss']
// })
// export class CertificatesComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CertificateService } from '../shared/certificate.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  @ViewChild('scrollContainer', {static: false}) private scrollContainer: ElementRef;
  @Input() navi: boolean;
  @Output() navigatedChange = new EventEmitter();

  isSmall: boolean;
  navigated = true;
  showComponentcert=false;
  showComponentuplo=false;
  showComponentcateg=false;
  showRewardClaim=true;

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
  goToDetailscert() {
    this.showComponentcert = true;
    this.showComponentuplo=false;
    this.showComponentcateg=false;
    this.showRewardClaim=false;
  }
  goToDetailsuplo() {
    this.showComponentuplo = true;
    this.showComponentcert=false;
    this.showComponentcateg=false;
    this.showRewardClaim=false;
  }
  goToDetailscategory(){
    this.showComponentuplo = false;
    this.showComponentcert=false;
    this.showComponentcateg=true;
    this.showRewardClaim=false;
  }
  goToDetailsevents(){
    this.router.navigate(['volunteer/events']);
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
