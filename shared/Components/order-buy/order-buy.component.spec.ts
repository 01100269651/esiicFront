import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBuyComponent } from './order-buy.component';

describe('OrderBuyComponent', () => {
  let component: OrderBuyComponent;
  let fixture: ComponentFixture<OrderBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderBuyComponent]
    });
    fixture = TestBed.createComponent(OrderBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
