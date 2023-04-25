import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import { trigger, state, style, animate, transition } from '@angular/animations';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { ScreenWidthService } from '../screen-width.service';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-blog-search-bar',
  templateUrl: './blog-search-bar.component.html',
  styleUrls: ['./blog-search-bar.component.sass'],
  animations: [
    trigger('searchButtonPress', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('pressed', style({
        transform: 'scale(0.9)'
      })),
      transition('normal <=> pressed', animate('0.1ms ease-in-out'))
    ]),
    trigger('filterButtonPress', [
      state('normal', style({
        transform: 'translateY(0)'
      })),
      state('pressed', style({
        transform: 'translateY(10px)'
      })),
      transition('normal <=> pressed', animate('0.3ms ease-in-out'))
    ]),
    trigger('entranceAnimation', [
      state('void', style({
        transform: 'translateX(-250%)'
      })),
      transition(':enter', [
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({transform: 'translateX(-250%)'}))
      ])
    ]),
    trigger('entranceAnimationRight', [
      state('void', style({
        transform: 'translateX(250%)'
      })),
      transition(':enter', [
        animate('0.6s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('0.6s ease-in-out', style({transform: 'translateX(250%)'}))
      ])
    ])
  ]
})
export class BlogSearchBarComponent {
  faSearch = faSearch
  faFilter = faFilter
  buttonState = 'normal'
  filterButtonState = 'normal'
  filterEntranceState = false
  showFilters = false
  tags: Tag[] = []
  @Input() width!: number;
  isDesktop: boolean = false

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    let value = (event.value || '').trim();
  
    // Capitalize the first letter of each word
    value = value.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  
    // Add our tag
    if (value) {
      this.tags.push({ name: value });
    }
  
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: Tag, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove tag if it no longer has a name
    if (!value) {
      this.remove(tag);
      return;
    }

    // Edit existing tag
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index].name = value;
    }
  }

  onSearchPressed() {
    this.buttonState = 'pressed';
    setTimeout(() => {
      this.buttonState = 'normal';
    }, 100);
  }

  onFilterPressed() {
    this.showFilters = !this.showFilters
    this.showFilters ? this.filterButtonState = 'pressed' : this.filterButtonState = 'normal';
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
  }
}
