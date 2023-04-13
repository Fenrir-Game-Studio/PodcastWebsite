import { Component, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faClock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.sass'],
})


export class PollComponent {
  faClock = faClock
  dialogRef?: MatDialogRef<PollComponent>
  
  constructor(@Optional() dialogRef: MatDialogRef<PollComponent>) {
    if (dialogRef) {
      this.dialogRef = dialogRef
    }
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (this.dialogRef) {
      this.dialogRef.close()
    } 
  }
}

