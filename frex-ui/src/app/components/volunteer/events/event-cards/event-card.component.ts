// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-event-cards',
//   templateUrl: './event-cards.component.html',
//   styleUrls: ['./event-cards.component.scss']
// })
// export class EventCardsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import {Component, OnInit} from '@angular/core';

import {EventCardService} from '../../shared/event-card.service';
import {CertificateService} from '../../shared/certificate.service';
import {EventsService} from '../../shared/events.service';
import 'rxjs-compat/add/operator/do';
import {finalize} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-event-card',
  styleUrls: ['./event-card.component.scss'],
  templateUrl: './event-card.component.html'
})

export class EventCardComponent implements OnInit {

  constructor(private service: EventsService, private eventCardService: EventCardService) { }

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    eventUrl: new FormControl('', Validators.required),
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    eventDescription: new FormControl(''),
    time: new FormControl('')
  });

  certificateList: any;
  rowIndexArray: any;

  //

  //
  totalCount: number;
  //
  pageSize = 3;
  //
  currentCount = 0;
  //
  previousCount = 0;
  //
  isLeftVisible = false;

  isRightVisible = true;

  ngOnInit() {
    this.service.getEventDetailList();
    this.service.eventDetailList.snapshotChanges()
      .subscribe(
      list => {
        this.certificateList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.certificateList.length + 1) / 3)).keys());
      }
    );
  }
  //
  //
  //
  // constructor(private eventCardService: EventCardService, private eventService: EventsService) {
  // }
  //
  // ngOnInit() {
  //   this.event = this.eventService.getEventDetailList();
  //   this.totalCount = this.events.eventcount;
  //   this.eventCardService.getFirstPage(this.user.uid, this.pageSize)
  //     .subscribe(friends => {
  //       this.events = events;
  //       const count: number = this.events.length;
  //       this.currentCount = count;
  //       this.leftArrowVisible();
  //       this.rightArrowVisible();
  //     });
  // }
  //
  onLeft(): void {
    this.previous();
  }
  //
  onRight(): void {
    this.next();
  }

  next() {
    this.eventCardService.loadNextPage(this.certificateList.category,
      this.certificateList[this.certificateList.length - 1].category,
      this.pageSize
    ).subscribe(certificateList => {
      this.certificateList = certificateList;
      const count: number = this.certificateList.length;
      this.previousCount = count - 1;
      this.currentCount += this.previousCount;
      this.leftArrowVisible();
      this.rightArrowVisible();
    });


  }


    previous() {
    this.eventCardService.loadPreviousPage(this.certificateList.category,
      this.certificateList[0].category,
      this.pageSize
    ).subscribe(certificateList => {
      this.certificateList = certificateList;
      const count: number = this.certificateList.length;
      this.currentCount -= this.previousCount;
      this.leftArrowVisible();
      this.rightArrowVisible();
    });

   }

    leftArrowVisible(): void {
         this.isLeftVisible = this.currentCount > this.pageSize;
   }

  rightArrowVisible(): void {
    this.isRightVisible = this.totalCount > this.currentCount;
  }

}
