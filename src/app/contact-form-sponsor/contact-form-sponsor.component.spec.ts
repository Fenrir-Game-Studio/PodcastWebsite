import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormSponsorComponent } from './contact-form-sponsor.component';

describe('ContactFormSponsorComponent', () => {
  let component: ContactFormSponsorComponent;
  let fixture: ComponentFixture<ContactFormSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormSponsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
