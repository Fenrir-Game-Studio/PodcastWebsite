import { Component } from '@angular/core';
import { faUser, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';

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
  
  constructor(private router: Router, private dialog: MatDialog) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: `100%`,
      enterAnimationDuration: 600,
      exitAnimationDuration: 600
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openSignupDialog() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: `100%`,
      enterAnimationDuration: 600,
      exitAnimationDuration: 600
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
