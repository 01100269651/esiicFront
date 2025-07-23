import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksMenusComponent } from './stocks-menus.component';

describe('StocksMenusComponent', () => {
  let component: StocksMenusComponent;
  let fixture: ComponentFixture<StocksMenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StocksMenusComponent]
    });
    fixture = TestBed.createComponent(StocksMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
