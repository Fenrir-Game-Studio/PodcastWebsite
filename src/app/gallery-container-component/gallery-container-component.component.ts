import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { ScreenWidthService } from '../screen-width.service';

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
export class GalleryContainerComponentComponent implements OnInit {
  expanded: boolean = false;
  cta: string = "View More"
  numItemsToShow = 4;
  numToExpandWith = 8
  maxItemsPerRow = 4
  galleryItems = [
    { image: './assets/image/gaming_placeholder.jpg', title: 'Revive Couch Co-op!', date: 'January 18, 2023' },
    { image: './assets/image/gameover_placeholder.jpg', title: 'Elden Ring Sucks', date: 'January 11, 2023' },
    { image: './assets/image/mario_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/super_mario_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/vr_placeholder.jpg', title: 'Revive Couch Co-op!', date: 'January 18, 2023' },
    { image: './assets/image/esport_placeholder.jpg', title: 'Elden Ring Sucks', date: 'January 11, 2023' },
    { image: './assets/image/input_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/learning_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/metroid_placeholder.jpg', title: 'Revive Couch Co-op!', date: 'January 18, 2023' },
    { image: './assets/image/retro_placeholder.jpg', title: 'Elden Ring Sucks', date: 'January 11, 2023' },
    { image: './assets/image/gaming_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/gameover_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' }
  ];

  constructor(private screenWidthService: ScreenWidthService) {

  }
  ngOnInit(): void {
    this.setNumItemsToShowFromThreshold()
  }

  expandContainer() {
    this.expanded = !this.expanded;
    this.cta = this.expanded ? 'View Less' : 'View More';

    if (this.expanded) {
      this.numItemsToShow += 8;
    } else {
      setTimeout(() => {
        this.setNumItemsToShowFromThreshold()
      }, 500)
    }
  }

  setNumItemsToShowFromThreshold() {
    let deviceWidth = this.screenWidthService.getDeviceWidth();

    if(deviceWidth >= this.screenWidthService.getBreakpoint('xl')){
      this.numItemsToShow = 5;
    }else if(deviceWidth >= this.screenWidthService.getBreakpoint('lg')){
      this.numItemsToShow = 3;
    }else if(deviceWidth >= this.screenWidthService.getBreakpoint('md')){
      this.numItemsToShow = 2;
    }else if (deviceWidth >= this.screenWidthService.getBreakpoint('sm')) {
      this.numItemsToShow = 1;
    }else {
      this.numItemsToShow = 1
    }
  }
}