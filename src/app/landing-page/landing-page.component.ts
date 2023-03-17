import { Component } from '@angular/core';
import { faTwitch, faYoutube, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  faTwitch = faTwitch;
  faYoutube = faYoutube;
  faPatreon = faPatreon;
  faCaretDown = faCaretDown;
}
