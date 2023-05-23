import { Component } from '@angular/core';
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  faUser = faUser;
  faCaretDown = faCaretDown;
  isLoggedIn = false
  
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
      width: `30%`,
      enterAnimationDuration: 600,
      exitAnimationDuration: 600
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openSignupDialog() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: `30%`,
      enterAnimationDuration: 600,
      exitAnimationDuration: 600
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
