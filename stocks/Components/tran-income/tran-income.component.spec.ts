import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranIncomeComponent } from './tran-income.component';

describe('TranIncomeComponent', () => {
  let component: TranIncomeComponent;
  let fixture: ComponentFixture<TranIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranIncomeComponent]
    });
    fixture = TestBed.createComponent(TranIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
