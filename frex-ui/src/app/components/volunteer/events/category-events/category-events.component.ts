import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {EventsService} from '../../shared/events.service';

@Component({
  selector: 'app-category-events',
  templateUrl: './category-events.component.html',
  styleUrls: ['./category-events.component.scss']
})
export class CategoryEventsComponent implements OnInit {


  eventSrc: string;
  selectedEvent: any = null;
  isSubmitted: boolean;

  constructor(private storage: AngularFireStorage, private service: EventsService) { }

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

  ngOnInit() {
    this.service.getEventDetailList();
    this.resetForm();
  }


  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.eventSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedEvent = event.target.files[0];
    } else {
      this.eventSrc = '/assets/img/image_placeholder.png';
      this.selectedEvent = null;
    }
  }


  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {

      // tslint:disable-next-line:prefer-const
      let filePath = `${formValue.category}/${this.selectedEvent.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedEvent).snapshotChanges().pipe(
        finalize(() => {

          fileRef.getDownloadURL().subscribe((url) => {formValue.eventUrl = url;
                                                       this.service.insertEventDetails(formValue);
                                                       this.resetForm();
          });
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate.controls;
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      eventUrl: '',
      category: 'Public Health'
    });
    this.eventSrc = ' /assets/img/image_placeholder.png';
    this.selectedEvent = null;
    this.isSubmitted = false;
  }




}
