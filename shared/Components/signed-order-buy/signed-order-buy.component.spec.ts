import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedOrderBuyComponent } from './signed-order-buy.component';

describe('SignedOrderBuyComponent', () => {
  let component: SignedOrderBuyComponent;
  let fixture: ComponentFixture<SignedOrderBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignedOrderBuyComponent]
    });
    fixture = TestBed.createComponent(SignedOrderBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
