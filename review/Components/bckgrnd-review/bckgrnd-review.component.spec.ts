import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BckgrndReviewComponent } from './bckgrnd-review.component';

describe('BckgrndReviewComponent', () => {
  let component: BckgrndReviewComponent;
  let fixture: ComponentFixture<BckgrndReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BckgrndReviewComponent]
    });
    fixture = TestBed.createComponent(BckgrndReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
