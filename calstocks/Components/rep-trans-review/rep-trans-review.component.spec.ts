import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepTransReviewComponent } from './rep-trans-review.component';

describe('RepTransReviewComponent', () => {
  let component: RepTransReviewComponent;
  let fixture: ComponentFixture<RepTransReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepTransReviewComponent]
    });
    fixture = TestBed.createComponent(RepTransReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
