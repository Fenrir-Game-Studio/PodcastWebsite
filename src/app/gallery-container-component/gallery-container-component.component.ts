import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-gallery-container-component',
  templateUrl: './gallery-container-component.component.html',
  styleUrls: ['./gallery-container-component.component.sass'],
  animations: [
    trigger('expandContainer', [
      state('collapsed', style({
        height: '353px',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
      })),
      transition('collapsed => expanded', [
        animate('500ms ease-out', style({
          height: '*'
        }))
      ]),
      transition('expanded => collapsed', [
        animate('500ms ease-in-out', style({
          height: '353px',
          overflow: 'hidden'
        }))
      ])
    ])
  ]
})
export class GalleryContainerComponentComponent {
  expanded: boolean = false;
  cta: string = "View More"
  numItemsToShow = 4;
  numToExpandWith = 8
  maxItemsPerRow = 4
  galleryItems = [
    { image: './assets/image/gaming_placeholder.jpg', title: 'Revive Couch Co-op!', date: 'January 18, 2023' },
    { image: './assets/image/gameover_placeholder.jpg', title: 'Elden Ring Sucks', date: 'January 11, 2023' },
    { image: './assets/image/mario_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/mario_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/gaming_placeholder.jpg', title: 'Revive Couch Co-op!', date: 'January 18, 2023' },
    { image: './assets/image/gameover_placeholder.jpg', title: 'Elden Ring Sucks', date: 'January 11, 2023' },
    { image: './assets/image/mario_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/mario_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/gaming_placeholder.jpg', title: 'Revive Couch Co-op!', date: 'January 18, 2023' },
    { image: './assets/image/gameover_placeholder.jpg', title: 'Elden Ring Sucks', date: 'January 11, 2023' },
    { image: './assets/image/mario_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/mario_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' }
  ];

  constructor() { }

  expandContainer() {
    this.expanded = !this.expanded;
    this.cta = this.expanded ? 'View Less' : 'View More';

    if (this.expanded) {
      this.numItemsToShow += 8;
    } else {
      setTimeout(() => {
        this.numItemsToShow = 4;
      }, 500)
    }
  }
}