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
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChip, MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

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
import { ScreenWidthService } from './screen-width.service';
import { FooterSmallComponent } from './footer-small/footer-small.component';
import { BlogSearchBarComponent } from './blog-search-bar/blog-search-bar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactFormSponsorComponent } from './contact-form-sponsor/contact-form-sponsor.component';
import { ContactFormFeedbackComponent } from './contact-form-feedback/contact-form-feedback.component';
import { ContactFormCollabComponent } from './contact-form-collab/contact-form-collab.component';
import { SegmentedStatBarComponent } from './segmented-stat-bar/segmented-stat-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

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
    MyProfileComponent,
    FooterSmallComponent,
    BlogSearchBarComponent,
    BlogPageComponent,
    ContactFormComponent,
    ContactFormSponsorComponent,
    ContactFormFeedbackComponent,
    ContactFormCollabComponent,
    SegmentedStatBarComponent,
    SignUpComponent,
    LoginComponent
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
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatChipsModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [ScreenWidthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
