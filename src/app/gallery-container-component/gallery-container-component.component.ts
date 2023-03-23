import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-gallery-container-component',
  templateUrl: './gallery-container-component.component.html',
  styleUrls: ['./gallery-container-component.component.sass'],
  animations: [
    trigger('resizeContainer', [
      state('false', style({
        
      })),
      state('true', style({
        height: 912
      })),
      transition('false => true', animate('600ms ease-out')),
      transition('true => false', animate('600ms ease-in')),
    ])
  ]
})
export class GalleryContainerComponentComponent {
  //images: Image[];
  expanded: boolean = false;
  cta: string = "View More"

  constructor() { }

  expandContainer() {
    this.expanded = !this.expanded;
    this.cta = this.expanded ? 'View All' : 'View More';
  }
}
