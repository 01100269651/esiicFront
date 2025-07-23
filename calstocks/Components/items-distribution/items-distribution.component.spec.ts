import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDistributionComponent } from './items-distribution.component';

describe('ItemsDistributionComponent', () => {
  let component: ItemsDistributionComponent;
  let fixture: ComponentFixture<ItemsDistributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsDistributionComponent]
    });
    fixture = TestBed.createComponent(ItemsDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
