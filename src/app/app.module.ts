// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    PollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
