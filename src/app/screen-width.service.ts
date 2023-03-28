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

  getDeviceWidth(): number {
    return window.innerWidth;
  }

  getBreakpoint(breakpoint: string) {
    return BREAKPOINTS[breakpoint];
  }
}

export interface Breakpoints {
  [key: string]: number
}

export const BREAKPOINTS: Breakpoints = {
  xs: 576,
  sm: 768,
  md: 1001,
  lg: 1272,
  xl: 1668
};