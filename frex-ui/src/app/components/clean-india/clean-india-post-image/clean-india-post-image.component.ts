import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CleanIndiaService } from 'src/app/services/clean-india.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clean-india-post-image',
  templateUrl: './clean-india-post-image.component.html',
  styleUrls: ['./clean-india-post-image.component.scss']
})
export class CleanIndiaPostImageComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  });

  constructor(private storage: AngularFireStorage, private service: CleanIndiaService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = '../../../assets/up.svg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      const filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue.imageUrl = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          });
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      name: '',
      imageUrl: '',
      description: ''
    });
    this.imgSrc = '../../../assets/up.svg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
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
  activity = 'Activity related to Environment';
  private activityId: string;
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
