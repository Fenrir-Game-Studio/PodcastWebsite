import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenWidthService {
  private isLargeScreen: boolean;

  constructor() {
    this.isLargeScreen = this.isGreaterThanThreshold('sm');
  }

  isGreaterThanThreshold(breakpoint: string): boolean {
    return window.innerWidth > BREAKPOINTS[breakpoint]
  }
}

export interface Breakpoints {
  [key: string]: number
}

export const BREAKPOINTS: Breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600
};