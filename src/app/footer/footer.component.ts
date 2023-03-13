import { Component } from '@angular/core';
import { faTwitch, faYoutube, faPatreon, faLinkedin, faDiscord, faReddit, faTiktok } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  faTwitch = faTwitch;
  faYouTube = faYoutube;
  faPatreon = faPatreon;
  faLinkedIn = faLinkedin;
  faDiscord = faDiscord;
  faReddit = faReddit;
  faTiktok = faTiktok;
}
