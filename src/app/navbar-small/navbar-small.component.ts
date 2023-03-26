import { Component } from '@angular/core';
import { faUser, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-small',
  templateUrl: './navbar-small.component.html',
  styleUrls: ['./navbar-small.component.sass']
})
export class NavbarSmallComponent {
  faUser = faUser;
  faCaretDown = faCaretDown;
  faBars = faBars
  isLoggedIn = false;
  
  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
