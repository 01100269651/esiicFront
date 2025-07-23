import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOrderComponent } from './pricing-order.component';

describe('PricingOrderComponent', () => {
  let component: PricingOrderComponent;
  let fixture: ComponentFixture<PricingOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingOrderComponent]
    });
    fixture = TestBed.createComponent(PricingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
