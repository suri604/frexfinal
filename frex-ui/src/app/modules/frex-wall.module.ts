import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatComponent} from '../components/volunteer/pages/chat/chat.component';
import {ChatInputComponent} from '../components/volunteer/pages/chat/chatComponents/chat-input/chat-input.component';
import {ChatMessageComponent} from '../components/volunteer/pages/chat/chatComponents/chat-message/chat-message.component';
import {ChatroomListComponent} from '../components/volunteer/pages/chat/chatComponents/chatroom-list/chatroom-list.component';
import {ChatroomTitleBarComponent} from '../components/volunteer/pages/chat/chatComponents/chatroom-title-bar/chatroom-title-bar.component';
import {ChatroomWindowComponent} from '../components/volunteer/pages/chat/chatComponents/chatroom-window/chatroom-window.component';
import {AngularMaterialModule} from './angular-material.module';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarvComponent} from '../components/volunteer/navbarv/navbarv.component';
import {VolunteerDashboardComponent} from '../components/volunteer/volunteer-dashboard/volunteer-dashboard.component';
import {VolunteerFocusComponent} from '../components/volunteer/volunteer-focus/volunteer-focus.component';
import {VolunteerHomeComponent} from '../components/volunteer/volunteer-home/volunteer-home.component';
import {LoginvComponent} from '../components/volunteer/pages/loginv/loginv.component';
import {NavBarComponent} from '../components/nav-bar/nav-bar.component';
import {CategoryEventsComponent} from '../components/volunteer/events/category-events/category-events.component';
import {CategorySelectorComponent} from '../components/volunteer/certificates/category-selector/category-selector.component';
import {CertificateComponent} from '../components/volunteer/certificates/certificate/certificate.component';
import {CertificateListComponent} from '../components/volunteer/certificates/certificate-list/certificate-list.component';
import {CertificatesComponent} from '../components/volunteer/certificates/certificates.component';
import {CouponsComponent} from '../components/coupons/coupons.component';
import { EventCardComponent } from '../components/volunteer/events/event-cards/event-card.component';
import { EventsComponent } from '../components/volunteer/events/events.component';
import { VolunteerDetailsComponent } from '../components/volunteer/volunteer-details/volunteer-details.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirebaseModule } from './angular-firebase.module';


@NgModule({
  declarations: [
    ChatComponent,
    ChatComponent,
    ChatComponent,
    ChatInputComponent,
    ChatInputComponent,
    ChatMessageComponent,
    ChatMessageComponent,
    ChatroomListComponent,
    ChatroomListComponent,
    ChatroomTitleBarComponent,
    ChatroomTitleBarComponent,
    ChatroomWindowComponent,
    ChatroomWindowComponent,
    NavbarvComponent,
    VolunteerDashboardComponent,
    VolunteerFocusComponent,
    VolunteerHomeComponent,
    LoginvComponent,
    CategoryEventsComponent,
    CategorySelectorComponent,
    CertificateComponent,
    CertificateListComponent,
    CertificatesComponent,
    EventCardComponent,EventsComponent,
    VolunteerDetailsComponent,
    CategoryEventsComponent,
    EventsComponent
    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirebaseModule 
  ]
})
export class FrexWallModule { }
