import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BadgesComponent} from './components/badges/badges.component';
import {BecomePartnerComponent} from './components/become-partner/become-partner.component';
import {FitnessHomeComponent} from './components/fitness-home/fitness-home.component';
import {FitnessDetailsComponent} from './components/fitness-details/fitness-details.component';
import {EnvironmentHomeComponent} from './components/environment-home/environment-home.component';
import {EnvironmentTicketListComponent} from './components/environment-ticket-list/environment-ticket-list.component';
import {EnvironmentMainComponent} from './components/environment-main/environment-main.component';
import {PostImageDetailsComponent} from './components/environment-images-data/post-image-details/post-image-details.component';
import {EnvImageCategoryComponent} from './components/environment-images-data/env-image-category/env-image-category.component';
import {EnvironmentImagesDataComponent} from './components/environment-images-data/environment-images-data.component';
import {ImageListComponent} from './components/environment-images-data/image-list/image-list.component';
import {EnvironmentAdminComponent} from './components/environment-admin/environment-admin.component';
import {
  EnvironmentPostDailytasksFormComponent
} from './components/environment-admin/environment-post-dailytasks-form/environment-post-dailytasks-form.component';
import {EnvironmentFormListComponent} from './components/environment-admin/environment-form-list/environment-form-list.component';
import {CleanIndiaComponent} from './components/clean-india/clean-india.component';
import {CleanIndiaPostImageComponent} from './components/clean-india/clean-india-post-image/clean-india-post-image.component';
import {CleanImageComponent} from './components/clean-india/clean-image/clean-image.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ChatComponent} from './components/volunteer/pages/chat/chat.component';
import {VolunteerHomeComponent} from './components/volunteer/volunteer-home/volunteer-home.component';
import {AuthGuard} from './components/volunteer/guards/auth.guard';
import {GlobalDashboardComponent} from './components/global-dashboard/global-dashboard.component';
import {UserHomeProfileComponent} from './components/user-home-profile/user-home-profile.component';
import {UserProfileDetailsFormComponent} from './components/user-profile-details-form/user-profile-details-form.component';
import {UserProfileUpdateFormComponent} from './components/user-profile-update-form/user-profile-update-form.component';
import {DonationComponent} from './components/donation/donation.component';
import {LoginvComponent} from './components/volunteer/pages/loginv/loginv.component';
import {SignupComponent} from './components/volunteer/pages/signup/signup.component';
import {CertificatesComponent} from './components/volunteer/certificates/certificates.component';
import {CertificateComponent} from './components/volunteer/certificates/certificate/certificate.component';
import {CertificateListComponent} from './components/volunteer/certificates/certificate-list/certificate-list.component';
import {CategorySelectorComponent} from './components/volunteer/certificates/category-selector/category-selector.component';
import {CouponsComponent} from './components/coupons/coupons.component';
import {CategoryEventsComponent} from './components/volunteer/events/category-events/category-events.component';
import {ImageComponent} from './components/images/image/image.component';
import {PhotolistComponent} from './components/images/photolist/photolist.component';
import {FeedComponent} from './components/images/feed/feed.component';
import {PhotouploadComponent} from './components/images/photoupload/photoupload.component';
import {CommunityComponent} from './components/community/community.component';
import {CommonModule} from '@angular/common';
import {LoginServiceService} from './services/login-service.service';
import {NgModule} from '@angular/core';
import { ImagesComponent } from './components/images/images.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'badges', component: BadgesComponent},
  {path: 'addpartner', component: BecomePartnerComponent},
  {
    path: 'fitness', children: [
      {path: 'dashboard', component: FitnessHomeComponent},
      {path: 'details/:id', component: FitnessDetailsComponent},
    ]
  },
  {
    path: 'environment', children: [
      {path: 'home', component: EnvironmentHomeComponent},
      {path: 'main/getTicket', component: EnvironmentTicketListComponent},
      {path: 'main', component: EnvironmentMainComponent},
      {path: 'main/save', component: PostImageDetailsComponent},
      {path: 'main/save/envcategory', component: EnvImageCategoryComponent},
      {
        path: 'main/save/image', component: EnvironmentImagesDataComponent, children: [
          {path: 'list', component: ImageListComponent}
        ]
      },
      {
        path: 'admin', component: EnvironmentAdminComponent,
        children: [
          {path: 'upload', component: EnvironmentPostDailytasksFormComponent},
          {
            path: 'list', component: EnvironmentFormListComponent
          }
        ]
      },
      {
        path: 'cleanindia', component: CleanIndiaComponent,
        children: [
          {path: 'upload', component: CleanIndiaPostImageComponent},
          {path: 'list', component: CleanImageComponent}
        ]
      },
    ]
  },
  {
    path: 'auth', children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  },

  {path: 'chat/:chatroomId', component: ChatComponent},
  {path: 'volunteer', component: VolunteerHomeComponent},
  // {path: 'globaldashboard', component: GlobalDashboardComponent},
  {path: 'user-profile', component: UserHomeProfileComponent, canActivate: [AuthGuard]},
  {path: 'details/update/:id', component: UserProfileDetailsFormComponent},
  {path: 'details/:id', component: UserProfileUpdateFormComponent},
  {path: 'donation', component: DonationComponent},
  {path: 'loginv', component: LoginvComponent},
  {path: 'signup', component: SignupComponent},
  { path: 'certificates', component: CertificatesComponent, children: [
      {path: 'uploadCertificate', component: CertificateComponent},
      {
        path: 'certificateList', component: CertificateListComponent, children: [
          {path: 'categorySelector', component: CategorySelectorComponent}
        ]
      }
    ]
  },
  {path: 'coupons', component: CouponsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'categoryEvents', component: CategoryEventsComponent},
  
  
  {
    path: 'image', children: [
      {path: 'previous', component: ImageComponent},
      {path: 'list', component: PhotolistComponent},
      {path: 'feed', component: FeedComponent},
      {path: 'upload', component: PhotouploadComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'categoryEvents', component: CategoryEventsComponent},
  {path: 'volunteer', component: VolunteerHomeComponent},
  {
    path: 'image', children: [
      {path: 'previous', component: ImageComponent},
      {path: 'list', component: PhotolistComponent},
      {path: 'feed', component: FeedComponent},
      {path: 'upload', component: PhotouploadComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'categoryEvents', component: CategoryEventsComponent},
  {path: 'leaderboard', component: CommunityComponent},
  
// ];
//       {path: 'dashboard', component: ImagesComponent},
//       { path: 'previous', component: ImageComponent },
//       { path: 'list', component: PhotolistComponent },
//        { path: 'feed', component: FeedComponent },
//       {path:'upload',component:PhotouploadComponent}
//     ]},
//     {path: 'login',component:LoginComponent},
//     {path:'register',component:RegisterComponent},
//     {path: 'categoryEvents', component: CategoryEventsComponent},
    

    

// {path:'leaderboard',component:CommunityComponent}
// ]
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginServiceService],
  exports: [RouterModule]
})

export class AppRoutingModule {
  message = 0;

  receiveMessage($event) {
    this.message = $event;
    console.log(this.message);
  }
}
