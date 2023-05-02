import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormCollabComponent } from './contact-form-collab.component';

describe('ContactFormCollabComponent', () => {
  let component: ContactFormCollabComponent;
  let fixture: ComponentFixture<ContactFormCollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormCollabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
