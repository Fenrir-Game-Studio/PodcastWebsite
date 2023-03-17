import { Component } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitch, faYoutube, faPatreon } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  faCaretDown = faCaretDown;
  faTwitch = faTwitch;
  faYoutube = faYoutube;
  faPatreon = faPatreon;
}
