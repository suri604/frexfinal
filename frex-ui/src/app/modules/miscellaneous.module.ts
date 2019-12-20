import { DonationComponent } from './../components/donation/donation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BadgesComponent} from '../components/badges/badges.component';
import {FooterComponent} from '../components/footer/footer.component';
import {HomeComponent} from '../components/home/home.component';
import {BecomePartnerComponent} from '../components/become-partner/become-partner.component';
import {CouponsComponent} from '../components/coupons/coupons.component';
import {DocPipe} from '../util/doc.pipe';
import {FeedComponent} from '../components/images/feed/feed.component';
import {GlobalDashboardComponent} from '../components/global-dashboard/global-dashboard.component';
import {LoginComponent} from '../components/login/login.component';
import {PhotolistComponent} from '../components/images/photolist/photolist.component';
import {SignupComponent} from '../components/volunteer/pages/signup/signup.component';
import {UserHomeProfileComponent} from '../components/user-home-profile/user-home-profile.component';
import {NavBarComponent} from '../components/nav-bar/nav-bar.component';
import {RegisterComponent} from '../components/register/register.component';
import {AngularMaterialModule} from './angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {CommunityComponent} from '../components/community/community.component';





@NgModule({
  declarations: [
    BadgesComponent,
    FooterComponent,
    HomeComponent,
    BecomePartnerComponent,
    CouponsComponent,
    FooterComponent,
    GlobalDashboardComponent,
    LoginComponent,
    RegisterComponent,
    SignupComponent,
    NavBarComponent,
    UserHomeProfileComponent,
    DonationComponent,
    CommunityComponent
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    RouterModule,
    FlexModule,
  ]
})
export class MiscellaneousModule { }
