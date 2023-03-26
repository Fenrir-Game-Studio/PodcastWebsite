import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitch, faYoutube, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass'],
  animations: [
    trigger('slideIn', [
      state('hidden', style({
        transform: 'translateX(-1000%)'
      })),
      state('visible', style({
        transform: 'translateX(-0%)'
      })),
      transition('hidden => visible', animate('1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')),
      transition('visible => hidden', animate('1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')),
    ]),
    trigger ('bob', [
      state ('up', style({
        transform: 'translateY(-10px)'
      })),
      state ('down', style({
        transform: 'translateY(0)'
      })),
      transition ('up <=> down', animate ('1.0s ease-in-out'))
    ])
  ]
})
export class LandingPageComponent implements OnInit {
  faCaretDown = faCaretDown;
  faTwitch = faTwitch;
  faYoutube = faYoutube;
  faPatreon = faPatreon;
  slideInState = 'hidden'
  bobState = 'down'

  ngOnInit(): void {
    setTimeout(() => {
      this.slideInContainer();
    }, 3000)
    setInterval( () => {
      this.bobState = this.bobState === 'down' ? 'up' : 'down';
    }, 1000)
  }

  slideInContainer() {
    this.slideInState = "visible";
  }
}
