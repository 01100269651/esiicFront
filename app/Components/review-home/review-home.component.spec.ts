import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHomeComponent } from './review-home.component';

describe('ReviewHomeComponent', () => {
  let component: ReviewHomeComponent;
  let fixture: ComponentFixture<ReviewHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewHomeComponent]
    });
    fixture = TestBed.createComponent(ReviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
