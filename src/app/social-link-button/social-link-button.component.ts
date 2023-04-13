import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { ScreenWidthService } from '../screen-width.service';

@Component({
  selector: 'app-social-link-button',
  templateUrl: './social-link-button.component.html',
  styleUrls: ['./social-link-button.component.sass']
})
export class SocialLinkButtonComponent {

  @Input() title!: string;
  @Input() platform!: IconDefinition;
  @Input() width!: number;

  isDesktop = true
  constructor(screenWidthService: ScreenWidthService) {
    this.isDesktop = screenWidthService.getIsLargeScreen()
  }

  ngOnInit() {
    this.width = this.isDesktop ? 8 : 75;
  }
}
