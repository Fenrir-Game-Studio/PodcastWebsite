import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkButtonComponent } from './social-link-button.component';

describe('SocialLinkButtonComponent', () => {
  let component: SocialLinkButtonComponent;
  let fixture: ComponentFixture<SocialLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLinkButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
