import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-social-link-button',
  templateUrl: './social-link-button.component.html',
  styleUrls: ['./social-link-button.component.sass']
})
export class SocialLinkButtonComponent {

  @Input() title!: string;
  @Input() platform!: IconDefinition;
}
