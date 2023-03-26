import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'podcast-website';
  isLargeScreen = true;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isLargeScreen = window.innerWidth > 768; //Adjust breakpoint as needed
  }
  ngOnInit() {
    this.isLargeScreen = window.innerWidth > 768;
  }
}

