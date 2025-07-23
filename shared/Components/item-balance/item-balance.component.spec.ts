import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBalanceComponent } from './item-balance.component';

describe('ItemBalanceComponent', () => {
  let component: ItemBalanceComponent;
  let fixture: ComponentFixture<ItemBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemBalanceComponent]
    });
    fixture = TestBed.createComponent(ItemBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
