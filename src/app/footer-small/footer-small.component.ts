import { Component } from '@angular/core';
import { faTwitch, faYoutube, faPatreon, faLinkedin, faDiscord, faReddit, faTiktok } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer-small',
  templateUrl: './footer-small.component.html',
  styleUrls: ['./footer-small.component.sass']
})
export class FooterSmallComponent {
  faTwitch = faTwitch;
  faYoutube = faYoutube;
  faPatreon = faPatreon;
  faLinkedIn = faLinkedin;
  faDiscord = faDiscord;
  faReddit = faReddit;
  faTiktok = faTiktok;
}
