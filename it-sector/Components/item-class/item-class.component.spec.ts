import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClassComponent } from './item-class.component';

describe('ItemClassComponent', () => {
  let component: ItemClassComponent;
  let fixture: ComponentFixture<ItemClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemClassComponent]
    });
    fixture = TestBed.createComponent(ItemClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
