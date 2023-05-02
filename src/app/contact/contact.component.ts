import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactFormSponsorComponent } from '../contact-form-sponsor/contact-form-sponsor.component';
import { ContactFormFeedbackComponent } from '../contact-form-feedback/contact-form-feedback.component';
import { ContactFormCollabComponent } from '../contact-form-collab/contact-form-collab.component';

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
export class ContactComponent {
  state1 = 'normal';
  state2 = 'normal';
  state3 = 'normal';
  state4 = 'normal';

  constructor(private dialog: MatDialog) { }

  openDialogTech() {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: `50%`,
      enterAnimationDuration: 600,
      exitAnimationDuration: 600
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openDialogSponsor() {
    const dialogRef = this.dialog.open(ContactFormSponsorComponent, {
      width: `50%`,
      enterAnimationDuration: 600,
      exitAnimationDuration: 600
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openDialogFeedback() {
    const dialogRef = this.dialog.open(ContactFormFeedbackComponent, {
      width: `50%`,
      enterAnimationDuration: 600,
      exitAnimationDuration: 600
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openDialogCollab() {
    const dialogRef = this.dialog.open(ContactFormCollabComponent, {
      width: `50%`,
      enterAnimationDuration: 600,
      exitAnimationDuration: 600
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

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