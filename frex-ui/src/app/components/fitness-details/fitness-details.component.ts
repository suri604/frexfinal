import {Component, Inject, OnInit} from '@angular/core';
import {DisplayService} from '../../services/display.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Options} from 'ng5-slider';
import {WeekDay} from '@angular/common';
import {GapiService} from '../../services/fitness/gapi.service';
import {GapiAuthService} from '../../services/fitness/gapi-auth.service';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {GoogleChartInterface} from 'ng2-google-charts/google-charts-interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {activities, BasicInfo, FreakInfo, week} from '../../util/fitness-activities';
import {BasicInfoService} from '../../services/fitness/basic-info.service';
import {FreakInfoService} from '../../services/fitness/freak-info.service';
import {FitInfoService} from '../../services/fitness/fit-info.service';
import {ActivityInfoService} from '../../services/fitness/activity-info.service';
import {CalorieInfoService} from '../../services/fitness/calorie-info.service';
import {TestService} from '../../services/fitness/test.service';
import {ClaimRewardsService} from '../../services/fitness/claim-rewards.service';

class DialogData {
  activityType: string;
  userId: string;
  onlyGoogleFit = false;

  constructor(activityType: string, userId: string) {
    this.activityType = activityType;
    this.userId = userId;
  }
}

@Component({
  selector: 'app-fitness-details',
  templateUrl: './fitness-details.component.html',
  styleUrls: ['./fitness-details.component.css']
})
export class FitnessDetailsComponent implements OnInit {
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
  activityId: string;
  activity: string;
  steps: number;
  calories: number;
  freakInfo: FreakInfo;
  rewards = 0;
  increase: number;

  constructor(
    private displayService: DisplayService,
    private dialog: MatDialog,
    private gapiAuthService: GapiAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private fitInfoService: FitInfoService,
    private activityInfoService: ActivityInfoService,
    private calorieInfoService: CalorieInfoService,
    private test: TestService,
    private snackBar: MatSnackBar,
    private freakInfoService: FreakInfoService,
    private rewardsService: ClaimRewardsService
  ) {
  }

  async ngOnInit() {
    this.increase = 0;
    if (!await this.test.test()) {
      await this.router.navigate(['fitness/dashboard']);
    }
    const googleFitExists: any = await this.fitInfoService.checkIfExists();
    this.route.params.subscribe(
      (params) => {
        this.activityId = params.activity;
        if (this.activityId === '3') {
          this.router.navigate(['fitness/pickActivity']);
        } else {
          this.activity = activities.get(this.activityId).name;
          const userId = localStorage.getItem('username');
          this.dialog.open(FitnessInfoDialogComponent, {
            panelClass: 'custom-dialog-container',
            data: new DialogData(this.activityId, userId)
          }).afterClosed().toPromise().then(
            async () => {
              this.delay(1000);
              if (googleFitExists.result) {
                this.calories = await this.calorieInfoService.getCaloriesForToday();
                const details: any = await this.activityInfoService.getDetailsForActivity(this.activityId);
                this.steps = details.result;
                console.log(details.result);
                const freakInfoExists: any = await this.freakInfoService.checkIfExists(userId, this.activityId);
                if (freakInfoExists.result) {
                  this.freakInfo = await this.freakInfoService.retrieveFreakInfo(userId, this.activityId);
                  this.initRewardsChart();
                  console.log('freak', this.freakInfo.frequencyInfo);
                  if (this.freakInfo.frequencyInfo.monday) {
                    this.rewardsTable.push(['Monday', 0, 0, 0]);
                  }
                  if (this.freakInfo.frequencyInfo.tuesday) {
                    this.rewardsTable.push(['Tuesday', 0, 0, 0]);
                  }
                  if (this.freakInfo.frequencyInfo.wednesday) {
                    this.rewardsTable.push(['Wednesday', 0, 0, 0]);
                  }
                  if (this.freakInfo.frequencyInfo.thursday) {
                    this.rewardsTable.push(['Thursday', 0, this.calories, this.steps]);
                  }
                  if (this.freakInfo.frequencyInfo.friday) {
                    this.rewardsTable.push(['Friday', 0, 0, 0]);
                  }
                  if (this.freakInfo.frequencyInfo.saturday) {
                    this.rewardsTable.push(['Saturday', 0, 0, 0]);
                  }
                  if (this.freakInfo.frequencyInfo.sunday) {
                    this.rewardsTable.push(['Sunday', 0, 0, 0]);
                  }
                } else {
                  // this.rewardsTable.push(['Day', 'Reward Points', 'Calories', 'Distance']);
                  // for (const day of week) {
                  //   this.rewardsTable.push([day.display, Math.random() * 100 + 50, Math.random() * 100 + 50, Math.random() * 100 + 50]);
                  // }
                }
              }
            });
        }
      });
  }

  back() {
    this.router.navigate(['fitness/dashboard']).then(null);
  }

  gotoEnvironment() {
    this.router.navigate(['environment/dashboard']).then(null);
  }

  gotoVolunteer() {
    this.router.navigate(['volunteer/dashboard']).then(null);
  }

  gotoPhotography() {
    this.router.navigate(['image/feed']).then(null);
  }

  changeActivityId(activityId: number) {
    this.router.navigate(['fitness/details', activityId.toString()]).then(null);
  }

  linkWithGoogleFit() {
    const userId = localStorage.getItem('username');
    const data = new DialogData(null, userId);
    data.onlyGoogleFit = true;
    this.dialog.open(FitnessInfoDialogComponent, {
      panelClass: 'custom-dialog-container',
      data
    });
  }

  initRewardsChart() {
    this.rewardsTable = [];
    this.rewardsTable.push(['Day', 'Reward Points', 'Calories', 'Metric']);
    this.rewardsChart = {
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

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async refresh() {
    const googleFitExists: any = await this.fitInfoService.checkIfExists();
    if (googleFitExists.result) {
      this.calories = await this.calorieInfoService.getCaloriesForToday();
      const details: any = await this.activityInfoService.getDetailsForActivity(this.activityId);
      this.steps = details.result;
      console.log(details.result);
      this.delay(1000);
      this.initRewardsChart();
      if (this.freakInfo.frequencyInfo.monday) {
        this.rewardsTable.push(['Monday', 0, 0, 0]);
      }
      if (this.freakInfo.frequencyInfo.tuesday) {
        this.rewardsTable.push(['Tuesday', 0, 0, 0]);
      }
      if (this.freakInfo.frequencyInfo.wednesday) {
        this.rewardsTable.push(['Wednesday', 0, 0, 0]);
      }
      if (this.freakInfo.frequencyInfo.thursday) {
        this.rewardsTable.push(['Thursday', 0, this.calories, this.steps]);
      }
      if (this.freakInfo.frequencyInfo.friday) {
        this.rewardsTable.push(['Friday', 0, 0, 0]);
      }
      if (this.freakInfo.frequencyInfo.saturday) {
        this.rewardsTable.push(['Saturday', 0, 0, 0]);
      }
      if (this.freakInfo.frequencyInfo.sunday) {
        this.rewardsTable.push(['Sunday', 0, 0, 0]);
      }
    } else {
      const snackBarRef = this.snackBar.open('Please link with google fit', 'OK', {
        politeness: 'assertive'
      });
      snackBarRef.onAction().subscribe(
        () => {
          this.linkWithGoogleFit();
          snackBarRef.dismiss();
        });
    }
  }

  showRewardsDialog() {
    const username = localStorage.getItem('username');
    const data = new DialogData(this.activityId, username);
    const dialogRef = this.dialog.open(RewardsDialogComponent, {
      panelClass: 'custom-dialog-container',
      data
    });
    dialogRef.afterClosed().toPromise().then(
      () => {
        this.getRewardsAndUpdateData();
      }
    );
  }


  async getRewardsAndUpdateData() {
    const userId = localStorage.getItem('username');
    const response: any = await this.rewardsService.getRewardsForToday(userId, this.activityId);
    this.increase = 100;
    this.rewards = response.result;
    this.initRewardsChart();
    if (this.freakInfo.frequencyInfo.monday) {
      this.rewardsTable.push(['Monday', 0, 0, 0]);
    }
    if (this.freakInfo.frequencyInfo.tuesday) {
      this.rewardsTable.push(['Tuesday', 0, 0, 0]);
    }
    if (this.freakInfo.frequencyInfo.wednesday) {
      this.rewardsTable.push(['Wednesday', 0, 0, 0]);
    }
    if (this.freakInfo.frequencyInfo.thursday) {
      this.rewardsTable.push(['Thursday', this.rewards, this.calories, this.steps]);
    }
    if (this.freakInfo.frequencyInfo.friday) {
      this.rewardsTable.push(['Friday', 0, 0, 0]);
    }
    if (this.freakInfo.frequencyInfo.saturday) {
      this.rewardsTable.push(['Saturday', 0, 0, 0]);
    }
    if (this.freakInfo.frequencyInfo.sunday) {
      this.rewardsTable.push(['Sunday', 0, 0, 0]);
    }
  }

  goToLeaderBoard() {
    this.router.navigate(['/leaderboard']).then(null);
  }
}

@Component({
  selector: 'app-fitness-info-dialog',
  templateUrl: './info-dialog.html',
})
export class FitnessInfoDialogComponent implements OnInit {
  progress = 0;
  infoDetails = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(125)]),
    height: new FormControl(null, [Validators.required, Validators.min(50), Validators.max(300)]),
    weight: new FormControl(null, [Validators.required, Validators.min(40), Validators.max(200)]),
    gender: new FormControl(null, Validators.required)
  });
  freakDetails = new FormGroup({});
  options: Options = {
    showTicksValues: true,
    getPointerColor: (): string => {
      return '#673AB7';
    },
    stepsArray: [
      {value: 1, legend: 'Beginner'},
      {value: 2},
      {value: 3, legend: 'Fairly Skilled'},
      {value: 4},
      {value: 5, legend: 'Average'},
      {value: 6},
      {value: 7, legend: 'Good'},
      {value: 8},
      {value: 9, legend: 'Excellent'},
      {value: 10}
    ]
  };
  activity: string;
  week = [
    {value: WeekDay.Monday, display: 'M', selected: true},
    {value: WeekDay.Tuesday, display: 'Tu', selected: true},
    {value: WeekDay.Wednesday, display: 'W', selected: true},
    {value: WeekDay.Thursday, display: 'Th', selected: true},
    {value: WeekDay.Friday, display: 'F', selected: true},
    {value: WeekDay.Saturday, display: 'Sa', selected: true},
    {value: WeekDay.Sunday, display: 'Su', selected: true}
  ];
  frequency = '0';
  value = 5;
  errors: string;
  loadingInfo = true;
  googleFitInfo = false;
  freakInfo = false;
  basicInfo = false;
  userId: string;
  private activityType: string;
  timeSpent: number;

  constructor(
    public dialogRef: MatDialogRef<FitnessInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData,
    private gapiAuthService: GapiAuthService,
    private gapiService: GapiService,
    private basicInfoService: BasicInfoService,
    private freakInfoService: FreakInfoService,
    private fitInfoService: FitInfoService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  async ngOnInit() {
    this.gapiService.init();
    await this.delay(2000);
    if (this.data.onlyGoogleFit) {
      this.googleFitInfo = true;
      this.loadingInfo = false;
      this.freakInfo = false;
      this.basicInfo = false;
    } else {
      this.userId = this.data.userId;
      this.activityType = this.data.activityType;
      this.activity = activities.get(this.activityType).name;
      // Todo remove for production
      console.warn(this.userId);
      const googleFitInfoExists: any = await this.fitInfoService.checkIfExists();
      console.log(googleFitInfoExists);
      if (!googleFitInfoExists.result) {
        this.googleFitInfo = true;
        this.loadingInfo = false;
        console.warn('google fit not linked');
      } else {
        console.warn('google fit linked');
        this.loadingInfo = true;
        await this.delay(100);
        const basicInfoExists: any = await this.basicInfoService.checkIfExists(this.userId);
        console.warn('info exists', basicInfoExists.result);
        this.loadingInfo = false;
        this.googleFitInfo = false;
        this.basicInfo = !basicInfoExists.result;
        if (this.basicInfo === false) {
          this.loadingInfo = true;
          await this.delay(100);
          const freakInfoExists: any = await this.freakInfoService.checkIfExists(this.userId, this.activityType);
          if (!freakInfoExists.result) {
            this.freakInfo = true;
            this.loadingInfo = false;
            this.basicInfo = false;
            this.googleFitInfo = false;
          } else {
            this.onNoClick();
          }
          console.warn('Freak Info', freakInfoExists);
        }
      }
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  toggleBtn(value: number, data: boolean) {
    if (this.frequency === '2') {
      if (value === 0) {
        value = 7;
      }
      this.week[value - 1].selected = data;
    }
  }

  valueChanged() {
    if (this.frequency === '0') {
      for (const day of this.week) {
        day.selected = true;
      }
    } else if (this.frequency === '1') {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.week.length; i++) {
        this.week[i].selected = !(this.week[i].value === WeekDay.Sunday || this.week[i].value === WeekDay.Saturday);
      }
    }
  }

  showGoogleFitDetails() {
    this.freakInfo = false;
    this.basicInfo = false;
    this.googleFitInfo = true;
    this.progress = 66;
  }

  showFreakDetails() {
    if (this.infoDetails.invalid) {
      const error = this.getFormValidationErrors(this.infoDetails)[0];
      this.snackBar.open(`error: ${error.control} ${error.error} invalid`, null, {
        duration: 500
      });
    } else {
      this.saveFormData();
      this.basicInfo = false;
      this.freakInfo = true;
      this.googleFitInfo = false;
      this.progress = 33;
    }
  }


  linkWithGoogleFit() {
    this.gapiAuthService.signIn().then(
      () => {
        if (this.data.onlyGoogleFit) {
          this.onNoClick();
        } else {
          this.basicInfo = true;
          this.progress = 33;
          this.freakInfo = false;
          this.googleFitInfo = false;
          this.infoDetails.controls.email.setValue(localStorage.getItem('fit_email'));
        }
      }
    );
  }

  getFormValidationErrors(form: FormGroup): any[] {
    const result = [];
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          result.push({
            control: key,
            error: keyError,
            value: controlErrors[keyError]
          });
        });
      }
    });
    return result;
  }


  async saveFormData() {
    const basicInfo: BasicInfo = this.infoDetails.value;
    basicInfo.userId = this.userId;
    const response = await this.basicInfoService.saveBasicInfo(basicInfo);
    console.warn(response);
  }

  saveFreakInfo() {
    if (this.timeSpent == null) {
      this.snackBar.open('please let us know how much time you spend on this activity weekly!!', null, {duration: 500});
    } else if (this.timeSpent > 84) {
      this.snackBar.open('time spent cant be more than 84hours in a week', null, {duration: 500});
    } else if (this.timeSpent < 0) {
      this.snackBar.open('time spent cant be negative', null, {duration: 500});
    } else {
      const frequencyInfo: any = {};
      for (let i = 0; i < 7; i++) {
        frequencyInfo[week[i].display.toLowerCase()] = this.week[i].selected;
      }
      const freakInfo: FreakInfo = {
        userId: this.userId,
        activityType: this.activityType,
        timeSpent: this.timeSpent,
        rating: this.value,
        frequencyInfo
      };
      this.freakInfoService.saveFreakInfo(freakInfo).then(
        (response) => {
          // todo handle all the possibilities
          this.snackBar.open('upload successful', null, {duration: 1000});
          this.onNoClick();
        }
      ).catch(
        (error) => {
          this.snackBar.open(`couldn't upload: ${error}`, null, {duration: 1000});
        }
      );
    }
  }
}

@Component({
  selector: 'app-rewards-dialog',
  templateUrl: 'rewards-dialog.html',
})
export class RewardsDialogComponent implements OnInit {
  loading = true;
  rewards: string;

  constructor(
    public dialogRef: MatDialogRef<RewardsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private rewardsService: ClaimRewardsService
  ) {
  }

  async ngOnInit() {
    const response: any = await this.rewardsService.getRewardsForToday(this.data.userId, this.data.activityType);
    await this.delay(4000);
    this.loading = false;
    this.rewards = response.result;
    console.log(this.rewards);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
