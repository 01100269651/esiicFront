import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StksinqrtranComponent } from './stksinqrtran.component';

describe('StksinqrtranComponent', () => {
  let component: StksinqrtranComponent;
  let fixture: ComponentFixture<StksinqrtranComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StksinqrtranComponent]
    });
    fixture = TestBed.createComponent(StksinqrtranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
