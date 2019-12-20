import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.css']
})
export class VolunteerDetailsComponent implements OnInit {
  
  @Input() navigated: boolean;
  @Output() navigatedChange = new EventEmitter();
  // basicInfo = false;
  // progress = 0;
  // freakInfo = false;
  // infoDetails = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(125)]),
  //   height: new FormControl(null, [Validators.required, Validators.min(50), Validators.max(300)]),
  //   weight: new FormControl(null, [Validators.required, Validators.min(40), Validators.max(200)]),
  //   gender: new FormControl(null, Validators.required)
  // });
  // options: Options = {
  //   showTicksValues: true,
  //   getPointerColor: (): string => {
  //     return '#673AB7';
  //   },
  //   stepsArray: [
  //     {value: 1, legend: 'Beginner'},
  //     {value: 2},
  //     {value: 3, legend: 'Fairly Skilled'},
  //     {value: 4},
  //     {value: 5, legend: 'Average'},
  //     {value: 6},
  //     {value: 7, legend: 'Good'},
  //     {value: 8},
  //     {value: 9, legend: 'Excellent'},
  //     {value: 10}
  //   ]
  // };
  // activity = 'running';
  // week = [
  //   {value: WeekDay.Monday, display: 'M', selected: true},
  //   {value: WeekDay.Tuesday, display: 'Tu', selected: true},
  //   {value: WeekDay.Wednesday, display: 'W', selected: true},
  //   {value: WeekDay.Thursday, display: 'Th', selected: true},
  //   {value: WeekDay.Friday, display: 'F', selected: true},
  //   {value: WeekDay.Saturday, display: 'Sa', selected: true},
  //   {value: WeekDay.Sunday, display: 'Su', selected: true}
  // ];
  // frequency = '0';
  // googleFitInfo = true;
  // value = 5;
  // errors: string;

  // constructor(
  //   public dialogRef: MatDialogRef<FitnessInfoDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA)
  //   // public data: DialogData,
  //   private gapiAuthService: GapiAuthService,
  //   private gapiService: GapiService,
  //   private snackBar: MatSnackBar
  // ) {
  // }

  // ngOnInit(): void {
  //   this.gapiService.init();
  // }


  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  // toggleBtn(value: number, data: boolean) {
  //   if (this.frequency === '2') {
  //     if (value === 0) {
  //       value = 7;
  //     }
  //     this.week[value - 1].selected = data;
  //   }
  // }

  // valueChanged() {
  //   if (this.frequency === '0') {
  //     for (const day of this.week) {
  //       day.selected = true;
  //     }
  //   } else if (this.frequency === '1') {
  //     // tslint:disable-next-line:prefer-for-of
  //     for (let i = 0; i < this.week.length; i++) {
  //       this.week[i].selected = !(this.week[i].value === WeekDay.Sunday || this.week[i].value === WeekDay.Saturday);
  //     }
  //   }
  // }

  // showGoogleFitDetails() {
  //   this.freakInfo = false;
  //   this.basicInfo = false;
  //   this.googleFitInfo = true;
  //   this.progress = 66;
  // }

  // showFreakDetails() {
  //   if (this.infoDetails.invalid) {
  //     const error = this.getFormValidationErrors(this.infoDetails)[0];
  //     this.snackBar.open(`error: ${error.control} ${error.error} invalid`, null, {
  //       duration: 100
  //     });
  //   } else {
  //     this.basicInfo = false;
  //     this.freakInfo = true;
  //     this.googleFitInfo = false;
  //     this.progress = 33;
  //   }
  // }

  // linkWithGoogleFit() {
  //   this.gapiAuthService.signIn().then(
  //     () => {
  //       this.basicInfo = true;
  //       this.progress = 33;
  //       this.freakInfo = false;
  //       this.googleFitInfo = false;
  //     }
  //   ).then(
  //     () => this.infoDetails.controls.email.setValue(localStorage.getItem('fit_email'))
  //   );
  // }

  // getFormValidationErrors(form: FormGroup): any[] {
  //   const result = [];
  //   Object.keys(form.controls).forEach(key => {

  //     const controlErrors: ValidationErrors = form.get(key).errors;
  //     if (controlErrors) {
  //       Object.keys(controlErrors).forEach(keyError => {
  //         result.push({
  //           control: key,
  //           error: keyError,
  //           value: controlErrors[keyError]
  //         });
  //       });
  //     }
  //   });
  //   return result;
  // }
  
  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onBackPressed() {
    this.router.navigate(['volunteer/dashboard']);
  }

  goToDetailsCertificates() {
    this.router.navigate(['volunteer/certificates']);
  }

  goToDetailsEvents() {
    this.router.navigate(['volunteer/events']);
  }


}