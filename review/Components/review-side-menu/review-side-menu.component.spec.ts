import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSideMenuComponent } from './review-side-menu.component';

describe('ReviewSideMenuComponent', () => {
  let component: ReviewSideMenuComponent;
  let fixture: ComponentFixture<ReviewSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewSideMenuComponent]
    });
    fixture = TestBed.createComponent(ReviewSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
