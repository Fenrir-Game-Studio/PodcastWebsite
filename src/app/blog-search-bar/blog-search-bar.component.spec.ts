import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSearchBarComponent } from './blog-search-bar.component';

describe('BlogSearchBarComponent', () => {
  let component: BlogSearchBarComponent;
  let fixture: ComponentFixture<BlogSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
