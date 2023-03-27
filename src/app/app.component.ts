import { Component, HostListener } from '@angular/core';
import { ScreenWidthService } from './screen-width.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'podcast-website';
  isLargeScreen: boolean;

  constructor(private screenWidthService: ScreenWidthService) {
    this.isLargeScreen = screenWidthService.isGreaterThanThreshold('md');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = this.screenWidthService.isGreaterThanThreshold('md');
  }
}