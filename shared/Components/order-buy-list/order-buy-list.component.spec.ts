import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBuyListComponent } from './order-buy-list.component';

describe('OrderBuyListComponent', () => {
  let component: OrderBuyListComponent;
  let fixture: ComponentFixture<OrderBuyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderBuyListComponent]
    });
    fixture = TestBed.createComponent(OrderBuyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
