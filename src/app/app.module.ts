// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatList, MatListModule} from '@angular/material/list';

// Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { SocialLinkButtonComponent } from './social-link-button/social-link-button.component';
import { GalleryContainerComponentComponent } from './gallery-container-component/gallery-container-component.component';
import { SignUpButtonComponent } from './sign-up-button/sign-up-button.component';
import { PollComponent } from './poll/poll.component';
import { VideosComponent } from './videos/videos.component';
import { NavbarSmallComponent } from './navbar-small/navbar-small.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    AboutComponent,
    SocialLinkButtonComponent,
    GalleryContainerComponentComponent,
    SignUpButtonComponent,
    PollComponent,
    VideosComponent,
    NavbarSmallComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
