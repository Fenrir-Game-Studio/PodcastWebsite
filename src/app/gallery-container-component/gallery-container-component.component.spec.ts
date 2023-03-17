import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryContainerComponentComponent } from './gallery-container-component.component';

describe('GalleryContainerComponentComponent', () => {
  let component: GalleryContainerComponentComponent;
  let fixture: ComponentFixture<GalleryContainerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryContainerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
