import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Option {
  value: string
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent {
  options = [
    {value: "Option 1"},
    {value: "Option 2"},
    {value: "Option 3"},
    {value: "Option 4"},
    {value: "Option 5"},
    {value: "Option 6"},
  ]
}
