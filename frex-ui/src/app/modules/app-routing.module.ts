import {CommunityComponent} from '../components/community/community.component';
import {RegisterComponent} from '../components/register/register.component';
import {LoginComponent} from '../components/login/login.component';
import {LoginServiceService} from '../services/login-service.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserHomeProfileComponent} from '../components/user-home-profile/user-home-profile.component';
import {HomeComponent} from '../components/home/home.component';
import {BecomePartnerComponent} from '../components/become-partner/become-partner.component';
import {FitnessHomeComponent} from '../components/fitness-home/fitness-home.component';
import {EnvironmentTicketListComponent} from '../components/environment-ticket-list/environment-ticket-list.component';
import {EnvironmentMainComponent} from '../components/environment-main/environment-main.component';
import {UserProfileDetailsFormComponent} from '../components/user-profile-details-form/user-profile-details-form.component';
import {UserProfileUpdateFormComponent} from '../components/user-profile-update-form/user-profile-update-form.component';
import {DonationComponent} from '../components/donation/donation.component';
import {EnvironmentHomeComponent} from '../components/environment-home/environment-home.component';
import {PostImageDetailsComponent} from '../components/environment-images-data/post-image-details/post-image-details.component';
import {EnvironmentImagesDataComponent} from '../components/environment-images-data/environment-images-data.component';
import {ImageListComponent} from '../components/environment-images-data/image-list/image-list.component';
import {EnvImageCategoryComponent} from '../components/environment-images-data/env-image-category/env-image-category.component';
import {CouponsComponent} from '../components/coupons/coupons.component';
import {EnvironmentAdminComponent} from '../components/environment-admin/environment-admin.component';
import {EnvironmentPostDailytasksFormComponent} from '../components/environment-admin/environment-post-dailytasks-form/environment-post-dailytasks-form.component';
import {EnvironmentFormListComponent} from '../components/environment-admin/environment-form-list/environment-form-list.component';
import {CleanIndiaComponent} from '../components/clean-india/clean-india.component';
import {CleanIndiaPostImageComponent} from '../components/clean-india/clean-india-post-image/clean-india-post-image.component';
import {CleanImageComponent} from '../components/clean-india/clean-image/clean-image.component';
import {ImagesComponent} from '../components/images/images.component';
import {ImageComponent} from '../components/images/image/image.component';
import {PhotolistComponent} from '../components/images/photolist/photolist.component';
import {FeedComponent} from '../components/images/feed/feed.component';
import {PhotouploadComponent} from '../components/images/photoupload/photoupload.component';

import {CertificatesComponent} from '../components/volunteer/certificates/certificates.component';
import {CertificateComponent} from '../components/volunteer/certificates/certificate/certificate.component';
import {CertificateListComponent} from '../components/volunteer/certificates/certificate-list/certificate-list.component';
import {CategorySelectorComponent} from '../components/volunteer/certificates/category-selector/category-selector.component';
import {SignupComponent} from '../components/volunteer/pages/signup/signup.component';
import {ChatComponent} from '../components/volunteer/pages/chat/chat.component';
import {LoginvComponent} from '../components/volunteer/pages/loginv/loginv.component';
import {CategoryEventsComponent} from '../components/volunteer/events/category-events/category-events.component';

import {VolunteerHomeComponent} from '../components/volunteer/volunteer-home/volunteer-home.component';
import {GlobalDashboardComponent} from '../components/global-dashboard/global-dashboard.component';
import {FitnessDetailsComponent} from '../components/fitness-details/fitness-details.component';
import {VolunteerDetailsComponent} from '../components/volunteer/volunteer-details/volunteer-details.component';
import {EventsComponent} from '../components/volunteer/events/events.component';
import {BadgesComponent} from '../components/badges/badges.component';
import {EventCardComponent} from '../components/volunteer/events/event-cards/event-card.component';
import {PhotographyHomeComponent} from '../components/photography-home/photography-home.component';
import {FitnessPickActivityComponent} from '../components/fitness-pick-activity/fitness-pick-activity.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'photography/dashboard', component: PhotographyHomeComponent},

  {path: 'addpartner', component: BecomePartnerComponent},
  {
    path: 'image', children: [
      {path: 'dashboard', component: ImagesComponent},
      {path: 'previous', component: ImageComponent},
      {path: 'list', component: PhotolistComponent},
      {path: 'feed', component: FeedComponent},
      {path: 'upload', component: PhotouploadComponent}
    ]
  },
  {path: 'badges', component: BadgesComponent},
  {
    path: 'fitness', children: [
      {path: 'dashboard', component: FitnessHomeComponent},
      {path: 'details/:activity', component: FitnessDetailsComponent},
      {path: 'pickActivity', component: FitnessPickActivityComponent}
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

          },
          {path: 'categoryEvents', component: CategoryEventsComponent},

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

  {path: 'globaldashboard', component: GlobalDashboardComponent},
  {path: 'user-profile', component: UserHomeProfileComponent},
  {path: 'details/update/:id', component: UserProfileDetailsFormComponent},
  {path: 'details/:id', component: UserProfileUpdateFormComponent},
  {path: 'donation', component: DonationComponent},
  {path: 'loginv', component: LoginvComponent},
  {path: 'signup', component: SignupComponent},

  {path: 'coupons', component: CouponsComponent},
  {path: 'xyz', component: EnvironmentHomeComponent},
  {path: 'coupons', component: CouponsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'eventCards', component: EventCardComponent},
  {
    path: 'volunteer', children: [
      {path: 'dashboard', component: VolunteerHomeComponent},
      {path: 'details/:activity', component: VolunteerDetailsComponent},
      {path: 'certificates', component: CertificatesComponent},
      {path: 'events', component: EventsComponent},
      {path: 'uploadCertificate', component: CertificateComponent},
      {
        path: 'certificateList', component: CertificateListComponent, children: [
          {path: 'categorySelector', component: CategorySelectorComponent}
        ]
      }
    ]
  },
  {
    path: 'leaderboard', component: CommunityComponent
  }


];


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
