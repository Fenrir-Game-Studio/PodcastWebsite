import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-segmented-stat-bar',
  templateUrl: './segmented-stat-bar.component.html',
  styleUrls: ['./segmented-stat-bar.component.sass']
})
export class SegmentedStatBarComponent {
  @Input() numberFilled: number;

  items = [{}, {}, {}, {}, {}]

  constructor() {
    this.numberFilled = 0
  }
}
