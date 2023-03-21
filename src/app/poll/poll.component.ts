import { Component } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.sass']
})
export class PollComponent {
  faClock = faClock
}
