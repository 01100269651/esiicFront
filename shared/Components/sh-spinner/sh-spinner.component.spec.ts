import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShSpinnerComponent } from './sh-spinner.component';

describe('ShSpinnerComponent', () => {
  let component: ShSpinnerComponent;
  let fixture: ComponentFixture<ShSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShSpinnerComponent]
    });
    fixture = TestBed.createComponent(ShSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
