import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranOutcomeComponent } from './tran-outcome.component';

describe('TranOutcomeComponent', () => {
  let component: TranOutcomeComponent;
  let fixture: ComponentFixture<TranOutcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranOutcomeComponent]
    });
    fixture = TestBed.createComponent(TranOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
