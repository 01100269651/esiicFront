import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuationComponent } from './continuation.component';

describe('ContinuationComponent', () => {
  let component: ContinuationComponent;
  let fixture: ComponentFixture<ContinuationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinuationComponent]
    });
    fixture = TestBed.createComponent(ContinuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
