import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitch, faYoutube, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { timer } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass'],
  animations: [
    trigger('slideIn', [
      state('hidden', style({
        //transform: 'translateX(-1000%)'
      })),
      state('visible', style({
        //transform: 'translateX(-0%)'
      })),
      transition('hidden => visible', animate('1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')),
    ])
  ]
})
export class LandingPageComponent implements OnInit {
  faCaretDown = faCaretDown;
  faTwitch = faTwitch;
  faYoutube = faYoutube;
  faPatreon = faPatreon;
  slideInState = 'hidden'

  ngOnInit(): void {
    setTimeout(() => {
      this.slideInContainer();
    }, 3000)
  }

  slideInContainer() {
    this.slideInState = "visible";
  }
}
