import { Component, HostBinding } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faClock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.sass'],
})

export class PollComponent {
  faClock = faClock
  
  constructor(private dialogRef: MatDialogRef<PollComponent>) {}

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log(event)
    this.dialogRef.close()
  }
}

