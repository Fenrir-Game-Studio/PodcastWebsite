import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedStatBarComponent } from './segmented-stat-bar.component';

describe('SegmentedStatBarComponent', () => {
  let component: SegmentedStatBarComponent;
  let fixture: ComponentFixture<SegmentedStatBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentedStatBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentedStatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
