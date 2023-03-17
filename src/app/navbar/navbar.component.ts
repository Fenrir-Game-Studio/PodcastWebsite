import { Component } from '@angular/core';
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  faUser = faUser;
  faCaretDown = faCaretDown;
}
