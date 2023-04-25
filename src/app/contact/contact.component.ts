import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  animations: [
    // Animations
    trigger('rotate', [
      state('normal', style({
        transform: 'rotate(0deg)',
      })),
      state('rotated', style({
        transform: 'rotate(45deg)'
        //border: '10px solid var(--podcast-orange)'
      })),
      transition('normal => rotated', animate('0.2s ease-in-out')),
      transition('rotated => normal', animate('0.2s ease-out'))
    ])
  ]
})
export class ContactComponent{
  state1 = 'normal';
  state2 = 'normal';
  state3 = 'normal';
  state4 = 'normal';

  onMouseEnter(imageNumber: number) {
    switch (imageNumber) {
      case 1:
        this.state1 = 'rotated';
        break;
      case 2:
        this.state2 = 'rotated';
        break;
      case 3:
        this.state3 = 'rotated';
        break;
      case 4:
        this.state4 = 'rotated';
        break;
    }
  }

  onMouseLeave(imageNumber: number) {
    switch (imageNumber) {
      case 1:
        this.state1 = 'normal';
        break;
      case 2:
        this.state2 = 'normal';
        break;
      case 3:
        this.state3 = 'normal';
        break;
      case 4:
        this.state4 = 'normal';
        break;
    }
  }
}