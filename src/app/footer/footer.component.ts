import { Component } from '@angular/core';
import { faTwitch, faYoutube, faPatreon, faLinkedin, faDiscord, faReddit, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Router } from '@angular/router';
import { ScreenWidthService } from '../screen-width.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  faTwitch = faTwitch;
  faYoutube = faYoutube;
  faPatreon = faPatreon;
  faLinkedIn = faLinkedin;
  faDiscord = faDiscord;
  faReddit = faReddit;
  faTiktok = faTiktok;
  constructor(private dialog: MatDialog, private router: Router,
    private screenWidthService: ScreenWidthService) {}

  openDialog() {
    // Variable width because of device widths. 100% for mobile 33% for larger screens.
    const widthVal = this.screenWidthService.isGreaterThanThreshold('md') ? '33%' : '100%'
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: widthVal,
      enterAnimationDuration: 600,
      exitAnimationDuration: 600
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  redirectToTwitchChannel() {
    window.location.href = 'https://mobile.twitch.tv/'
  }
}
