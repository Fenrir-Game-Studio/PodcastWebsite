import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormFeedbackComponent } from './contact-form-feedback.component';

describe('ContactFormFeedbackComponent', () => {
  let component: ContactFormFeedbackComponent;
  let fixture: ComponentFixture<ContactFormFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
