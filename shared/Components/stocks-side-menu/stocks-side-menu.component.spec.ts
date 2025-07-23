import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksSideMenuComponent } from './stocks-side-menu.component';

describe('StocksSideMenuComponent', () => {
  let component: StocksSideMenuComponent;
  let fixture: ComponentFixture<StocksSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StocksSideMenuComponent]
    });
    fixture = TestBed.createComponent(StocksSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
